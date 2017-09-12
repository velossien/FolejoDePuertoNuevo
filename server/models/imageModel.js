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
        required: false
    },
    height: {
        type: Number,
        required: false
    },
    aspectRatio: {
        type: Number,
        required: false
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
