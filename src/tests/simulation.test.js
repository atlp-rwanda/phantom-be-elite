import index from "../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { describe } from "mocha";
import db from "../models/index"
const rooms = db['businroad'];

chai.should();
chai.use(chaiHttp);
let token = "eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiUmFjaGVsIiwicm9sZSI6ImRyaXZlciIsImVtYWlsIjoiYmVuQGdtYWlsLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjItMDctMDNUMTA6MDA6MzEuNjY1WiIsImlkIjo1fQ.3gZqo3CdzMQpI7dKAYr2OvokcrlPxkXn5b4J6qpYgMw";

describe("POST API /api/v1/busmotion/start", () => {
    const bus = {
        bus_number: "333",
        plate_number: "RAE084A",
        time_start: "12:00",
        origin: "Nyamirambo",
		destination: "Town",
        passengers: "52",
        speed: "30",
		lat:"45.6",
		long:"67.9"
    }
	const bus2 = {
        bus_number: "333",
        plate_number: "RAE034A",
        time_start: "12:00",
        origin: "Nyamirambo",
		destination: "Town",
        passengers: "52",
        speed: "30",
		lat:"45.6",
		long:"67.9"
    }
	it("Should send bus in road", (done) => {
		chai
		    .request(index)
			.post("/api/v1/busmotion/start")
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
			.post("/api/v1/busmotion/start")
			.set('token', token)
			.send(bus)
			.end((err, res) => {
				if (err) return done(err);
                expect(res).to.have.status(400);
				expect(res.body).to.have.property("message");
				 done();
			})
	});
});

describe('PUT API /api/v1/busmotion/update', () => { 
	const userBus = {
        plate_number: "RAE457A",
        speed: "0",
        passengers: "30"
    }
	it("Should return that the bus has been updated", (done) => {
		chai
		.request(index)
		.put("/api/v1/busmotion/update")
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

describe("DELETE API /api/v1/busmotion/stop", () => {
    const plate_number = {
        plate_number: "RAE457B"
    }
	it("Should stop bus in road", (done) => {
		chai
		    .request(index)
			.delete("/api/v1/busmotion/stop")
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
			.delete("/api/v1/busmotion/stop")
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
