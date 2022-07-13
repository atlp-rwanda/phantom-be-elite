/** @format */
import index from "../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);
let token = "eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiQWRtaW4gVXNlciIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiY3JlYXRlZEF0IjoiMjAyMi0wNi0zMFQwODowNzowMi4xNTdaIiwiaWQiOjF9.72Dt_M_xaolJVWDP209dYX-cI9uZ-DGpGSUetp9uLog";
let busId = 5;
let testBus = 11;

// Buses
describe("POST API/api/v1/assign-route ", () => {
	const bus = {
		bus_number: "Bus-152",
		plate_number: "RAD447C",
		route: "D-302",
	};
	const buss = {
		bus_number: "Bus-152",
		plate_number: "RAD447C",
		route: "",
		
	};
	const bus_2 = {
		bus_number: "Bus-152",
		plate_number: "RAD547C",
		route: "D-302",
	};
	it("Should return Bus validation", (done) => {
		const fakeBus = {
			bus_number: "",
			plate_number: "",
			route: "",
		};
		chai
			.request(index)
			.post("/api/v1/assign-route/")
			.send(fakeBus)
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([400]);
				expect(res.body).to.have.property("message");
				return done();
			});
	});
	it("Should return success and Bus data", (done) => {
		chai
			.request(index)
			.post("/api/v1/assign-route/")
			.send(bus)
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([400]);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("message");
				return done();
			});
			
	});
	it("Should return Plate Number is already in use", (done) => {
		chai
			.request(index)
			.post("/api/v1/assign-route/")
			.send(bus_2)
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([400]);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("message");
				return done();
			});
	});

});
describe("GET API /api/v1/assign-route", () => {
	it("Should return all buses", (done) => {
		chai
			.request(index)
			.get("/api/v1/assign-route")
			.send()
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([200]);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("message");
				return done();
			});
	});
});

describe("GET API /api/v1/assign-route/{:id}", () => {
	it("Should return single bus", (done) => {
		chai
			.request(index)
			.get("/api/v1/assign-route/" + busId)
			.send()
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([200]);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("data");
				return done();
			});
	});

	it("Should return bus not found", (done) => {
		const fakeId = 100;
		chai
			.request(index)
			.get("/api/v1/assign-route/1000")
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

describe("PUT API /api/v1/assign-route/update/{:id}", () => {
	const bus = {
		bus_number: "Bus-152",
		plate_number: "RAD447C",
		route: "D-302",
	};

	it("Should return Bus not found", (done) => {
		const fakeId = 100;
		chai
			.request(index)
			.put("/api/v1/assign-route/" + fakeId)
			.send(bus)
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([400]);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("message");
				return done();
			});
	});
	it("Should return Bus updated successfully", (done) => {
		chai
			.request(index)
			.put("/api/v1/assign-route/" + busId)
			.send(bus)
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([200]);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("message");
				return done();
			});
	});
});

describe("DELETE API /api/v1/assign-route/{:id}", () => {
	it("Should return No Bus not found", (done) => {
		const fakeId = 100;
		chai
			.request(index)
			.delete("/api/v1/assign-route/" + fakeId)
			.send()
			.end((err, res) => {
				if (err) return done(err);
				expect(res).to.have.status([400]);
				expect(res.body).to.have.property("success");
				expect(res.body).to.have.property("message");
				return done();
			});
    });
    it("Should return Bus Deleted Successfully", (done) => {
			chai
				.request(index)
				.delete("/api/v1/assign-route/" + testBus)
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
