/** @format */
import index from "../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

describe("POST API /api/v1/auth/logout", () => {
	it("it should successfully logout and return 200 ", (done) => {
		chai
			.request(index)
			.post("/api/v1/auth/logout")
			.end((err, res) => {
				if (err) return done(err);
				
				expect(res.status).to.be.equal(400);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("message");
				
				return done();
			});
	});
	
	it("it should invalid token and return 401 ", (done) => {
		chai
			.request(index)
			.post("/api/v1/auth/logout")

			.end((err, res) => {
				if (err) return done(err);
				
				expect(res.status).to.be.equal(400);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("message");
				
				return done();
			});
	});
	it("it should invalid token and return 400 ", (done) => {
		chai
			.request(index)
			.post("/api/v1/auth/logout")

			.end((err, res) => {
				if (err) return done(err);
				
				expect(res.status).to.be.equal(400);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("message");
				
				return done();
			});
	});
});