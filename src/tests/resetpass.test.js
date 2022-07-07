// import index from "../app";
// import chai, { expect } from "chai";
// import chaiHttp from "chai-http";

// chai.use(chaiHttp);

// // Get profile
// describe("GET API /api/v1/password", () => {
//     const email = {
//         email: "xldivin@gmail.com"
//     }
// 	it("Should return user", (done) => {
// 		chai
// 			.request(index)
// 			.post("/api/v1/password")
// 			.send(email)
// 			.end((err, res) => {
// 				if (err) return done(err);
//                 expect(res).to.have.status([200]);
// 				expect(res.body).to.have.property("message");
// 				return done();
// 			});
// 	});

// 	it("Should return not user found", (done) => {
// 		const fakeemail = "h@gmail.com"
// 		chai
// 			.request(index)
// 			.post("/api/v1/password")
// 			.send(fakeemail)
// 			.end((err, res) => {
// 				if (err) return done(err);
// 				expect(res).to.have.status([400]);
// 				expect(res.body).to.have.property("success");
// 				expect(res.body).to.have.property("message");
// 				return done();
// 			});
// 	});
// });

// describe("PUT API /api/v1/resetpassword/", () => {
// 	const userData = {
// 		email: "xldivin@gmail.com",
// 		password: "1111",
// 		confirmPassword: "1111"
// 	};
//     const userData2 = {
// 		email: "xldivin@gmail.com",
// 		password: "1111",
// 		confirmPassword: "1112"
// 	};
//     const userData3 = {
// 		email: "h@gmail.com",
// 		password: "1111",
// 		confirmPassword: "1111"
// 	};
// 	it("Should return that the password was changed", (done) => {
// 		chai
// 			.request(index)
// 			.put("/api/v1/resetpassword")
// 			.send(userData)
// 			.end((err, res) => {
// 				if (err) return done(err);
// 				expect(res).to.have.status([200]);
// 				expect(res.body).to.have.property("message");
// 				return done();
// 			});
// 	});
//     it("Should return that the password does not match", (done) => {
// 		chai
// 			.request(index)
// 			.put("/api/v1/resetpassword")
// 			.send(userData2)
// 			.end((err, res) => {
// 				if (err) return done(err);
// 				expect(res).to.have.status([400]);
// 				expect(res.body).to.have.property("message");
// 				return done();
// 			});
// 	});
//     it("Should return User not found", (done) => {
// 		chai
// 			.request(index)
// 			.put("/api/v1/resetpassword")
// 			.send(userData3)
// 			.end((err, res) => {
// 				if (err) return done(err);
// 				expect(res).to.have.status([400]);
// 				expect(res.body).to.have.property("message");
// 				return done();
// 			});
// 	});
// })
