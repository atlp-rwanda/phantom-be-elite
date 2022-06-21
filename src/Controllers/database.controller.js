/** @format */

import pool from "../Database/database";

export const database = async (req, res) => {
	pool.query(`SELECT * FROM public."Users"`, (err, result) => {
		if (!err) {
			res.send(result.rows);
		} else {
			console.log(err.message);
		}
	});
};
