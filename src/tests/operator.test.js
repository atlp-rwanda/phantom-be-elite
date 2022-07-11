/** @format */
require("dotenv").config({ path: ".env" })
import index from "../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";



chai.use(chaiHttp);

describe("GET API /api/v1/operators", () => {
    it("Should return all registered operators ", (done) => {

        chai
            .request(index)
            .get("/api/v1/operators")
            .send()
            .end((err, res) => {
                if (err) return done(err);
                expect(res).to.have.status([200]);
                expect(res.body).to.have.property("success");
                expect(res.body).to.have.property("data");
                return done();
            });
    });
});

describe("POST API /api/v1/operators", () => {
    const userData = {
        name: "Testing names",
        email: "sussy@gmail.com",
        id_number: "1111111111111112",
        permit_id: "1111111111111113",
        phone: "780000001",
    };
    const userDataTwo = {
        name: "Testing names",
        email: "test@gmail.com",
        id_number: "1111111111111112",
        permit_id: "1111111111111113",
        phone: "780000001",
    };
    it("OPERATOR REGISTER!!!🔥🔥🔥🔥🔥", (done) => {
        chai
            .request(index)
            .post("/api/v1/operators")
            .send(userData)
            .end((err, res) => {
                if (err) return done(err);
                expect(res).to.have.status([401]);
                expect(res.body).to.have.property("message");
                return done();
            });
    });
    it("OPERATOR HAS BEEN REGISTERED ERROR 🌋🌋🌋", (done) => {
        chai
            .request(index)
            .post("/api/v1/operators")
            .send(userDataTwo)
            .end((err, res) => {
                if (err) return done(err);
                expect(res).to.have.status([401]);
                expect(res.body).to.have.property("message");
                return done();
            });
    });
});