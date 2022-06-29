/** @format */
import index from "../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

let token = "eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoic2FsaW0iLCJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6InNhbGltQGdtYWlsLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjItMDYtMjlUMDg6NDQ6MDcuODc5WiIsImlkIjozfQ.sITEadBATeDArH9nwluZnnjR1uVlQJYMxANKjnV52tU";
let token2 = "eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoic2FsaW0iLCJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6InNhbGltQGdtYWlsLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjItMDYtMjlUMDg6NDQ6MDcuODc5WiIsImlkIjozfQ.sITEadBATeDArH9nwluZnnjR1uVlQJYMxANKjnV52";
let role = 'admin';
let role2=""
let id = 2;

// Get profile
describe("GET API /api/v1/profile/{:id}", () => {
	it("Should return all single user profile ", (done) => {
		const userId = 1;
		chai
			.request(index)
			.get("/api/v1/roles/" + userId)
			.set('token', token)
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([200]);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("data");
				return done();
			});
	});
	it("Should not return all single user profile  ", (done) => {
		const userId = 23;
		chai
			.request(index)
			.get("/api/v1/roles/" + userId)
			.set('token', token)
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([400]);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("message");
				return done();
			});
	});
});


describe("PUT API /api/v1/roles/update/id", () => {
	const bus = {
		role: "operator",
		id: "2",
	};
	it("Should return assigned role to the user", (done) => {
		const fakerole = {
			role: "",
			id: "",
		};
		chai
			.request(index)
			.put("/api/v1/roles/update/2")
			.send(fakerole)
			.set('token', token2)
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([400]);
				expect(res.body).to.have.property("message");
				return done();
			});
	});
	it("Should return assigned role to the user", (done) => {
		const fakerole = {
			role: "",
			id: "",
		};
		chai
			.request(index)
			.put("/api/v1/roles/update/2")
			.send(fakerole)
			.set('token', token)
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([400]);
				expect(res.body).to.have.property("message");
				return done();
			});
	});
	it("Should return assigned role to the user", (done) => {
		const fakerole = {
			role: "",
			id: "",
		};
		chai
			.request(index)
			.put("/api/v1/roles/update")
			.send(fakerole)
			.set('token', token2)
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([400]);
				expect(res.body).to.have.property("message");
				return done();
			});
	});
	it("Should Update success and user role", (done) => {
		chai
			.request(index)
			.put("/api/v1/roles/update/2")
			.send(role)
			.set('token', token)
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([200]);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("message");
				return done();
			});
	});
	it("Should Not Update success and user role", (done) => {
		chai
			.request(index)
			.put("/api/v1/roles/update/274")
			.send(role)
			.set('token', token)
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([400]);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("message");
				return done();
			});
	});

});