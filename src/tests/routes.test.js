/** @format */
import index from "../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);
let token = "";
let busId = 1;
let testBus = 2;

// Buses
describe("POST API /api/v1/bus/", () => {
  const route = {
    origin: "ndera",
    destination: "kayonza",
    description: "welcome urwanda ruragendwa",
  };
   const route2 = {
     origin: "kayonza",
     destination: "remera",
     description: "welcome to the most futuristic place",
   };
  it("Should return Bus validation", (done) => {
    const fakeRoute = {
      origin: " ",
      destination: " ",
      description: " ",
    };
    chai
      .request(index)
      .post("/api/v1/bus/")
      .send(fakeRoute)
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([400]);
        expect(res.body).to.have.property("message");
        return done();
      });
  });
  it("Should return success and Bus data", (done) => {
    chai
      .request(index)
      .post("/api/v1/bus/")
      .send(bus)
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([400]);
        expect(res.body).to.have.property("success");
        expect(res.body).to.have.property("message");
        return done();
      });
  });
  it("Should return Plate Number is already in use", (done) => {
    chai
      .request(index)
      .post("/api/v1/bus/")
      .send(bus_2)
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([400]);
        expect(res.body).to.have.property("success");
        expect(res.body).to.have.property("message");
        return done();
      });
  });
});

describe("GET API /api/v1/bus", () => {
  it("Should return all buses", (done) => {
    chai
      .request(index)
      .get("/api/v1/bus")
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

describe("GET API /api/v1/bus/{:id}", () => {
  it("Should return single bus", (done) => {
    chai
      .request(index)
      .get("/api/v1/bus/" + busId)
      .send()
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([200]);
        expect(res.body).to.have.property("success");
        expect(res.body).to.have.property("data");
        return done();
      });
  });

  it("Should return bus not found", (done) => {
    const fakeId = 100;
    chai
      .request(index)
      .get("/api/v1/bus/" + fakeId)
      .send()
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([400]);
        expect(res.body).to.have.property("success");
        expect(res.body).to.have.property("message");
        return done();
      });
  });
});

describe("PUT API /api/v1/bus/update/{:id}", () => {
  const bus = {
    bus_number: "Bus-152",
    plate_number: "RAD447C",
    route: "D-302",
  };

  it("Should return Bus not found", (done) => {
    const fakeId = 100;
    chai
      .request(index)
      .put("/api/v1/bus/" + fakeId)
      .send(bus)
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([400]);
        expect(res.body).to.have.property("success");
        expect(res.body).to.have.property("message");
        return done();
      });
  });
  it("Should return Bus updated successfully", (done) => {
    chai
      .request(index)
      .put("/api/v1/bus/" + busId)
      .send(bus)
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([200]);
        expect(res.body).to.have.property("success");
        expect(res.body).to.have.property("message");
        return done();
      });
  });
});

describe("DELETE API /api/v1/bus/{:id}", () => {
  it("Should return No Bus not found", (done) => {
    const fakeId = 100;
    chai
      .request(index)
      .delete("/api/v1/bus/" + fakeId)
      .send()
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([400]);
        expect(res.body).to.have.property("success");
        expect(res.body).to.have.property("message");
        return done();
      });
  });
  it("Should return Bus Deleted Successfully", (done) => {
    chai
      .request(index)
      .delete("/api/v1/bus/" + testBus)
      .send()
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([400]);
        expect(res.body).to.have.property("success");
        expect(res.body).to.have.property("message");
        return done();
      });
  });
});
