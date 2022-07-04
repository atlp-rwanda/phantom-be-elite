/** @format */
import index from "../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);


describe("delete all before testing", () => {});
describe("POST API /api/v1/assign/", () => {
  const assign2 = {
    route: "karuruma - kimironko",
    driver_name: "Sylvain Niyonkuru",
    plate_number: "RAD 23480 B",
  };

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
  // it("Should check duplicate assigns created", (done) => {
  //   chai
  //     .request(index)
  //     .post("/api/v1/assign/")
  //     .send(assign2)
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       expect(res).to.have.status([404]);
  //       expect(res.body).to.have.property("status");
  //       expect(res.body).to.have.property("message");
  //       return done();
  //     });
  // });
   it("Should be able to create the assign and delete the assign", function (done) {
      const assign = {
        route: "kayonza - nyandungu",
        driver_name: "Aimable Nyagahungu",
        plate_number: " RAD 239342 B",
      };
     chai
       .request(index)
       .post("/api/v1/assign/")
       .send(assign)
       .end((err, res) => {
         if (err) return done(err);
         expect(res).to.have.status(201);
         expect(res.body).to.have.property("route");
         expect(res.body).to.have.property("status");
             // propagate the test block to delete the created assign using its id.
             chai
               .request(index)
               .delete(`/api/v1/assign/${res.body.route[0].id}`)
               .send()
               .end((err, res) => {
                 if (err) return done(err);
                 expect(res).to.have.status([202]);
                 expect(res.body).to.have.property("message");
                 return done();
               });
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

describe("DELETE API /api/v1/route/{:id}", () => {
  });
  it("Should return error message on deleting with invalid id provided", (done) => {
    chai
      .request(index)
      .delete(`/api/v1/assign/${"num"}`)
      .send()
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(404);
        expect(res.body).to.have.property("status");
        return done();
      });
  });
