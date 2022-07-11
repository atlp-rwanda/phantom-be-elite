/** @format */
import index from "../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);
// let token = "";

// Sign in
describe("POST API /api/v1/auth/logout", () => {
	// it("Admin should successfully logout and return 200 and get token", (done) => {
	// 	chai
	// 		.request(index)
	// 		.post("/api/v1/auth/logout")
	// 		.set({'authorization':'eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoicHJpbmNlIiwicm9sZSI6ImRyaXZlciIsImVtYWlsIjoicHJpbmNlQGdtYWlsLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjItMDYtMjJUMTU6NDI6MzcuMzM5WiIsImlkIjoxfQ.JtqkXU-hMpLP3eVOXTcvV-0VcZ4JdgVH0Ho5fXOcTpQ'})
	// 		.end((err, res) => {
	// 			if (err) return done(err);
	// 			expect(res.status).to.be.equal(200);
	// 			expect(res.body).to.have.property("success");
	// 			expect(res.body).to.have.property("message");
				
	// 			return done();
	// 		});
	// });

	it("Admin should return unsuccessfully when token is empty", (done) => {
		chai
			.request(index)
			.post("/api/v1/auth/logout")
			.set({'authorization':''})
			.end((err, res) => {
				if (err) return done(err);
				expect(res.status).to.be.equal(400);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("message");
				
				return done();
			});
	});
	it("Admin should return error when token not defined", (done) => {
		chai
			.request(index)
			.post("/api/v1/auth/logout")
			.set({'authorization':'eyJhbGciOiJIUzI1NiJ9.eIjoicHJpbmNlQGdtYWlsLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjItMDYtMjJUMTU6NDI6MzcuMzM5WiIsImlkIjoxfQ.JtqkXU-hMpLP3eVOXTcvV-0VcZ4JdgVH0Ho5fXOcTpQ'})
			.end((err, res) => {
				if (err) return done(err);
				expect(res.status).to.be.equal(401);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("message");
				
				return done();
			});
	});
	
});