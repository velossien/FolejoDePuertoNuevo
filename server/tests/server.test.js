const expect = require("expect");
const request = require("supertest");
const { ObjectID } = require("mongodb");

const { app } = require("./../server");
const { Image } = require("./../models/imageModel");
const { User } = require("./../models/userModel");
const { images, populateImages, users, populateUsers } = require("./seed/seedData");

beforeEach(populateUsers);
beforeEach(populateImages);

describe("POST /images", () => {

    it("should create a new image document", (done) => {
        let src = "123";
        let lightboxImageSrc = "456";

        request(app)
            .post("/images")
            .set("x-auth", users[0].tokens[0].token)
            .send({
                src: src,
                lightboxImage: {
                    src: lightboxImageSrc
                }
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.src).toBe(src);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                };

                Image.find({ src }).then((images) => {
                    expect(images.length).toBe(1);
                    expect(images[0].src).toBe(src);
                    expect(images[0].lightboxImage.src).toBe(lightboxImageSrc);
                    done();
                }).catch((error) => done(error));
            });
    });
});
