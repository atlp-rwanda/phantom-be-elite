/** @format */
import index from "../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);


describe("delete all before testing", () => {});
describe("POST API /api/v1/assign/", () => {

  it("Should return Assign validation when empty data entry in entered", (done) => {
    const fakeAssign = {
      route: "",
      driver_name: "",
      plate_number: "",
    };
    chai
      .request(index)
      .post("/api/v1/assign/")
      .send(fakeAssign)
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([400]);
        expect(res.body).to.have.property("message");
        return done();
      });
  });
  });

describe("GET API /api/v1/assign", () => {
  it("Should return error message assign", (done) => {
    chai
      .request(index)
      .get(`/api/v1/assigns`)
      .send()
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([404]);
        return done();
      });
  });
  it("Should return all assigned", (done) => {
    chai
      .request(index)
      .get("/api/v1/assign")
      .send()
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([200]);
        expect(res.body).to.have.property("status");
        expect(res.body).to.have.property("results");
        expect(res.body).to.have.property("assigned");
        return done();
      });
  });
});
