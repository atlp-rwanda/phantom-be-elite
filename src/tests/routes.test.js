/** @format */
import index from "../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);
let token = "";
let route_id = 1;

describe("delete all before testing", () => {});
describe("POST API /api/v1/route/", () => {
  const route = {
    origin: "kayonza",
    destination: "ndera",
    description: "welcome urwanda ruragendwa",
  };
  const route2 = {
    origin: "kayonza",
    destination: "ndera",
    description: "welcome to the most futuristic place",
  };
  const route_data = {
    origin: "rulindo12",
    destination: "karuruma",
    description: "welcome to the most futuristic place",
    id: 3,
  };

  it("Should return Route validation when empty data entry in entered", (done) => {
    const fakeRoute = {
      origin: " ",
      destination: " ",
      description: " ",
    };
    chai
      .request(index)
      .post("/api/v1/route/")
      .send(fakeRoute)
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([400]);
        expect(res.body).to.have.property("message");
        return done();
      });
  });
  it("Should check duplicate routes created", (done) => {
    chai
      .request(index)
      .post("/api/v1/route/")
      .send(route2)
      .send(route)
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([404]);
        expect(res.body).to.have.property("status");
        expect(res.body).to.have.property("message");
        return done();
      });
  });
});
describe("GET API /api/v1/route", () => {
  it("Should return error message route", (done) => {
    chai
      .request(index)
      .get(`/api/v1/routes`)
      .send()
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([404]);
        return done();
      });
  });
  it("Should return all routes", (done) => {
    chai
      .request(index)
      .get("/api/v1/route")
      .send()
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([200]);
        expect(res.body).to.have.property("routes");
        expect(res.body).to.have.property("results");
        return done();
      });
  });
});

describe("GET API /api/v1/route/{:id}", () => {
  it("Should return error message route", (done) => {
    chai
      .request(index)
      .get(`/api/v1/route/${"num"}`)
      .send()
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([400]);
        expect(res.body).to.have.property("status");
        return done();
      });
  });
  it("Should return single route", (done) => {
    chai
      .request(index)
      .get(`/api/v1/route/${route_id}`)
      .send()
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([200]);
        expect(res.body).to.have.property("route");
        return done();
      });
  });
});

describe("PUT API /api/v1/bus/update/{:id}", () => {
  const route_update = {
    origin: "nyanza",
    destination: "karuruma",
    description: "welcome to the most futuristic place",
  };
  it("Should return Route validation when empty data entry in entered", (done) => {
    const fakeRoute = {
      origin: "n",
      destination: "karuruma",
      description: "welcome to the most futuristic place",
    };
    chai
      .request(index)
      .put("/api/v1/route/" + route_id)
      .send(fakeRoute)
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([400]);
        expect(res.body).to.have.property("message");
        return done();
      });
  });
  it("Should return Route updated successfully", (done) => {
    chai
      .request(index)
      .put("/api/v1/route/" + route_id)
      .send(route_update)
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([202]);
        expect(res.body).to.have.property("route");
        return done();
      });
  });
  it("Should return error message on deleting with invalid id provided", (done) => {
    chai
      .request(index)
      .put(`/api/v1/route/${"num"}`)
      .send(route_update)
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(404);
        expect(res.body).to.have.property("status");
        return done();
      });
  });
});

describe("DELETE API /api/v1/route/{:id}", () => {
  it("Should return Route Deleted Successfully", (done) => {
    chai
      .request(index)
      .delete("/api/v1/route/" + route_id)
      .send()
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status([202]);
        expect(res.body).to.have.property("message");
        return done();
      });
  });
  it("Should return error message on deleting with invalid id provided", (done) => {
    chai
      .request(index)
      .delete(`/api/v1/route/${"num"}`)
      .send()
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(404);
        expect(res.body).to.have.property("status");
        return done();
      });
  });
});
