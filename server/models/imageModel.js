let mongoose = require("mongoose");

let Image = mongoose.model("Image", {
    src: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    aspectRatio: {
        type: Number,
        required: true
    },
    lightboxImage: {
        src: {
            type: String,
            required: true,
            minlength: 1,
            trim: true
        }
    },
    orderNumber : { //will be for ordering photos later on
        type: Number,
        required: false
    }
});

module.exports = {Image};
