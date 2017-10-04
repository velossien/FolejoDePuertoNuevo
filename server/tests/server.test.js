const expect = require("expect");
const request = require("supertest");
const { ObjectID } = require("mongodb");

const { app } = require("./../server");
const { Image } = require("./../models/imageModel");
const { User } = require("./../models/userModel");
const { images, populateImages, users, populateUsers } = require("./seed/seedData");

beforeEach(populateUsers);
beforeEach(populateImages);

describe("***IMAGES***", () => {
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

    describe("DELETE /images:id", () => {

        let deletedID = images[0]._id.toHexString();

        it("should delete an image based off of an id", (done) => {
            request(app)
                .delete(`/images/${deletedID}`)
                .set("x-auth", users[0].tokens[0].token)
                .expect(200)
                .expect((res) => {
                    expect(res.body.image._id).toBe(deletedID);
                })
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    Image.findById(deletedID).then((image) => {
                        expect(image).toNotExist;
                    }).catch((error) => done(error));

                    Image.find().then((imageList) => {
                        expect(imageList.length).toBe(1);
                        done();
                    }).catch((error) => done(error));
                });
        });

        it("should give a 404 if there is no matching image", (done) => {
            let testID = new ObjectID();

            request(app)
                .delete(`/images/${testID.toHexString()}`)
                .set("x-auth", users[0].tokens[0].token)
                .expect(404)
                .end(done);
        });

        it("should give a 404 error if id is not valid", (done) => {
            request(app)
                .delete(`/images/123`)
                .set("x-auth", users[0].tokens[0].token)
                .expect(404)
                .end(done);
        });

        it("should not delete an image by another user", (done) => {
            request(app)
                .delete(`/images/${deletedID}`)
                .set("x-auth", users[1].tokens[0].token)
                .expect(404)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    Image.findById(deletedID).then((image) => {
                        expect(image).toExist;
                        done();
                    }).catch((error) => done(error));
                });
        });
    });

    describe("PATCH /images/:id", () => {

        let patchedID = images[0]._id.toHexString();

        it("should update an image with new information", (done) => {

            request(app)
                .patch(`/images/${patchedID}`)
                .set("x-auth", users[0].tokens[0].token)
                .send({
                    src: "updatedSrc",
                    lightboxImage: {
                        src: "updatedLightBoxSrc"
                    }
                })
                .expect(200)
                .expect((res) => {
                    expect(res.body.image._id).toBe(patchedID)
                })
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    };
                    Image.findById(patchedID).then((image) => {
                        expect(image.src).toBe("updatedSrc");
                        expect(image.lightboxImage.src).toBe("updatedLightBoxSrc");
                        done();
                    }).catch((error) => done(error));
                })
        });

        it("should send back a 404 if image is not found", (done) => {
            let testId = new ObjectID().toHexString();

            request(app)
                .patch(`/images/${testId}`)
                .set("x-auth", users[0].tokens[0].token)
                .send({
                    src: "updatedSrc",
                    lightboxImage: {
                        src: "updatedLightBoxSrc"
                    }
                })
                .expect(404)
                .end(done);
        });

        it("should send back a 404 if id is invalid", (done) => {

            request(app)
                .patch("/images/123")
                .set("x-auth", users[0].tokens[0].token)
                .send({
                    src: "updatedSrc",
                    lightboxImage: {
                        src: "updatedLightBoxSrc"
                    }
                })
                .expect(404)
                .end(done);
        });

        it("should not update an image that belongs to another user", (done) => {

            request(app)
                .patch(`/images/${patchedID}`)
                .set("x-auth", users[1].tokens[0].token)
                .send({
                    src: "updatedSrc",
                    lightboxImage: {
                        src: "updatedLightBoxSrc"
                    }
                })
                .expect(404)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    };
                    Image.findById(patchedID).then((image) => {
                        expect(image.src).toNotBe("updatedSrc");
                        expect(image.lightboxImage.src).toNotBe("updatedLightBoxSrc");
                        done();
                    }).catch((error) => done(error));
                })
        });
    });
});

describe("***USERS***", () => {

    describe("POST /users", () => {

        let username = "Admin1020";
        let password = "LALAPASSWORD";

        it("should add a new user", (done) => {
            request(app)
                .post("/users")
                .send({ username, password })
                .expect(200)
                .expect((res) => {
                    expect(res.headers["x-auth"]).toExist();
                    expect(res.body._id).toExist();
                })
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    User.findOne({ username }).then((user) => {
                        expect(user).toExist();
                        expect(user.password).toNotBe(password); //make sure password is hashed
                        expect(user.tokens[0].token).toExist(); //make sure there is a token
                        done();
                    }).catch((error) => done(error));
                })
        });

        it("should not add a new user without a valid username and password", (done) => {

            let invalidUsername = "";
            let invalidPassword = "";

            request(app)
                .post("/users")
                .send({ invalidUsername, invalidPassword })
                .expect(400)
                .end(done);
        });

        it("should not add a user when the username is already taken", (done) => {
            request(app)
                .post("/users")
                .send({
                    username: "Admin1",
                    password: "Password"
                })
                .expect(400)
                .end(done);
        });
    });

    describe("POST /users/login", () => {

        let username = users[0].username;
        let password = users[0].password;

        it("should login in user and return auth token", (done) => {
            request(app)
                .post("/users/login")
                .send({ username, password })
                .expect(200)
                .expect((res) => {
                    expect(res.headers["x-auth"]).toExist(); //returns newest login x-auth token header
                })
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    User.findById(users[0]._id).then((user) => {
                        expect(user.tokens[1]).toInclude({ 
                            access: "auth",
                            token: res.headers["x-auth"] //token matches the x-auth header received back
                        });
                        done();
                    }).catch((error) => done(error));
                })
        });

        it("should not login a user without a valid username and password", (done) => {

            let invalidPassword = users[0].password + "k";

            request(app)
                .post("/users/login")
                .send({ username, invalidPassword })
                .expect(400)
                .expect((res) => {
                    expect(res.headers["x-auth"]).toNotExist(); //do not get an authenitcated header returned to us
                })
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    };

                    User.findById(users[0]._id).then((user) => {
                        expect(user.tokens.length).toBe(1); //user was not logged in and no new token was made
                        done();
                    }).catch((e) => done(e));
                });
        });
    });
});