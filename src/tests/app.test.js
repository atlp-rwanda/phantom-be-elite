/** @format */

import app from "../app";
import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);
const expect = require("chai").expect;

chai.use(chaiHttp);
describe("/GET home page", () => {
	it("it should GET the homepage", (done) => {
		chai
			.request(app)
			.get("/test")
			.end((err, res) => {
				done();
			});
	});
});
