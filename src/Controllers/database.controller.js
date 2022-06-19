/** @format */

import client from "../Database/database";

export const database = async (req, res) => {
	client.connect();
	client.query(`SELECT * FROM public."Users"`, (err, result) => {
		if (!err) {
			res.send(result.rows);
		} else {
			console.log(err.message);
		}
		client.end();
	});
};
