import index from "../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

// Get profile
describe("GET API /api/v1/post", () => {
	it("Should return all single user profile ", (done) => {
		chai
			.request(index)
			.get("/api/v1/post")
			.send()
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([200]);
				expect(res.body).to.have.property("success");
				return done();
			});
	});
})