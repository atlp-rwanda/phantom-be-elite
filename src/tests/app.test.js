
import app from "../app";
import chai from 'chai';
import chaiHttp from "chai-http";

const port = 3000
app.listen(app.listen(port, () => { console.log("Server listening on port " + port) }))

let should = chai.should();
chai.use(chaiHttp);
const expect = require('chai').expect;

chai.use(chaiHttp);
  describe('/GET book', () => {
      it('it should GET the homepage', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
              res.should.have.status(200);
              // res.status.should.be.equal(200);
              done();
            });
      });
  });
