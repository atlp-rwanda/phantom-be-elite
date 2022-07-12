/** @format */

import pool from "../Database/database";
import { busValidation } from "../validations/index";

export const getAllBuses = async (req, res) => {
	const buses = await pool.query(
		`SELECT * FROM public."Buses" ORDER BY id ASC  `
	);
	return res.status(200).send({
		success: true,
		data: buses.rows,
	});
};


export const getSingleBus = async (req, res) => {
	const { id } = req.params;
	const bus = await pool.query(
		`SELECT * FROM public."Buses" where id = ${id} `
	);
	if (!bus.rowCount) {
		return res.status(400).send({ success: false, message: `No Bus found` });
	}
	return res.status(200).send({
		success: true,
		data: bus.rows,
	});
};

export const createBus = async (req, res) => {
	const { error } = busValidation(req.body);
	if (error) return res.status(400).send({ message: error.details[0].message });
	const { bus_number, plate_number, route } = req.body;

	// checking if bus with same plate number exists
	const bus = await pool.query(
		`SELECT * FROM public."Buses" where plate_number = '${plate_number}' `
	);
	if (bus.rowCount) {
		return res
			.status(400)
			.send({ success: false, message: `Bus With Same Plate Number Exists` });
	} else {
		const newBus = await pool.query(
			`INSERT INTO public."Buses" (bus_number, plate_number,route) VALUES ($1, $2,$3) RETURNING *`,
			[bus_number, plate_number, route]
		);
		if (!newBus.rowCount) {
			return res
				.status(400)
				.send({ success: false, message: `Something went wrong` });
		}
		return res.status(200).send({
			success: true,
			message: `Bus Saved Successfully`,
			data: newBus.rows[0],
		});
	}
};

export const updateBus = async (req, res) => {
	const { error } = busValidation(req.body);
	if (error) return res.status(400).send({ message: error.details[0].message });
	const { bus_number, plate_number, route } = req.body;
	const { id } = req.params;
	const bus = await pool.query(
		`SELECT * FROM public."Buses" where id = ${id} `
	);
	if (!bus.rowCount) {
		return res.status(400).send({ success: false, message: `No bus found` });
	} else {
		const updates = await pool.query(
			`UPDATE public."Buses" SET bus_number = $1 ,plate_number=$2,route= $3 WHERE id = $4 returning * `,
			[bus_number, plate_number, route, id]
		);
		return res.status(200).send({
			success: true,
			message: `Bus Updated Successfully`,
			data: updates.rows[0],
		});
	}
};

export const deleteBus = async (req, res) => {
	const { id } = req.params;
	const bus = await pool.query(
		`SELECT * FROM public."Buses" where id = ${id} `
	);
	if (!bus.rowCount) {
		return res.status(400).send({ success: false, message: `No Bus found` });
	} else {
		const deletedBus = await pool.query(
			`DELETE FROM public."Buses" where id = ${id} `
		);
		if (deletedBus.rowCount) {
			return res.status(200).send({
				success: true,
				message: `Bus Deleted Successfully`,
			});
		}
	}
};
