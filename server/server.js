require("./config/config");

const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");
const _ = require("lodash");
const bcrypt = require("bcryptjs");


let { mongoose } = require("./db/mongoose");
let { Image } = require("./models/imageModel");
let { User } = require("./models/userModel");
let { authenticate } = require("./middleware/authenticate");

let app = express();

app.use(bodyParser.json()); //allows us to send JSON to our express app

/*--------- Image Documents ---------*/

//POST - adds an image document to the database
app.post("/images", authenticate, async (req, res) => {

    // let orderID;
    // if (req.body.orderNumber) {
    //     orderID = req.body.orderNumber;
    // } else {
    //     orderID = 1;
    // }

    let image = new Image({
        src: req.body.src,
        width: 300,
        height: 300,
        aspectRatio: 1,
        lightboxImage: {
            src:req.body.lightboxImage.src
        },
        _creator: req.user._id,
        orderNumber: 1
    });

    try {
        let newImage = await image.save();
        res.send(newImage);
    } catch (err) {
        res.status(400).send(err);
    }
});

//GET - finds all image documents in the database and returns them
app.get("/images", authenticate, async (req, res) => {
    try {
        let images = await Image.find({
            _creator: req.user._id //only finds images that the user posted
        });
        res.send({ images });
    } catch (err) {
        res.status(400).send(err);
    }
});


//GET by ID - finds and returns an image document that has a certain ID
app.get("/images/:id", authenticate, async (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    try {
        let image = await Image.findOne({
            _id: id,
            _creator: req.user._id
        });

        if (!image) {
            return res.status(404).send();
        }
        res.send({ image });
    } catch (err) {
        res.status(400).send();
    }
});


//DELETE - deletes image document from collection based on its id
app.delete("/images/:id", authenticate, async (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    try {
        let image = await Image.findOneAndRemove({
            _id: id,
            _creator: req.user._id
        });

        if (!image) {
            return res.status(404).send();
        }
        res.send({ image });
    } catch (err) {
        res.status(400).send();
    }
});

//PATCH  - allows user to update the src location of the full or thumbnail sized images and orderNumber for a sepcific image document based on id
app.patch("/images/:id", authenticate, async (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ["src", "lightboxImage.src", "orderNumber"]);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    try {
        let image = await Image.findOneAndUpdate({
            _id: id,
            _creator: req.user._id
        },{ $set: body }, { new: true });
        if (!image) {
            return res.status(404).send();
        }

        res.send({ image });
    } catch (err) {
        res.status(400).send();
    }
});

/*--------- User Documents ---------*/
//POST "/users" - creates a user (used once in this instance to create an Admin user)
app.post("/users", async (req, res) => {
    try {
        let body = _.pick(req.body, ["username", "password"]);
        let user = new User(body);

        user = await user.save();
        const token = await user.generateAuthToken();
        res.header("x-auth", token).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

//GET "/users/me" - requires authentication then finds user and returns them
app.get("/users/me", authenticate, (req, res) => {
    res.send(req.user);
});

//POST /users/login - allows a user to login
app.post("/users/login", async (req, res) => {
    try {
        const body = _.pick(req.body, ["username", "password"]);
        const user = await User.findByCredentials(body.username, body.password);
        const token = await user.generateAuthToken();
        res.header("x-auth", token).send(user);
    } catch (err) {
        res.status(400).send();
    };
});

//DELETE /users/me/token - logs a user out (deletes token)
app.delete("/users/me/token", authenticate, async (req, res) => {
    try {
        await req.user.removeToken(req.token);
        res.status(200).send();
    } catch (err) {
        res.status(400).send();
    };
});

app.listen(3000, () => {
    console.log("Started on port 3000");
});

module.exports = { app };