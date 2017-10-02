const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcryptjs");

let UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access:{
            type: String,
            required: true
        },
        token:{
            type: String,
            required: true
        }
    }]
});

let salt = process.env.JWT_SECRET;

//makes it so we will not return the token, password, or "Admin" username to user
UserSchema.methods.toJSON = function () {
    let userObject = this.toObject();
    return _.pick(userObject, ["_id"]);
};

//generates a new token for the user and returns it (in a promise)
UserSchema.methods.generateAuthToken = function (){
    let access = "auth";
    let token = jwt.sign({_id: this._id.toHexString(), access}, salt).toString();

    this.tokens.push({access,token});
    return this.save().then(()=> {
        return token;
    });
};

//removes token from user
UserSchema.methods.removeToken = function(tokenToRemove){
    return this.update({
        $pull:{
            tokens:{
                token: tokenToRemove
            }
        }
    });
};

//finds a user by their token
UserSchema.statics.findByToken = function(token){
    let decoded;

    try{
        decoded=jwt.verify(token,salt);
    } catch (err){
        return Promise.reject();
    };

    return this.findOne({
        "_id": decoded._id,
        "tokens.token": token,
        "tokens.access":"auth"
    });
};


//finds a user by their username/password
UserSchema.statics.findByCredentials = function (username, password){
    return this.findOne({username}).then((user)=>{
        if(!user){
            return reject();
        }

        return bcrypt.compare(password, user.password).then((res)=>{
            if(res){
                return user;
            } else{
                return Promise.reject();
            };
        });
    });
};

//middleware that hashes password before saving the user document to the database - is called before any save()
UserSchema.pre("save", function(next){
    if(this.isModified("password")){
        bcrypt.genSalt(10, (err,salt)=>{
            bcrypt.hash(this.password, salt, (err,hash)=>{
                this.password = hash;
                next();
            });
        });
    } else{
        next();
    };
});

let User = mongoose.model("User", UserSchema);

module.exports = {User};