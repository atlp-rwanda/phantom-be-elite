import index from "../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { describe } from "mocha";
import db from "../models/index"
const rooms = db['businroad'];

chai.should();
chai.use(chaiHttp);
let token = "eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoicHJpbmNlIiwicm9sZSI6ImRyaXZlciIsImVtYWlsIjoicHJpbmNlQGdtYWlsLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjItMDctMTJUMDk6MDg6MjQuMjUwWiIsImlkIjoxfQ.dAT5ZwVzWwMalwjgeZFGuHA-cR8rG1l04HNcM3H_Oko";

describe("POST API /api/v1/bus/start", () => {
    const bus = {
		driver_id:"222",
		plate_number:"RAE555A",
		origin:"Nyamirambo",
		destination:"kicukiro",
		passengers:"30",
		speed:"20",
		lat:"45.6",
		long:"67.9"
    }
	const bus2 = {
		driver_id:"222",
		plate_number:"RAE555A",
		origin:"Nyamirambo",
		destination:"kicukiro",
		passengers:"30",
		speed:"20",
		lat:"45.6",
		long:"67.9"
    }
	it("Should send bus in road", (done) => {
		chai
		    .request(index)
			.post("/api/v1/bus/start")
			.set('token', token)
			.send(bus)
			.end((err, res) => {
				if (err) return done(err);
                expect(res).to.have.status([200]);
				expect(res.body).to.have.property("message");
				done();
			})
	});
    it("Should fail to send bus in road", (done) => {
		chai
		    .request(index)
			.post("/api/v1/bus/start")
			.set('token', token)
			.send(bus2)
			.end((err, res) => {
				if (err) return done(err);
                expect(res).to.have.status(400);
				expect(res.body).to.have.property("message");
				 done();
			})
	});
});

describe("DELETE API /api/v1/bus/stop", () => {
    const plate_number = {
        plate_number: "RAE555A"
    }
	it("Should stop bus in road", (done) => {
		chai
		    .request(index)
			.delete("/api/v1/bus/stop")
			.set('token', token)
			.send(plate_number)
			.end((err, res) => {
				if (err) return done(err);
                expect(res).to.have.status([200]);
				expect(res.body).to.have.property("message");
				done();
			})
	});
    it("Should fail to stop bus in road", (done) => {
		chai
		    .request(index)
			.delete("/api/v1/bus/stop")
			.set('token', token)
			.send(plate_number)
			.end((err, res) => {
				if (err) return done(err);
                expect(res).to.have.status(400);
				expect(res.body).to.have.property("message");
				done();
			})
	});
});
describe('PUT API /api/v1/bus/update', () => { 
	const userBus = {
        plate_number: "RAE678A",
        speed: "0",
        passengers: "30"
    }
	it("Should return that the bus has been updated", (done) => {
		chai
		.request(index)
		.put("/api/v1/bus/update")
		.set('token', token)
		.send(userBus)
		.end((err, res) => {
		if (err) return done(err);
		expect(res).to.have.status([200]);
		expect(res.body).to.have.property("message");
		 done();
	})
});
})
describe('GET /api/v1/bus/businroad',() =>{
	const route = {
        destination:"kicukiro"
    }
	it("Should return that the bus have been found in route that have been specified", (done) => {
	chai
	.request(index)
	.get("/api/v1/bus/businroad")
	.set('token', token)
	.send(route)
	.end((err,res) => {
		expect(res).to.have.status([200]);
		expect(res.body).to.have.property("message");
		 done();
	})
  })
})
