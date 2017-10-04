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

    it("should not create a image with no src or lightbox src", (done) => {

        request(app)
            .post("/images")
            .set("x-auth", users[0].tokens[0].token)
            .send({
                src: "",
                lightboxImage: {
                    src: ""
                }
            })
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Image.find().then((images) => {
                    expect(images.length).toBe(2);
                    done();
                }).catch((error) => done(error));
            });
    });
});

describe("GET /images", () => {

    it("should get all the images by a certain user", (done) => {
        request(app)
            .get("/images")
            .set("x-auth", users[0].tokens[0].token)
            .expect(200)
            .expect((res) => {
                expect(res.body.images.length).toBe(1);
            })
            .end(done);
    });

    it("should not get images if no auth-x token (if not logged in)", (done) => {
        request(app)
            .get("/images")
            .expect(401)
            .end(done)
    });
});

describe("GET /images/:id", () => {

    it("should find a specific image by its id", (done) => {

        request(app)
            .get(`/images/${images[0]._id.toHexString()}`)
            .set("x-auth", users[0].tokens[0].token)
            .expect(200)
            .expect((res) => {
                expect(res.body.image.src).toBe(images[0].src);
            })
            .end(done);
    });

    it("should not return an image if created by another user", (done) => {
        request(app)
            .get(`/images/${images[0]._id.toHexString()}`)
            .set("x-auth", users[1].tokens[0].token)
            .expect(404)
            .end(done);
    });

    it("should return 404 if the id given is a non-object id", (done) => {
        request(app)
            .get("/images/123")
            .set("x-auth", users[0].tokens[0].token)
            .expect(404)
            .end(done);
    });

    it("should return 404 if image not found", (done) => {
        
                let testID = new ObjectID();
        
                request(app)
                    .get(`/images/${testID.toHexString()}`)
                    .set("x-auth", users[0].tokens[0].token)
                    .expect(404)
                    .end(done);
            });
});

