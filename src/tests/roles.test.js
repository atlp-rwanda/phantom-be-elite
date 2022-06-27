/** @format */
import index from "../index";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import authorize from "../middleware/authorize"

chai.use(chaiHttp);


let token = "";
let role = 1;
let id = 2;

chai.request(index)
  .put('/api/v1/roles/update/2')
  .send({ role: 'admin', id: '2' })
  .then(function (res) {
     expect(res).to.have.status(200);
  })
  .catch(function (err) {
     throw err;
  });


chai.request(index)
  .put('/api/v1/roles/update/2')
  .set('token', 'eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiQWRtaW4gVXNlciIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiY3JlYXRlZEF0IjoiMjAyMi0wNi0yNlQxMjowMjo1MS40NjJaIiwiaWQiOiIxIn0.24fHl1d3wxAYP01fT4GEn_kht8Cl_92gChiFsilWrWE')
  .send({ role: 'admin', id: '2' })
  .end(function (err, res) {
    expect(res).to.have.status(200);
    });
