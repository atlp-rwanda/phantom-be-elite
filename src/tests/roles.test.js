/** @format */
import index from "../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

let token = "";
let role = 1;
let id = 2;

// Get profile
describe("GET API /api/v1/profile/{:id}", () => {
	it("Should return all single user profile ", (done) => {
		const userId = 1;
		chai
			.request(index)
			.get("/api/v1/roles/" + userId)
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([200]);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("data");
				return done();
			});
	});

	it("Should return Article not found", (done) => {
		const fakeId = 7;
		chai
			.request(index)
			.get("/api/v1/profle/" + fakeId)
			.send()
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([400]);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("message");
				return done();
			});
	});
});


describe("POST API /api/v1/roles/update/id", () => {
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
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([400]);
				expect(res.body).to.have.property("message");
				return done();
			});
	});
	it("Should return success and user role", (done) => {
		chai
			.request(index)
			.put("/api/v1/roles/update/2")
			.send(role)
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([400]);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("message");
				return done();
			});
	});
});