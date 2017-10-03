const { ObjectID } = require("mongodb");
const jwt = require("jsonwebtoken");

const { Image } = require("./../../models/imageModel");
const { User } = require("./../../models/userModel");

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const images = [{
    src: 'fakeFullImageSrc1',
    _id: new ObjectID(),
    width: 300,
    height: 300,
    aspectRatio: 1,
    lightboxImage: {
        src: 'fakeThumbImageSrc1'
    },
    _creator: userOneId,
    _id: new ObjectID()
}, {
    src: 'fakeFullImageSrc2',
    width: 300,
    height: 300,
    aspectRatio: 1,
    lightboxImage: {
        src: 'fakeThumbImageSrc2'
    },
    _creator: userTwoId,
    _id: new ObjectID()
}]

const users = [{
    _id: userOneId,
    username: "Admin1",
    password: "userOnePass",
    tokens: [{
        access: "auth",
        token: jwt.sign({ _id: userOneId, access: "auth" }, process.env.JWT_SECRET).toString()
    }]
}, {
    _id: userTwoId,
    username: "Admin2",
    password: "userTwoPass",
    tokens: [{
        access: "auth",
        token: jwt.sign({ _id: userTwoId, access: "auth" }, process.env.JWT_SECRET).toString()
    }]
}];

const populateImages = (done) => { //before each test case - do this.
    Image.remove({}).then(() => {
        return Image.insertMany(images);  //removes items from database and then tacks on our test array
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        let userOne = new User(users[0]).save(); //promise 1
        let userTwo = new User(users[1]).save(); //promise 2

        return Promise.all([userOne, userTwo]) //will wait for both promises to come back before continuing
    }).then(() => done());
};

module.exports = {images, populateImages, users, populateUsers};