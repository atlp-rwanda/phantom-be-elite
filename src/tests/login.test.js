/** @format */
import index from "../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);
let token = "";

// Sign in
describe("POST API /api/v1/auth/login", () => {
	const user2 = {
		email: "princ@gmail.com",
		password: "password",
	};
	const user3 = {
		email: "test@gmail.com",
		password: "password",
	};
	it("User should not be able to be login due to Invalid email ", (done) => {
		chai
			.request(index)
			.post("/api/v1/auth/login")
			.send(user2)
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([401]);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("message");
				return done();
			});
	});
	it("User should not be able to be login due to Invalid Password", (done) => {
		chai
			.request(index)
			.post("/api/v1/auth/login")
			.send(user3)
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([401]);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("message");
				return done();
			});
	});
});
