
/** @format */
import index from "../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

// Get profile
describe("GET API /api/v1/profile/{:id}", () => {
	it("Should return profile not found", (done) => {
		const fakeId = 90;
		chai
			.request(index)
			.get("/api/v1/profile/" + fakeId)
			.send()
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([400]);
				expect(res.body).to.have.property("success");
			
				return done();
			});
	});
});

describe("PUT API /api/v1/profile/update/{:id}", () => {
	const userData = {
		name: "Testing names",
		email: "test@gmail.com",
		id_number: "1111111111111112",
		permit_id: "1111111111111113",
		phone: "0780000001",
	};
	it("Should return User Profile not found", (done) => {
		const fakeId = 90;
		chai
			.request(index)
			.put("/api/v1/profile/update/" + fakeId)
			.send(userData)
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([404]);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("message");
				return done();
			});
	});
    it("Should return Profile Updated Successfully", (done) => {
        const userId = 4;
		chai
			.request(index)
			.put("/api/v1/profile/update/" + userId)
			.send(userData)
			.end((err, res) => {
				if (err) return done(err);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("message");
				return done();
			});
	});
});
