//middleware that will authenticate a users token

let {User} = require("./../models/userModel");

let authenticate = (req, res, next) => {
    let token = req.header("x-auth");  

    User.findByToken(token).then((user)=> {
        if(!user){
            return Promise.reject();
        }

        req.user= user;
        req.token = token;
        next();
    }).catch((err)=>{
        res.status(401).send();
    });
};

module.exports = {authenticate};