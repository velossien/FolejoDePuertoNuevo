const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");
const _ = require("lodash");

let { mongoose } = require("./db/mongoose");
let { Image } = require("./models/imageModel");

let app = express();

app.use(bodyParser.json()); //allows us to send JSON to our express app

//POST - adds an image document to the database
app.post("/images", async (req, res) => {

    let orderID;
    if (req.body.orderNumber) {
        orderID = req.body.orderNumber;
    } else {
        orderID = 1;
    }

    let image = new Image({
        src: req.body.src,
        width: 300,
        height: 300,
        aspectRatio: 1,
        lightboxImage: {
            src: req.body.lightboxImage.src
        },
        orderNumber: orderID
    });

    try {
        let newImage = await image.save();
        res.send(newImage);
    } catch (err) {
        res.status(400).send(err);
    }
});

//GET - finds all image documents in the database and returns them
app.get("/images", async (req, res) => {
    try {
        let images = await Image.find();
        res.send({ images });
    } catch (err) {
        res.status(400).send(err);
    }
});

//GET by ID - finds and returns an image document that has a certain ID
app.get("/images/:id", async (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    try {
        let image = await Image.findById(id);

        if (!image) {
            return res.status(404).send();
        }
        res.send({ image });
    } catch (err) {
        res.status(400).send();
    }
});


//DELETE - deletes image document from collection based on its id
app.delete("/images/:id", async (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    try {
        let image = await Image.findByIdAndRemove(id);

        if (!image) {
            return res.status(404).send();
        }
        res.send({ image });
    } catch (err) {
        res.status(400).send();
    }
});

//PATCH  - allows user to update the src location of the full or thumbnail sized images and orderNumber for a sepcific image document based on id
app.patch("/images/:id", async (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ["src", "lightboxImage.src", "orderNumber"]);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    try {
        let image = await Image.findByIdAndUpdate(id, { $set: body }, { new: true });
        if (!image) {
            return res.status(404).send();
        }

        res.send({ image });
    } catch (err) {
        res.status(400).send();
    }
});


app.listen(3000, () => {
    console.log("Started on port 3000");
});

module.exports = {app};