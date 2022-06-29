import app from "../app";
import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);
const expect = require("chai").expect;

chai.use(chaiHttp);
describe("GET BUS CURRENT INFO", () => {
    it("it should get the bus current info", (done) => {
        chai
            .request(app)
            .get("/api/v1/bus-info")
            .end((err, res) => {
                done();
            });
    });
});