
import app from "../index";
import chai from 'chai';
import chaiHttp from "chai-http";


const should = chai.should();
chai.use(chaiHttp);


describe.only("homepage Check Test", function () {
  describe("/GET homepage", () => {
    it("it should GET the homepage status", (done) => {
      chai
        .request(app)
        .get("/")
        .end((error, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});