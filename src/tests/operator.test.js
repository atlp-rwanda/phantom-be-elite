/** @format */
require("dotenv").config({ path: ".env" })
import index from "../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";



const mg = require('mailgun-js');
const mailgun = () =>
    mg({
        apiKey: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMIAN,
    });

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
        email: "test@gmail.com",
        id_number: "1111111111111112",
        permit_id: "1111111111111113",
        phone: "780000001",
    };
    it("The register operation did'nt went well", (done) => {
        chai
            .request(index)
            .post("/api/v1/operators")
            .send(userData)
            .end((err, res) => {
                if (err) {
                    expect(res).to.have.status([401]);
                }
                expect(res).to.have.status([201]);
                expect(res.body).to.have.property("message");
                expect(res.body).to.have.property("success");
                return done();
            });
    });
});