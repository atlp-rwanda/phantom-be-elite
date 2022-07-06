import index from "../app";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { describe } from "mocha";

chai.use(chaiHttp);
let token = "eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiUmFjaGVsIiwicm9sZSI6ImRyaXZlciIsImVtYWlsIjoiYmVuQGdtYWlsLmNvbSIsImNyZWF0ZWRBdCI6IjIwMjItMDctMDNUMTA6MDA6MzEuNjY1WiIsImlkIjo1fQ.3gZqo3CdzMQpI7dKAYr2OvokcrlPxkXn5b4J6qpYgMw";

describe("POST API /api/v1/bus/start", () => {
    const bus = {
        bus_number: "333",
        plate_number: "RAE457A",
        time_start: "12:00",
        origin: "Nyamirambo",
		destination: "Town",
        passengers: "52",
        speed: "30"
    }
	const bus3 = {
        bus_number: "333",
        plate_number: "RAE034A",
        time_start: "12:00",
        origin: "Nyamirambo",
		destination: "Town",
        passengers: "52",
        speed: "30"
    }
    const bus2 = "N"
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
				return done();
			});
	});
    it("Should fail to send bus in road", (done) => {
		chai
			.request(index)
			.get("/api/v1/bus/start")
			.set('token', token)
			.send(bus2)
			.end((err, res) => {
				if (err) return done(err);
                expect(res).to.have.status(400);
				expect(res.body).to.have.property("message");
				return done();
			});
	});
});

describe("DELETE API /api/v1/bus/stop", () => {
    const plate_number = {
        plate_number: "RAE457A"
    }
	const plate_number2 = {
        plate_number: "RAE457"
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
				return done();
			});
	});
    it("Should fail to send bus in road", (done) => {
		chai
			.request(index)
			.get("/api/v1/bus/start")
			.set('token', token)
			.send(plate_number2)
			.end((err, res) => {
				if (err) return done(err);
                expect(res).to.have.status(400);
				expect(res.body).to.have.property("message");
				return done();
			});
	});
});
describe('PUT API /api/v1/bus/update', () => { 
	const userBus = {
        plate_number: "RAE034A",
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
		return done();
	});
});
})
describe('GET /api/v1/bus/businroad',() =>{
	const route = {
        destination:"Town"
    }
	it("Should return that the bus have been found in route that have been specified", (done) => {
	chai
	.request(index)
	.get("/api/v1/bus/businroad")
	.set('token', token)
	.send(route)
	.end((err,res) => {
		if (err) return done(err);
		expect(res).to.have.status([200]);
		expect(res.body).to.have.property("message");
		return done();
	})
  })
})
