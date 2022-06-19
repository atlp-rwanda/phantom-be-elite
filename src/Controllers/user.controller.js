/** @format */

import client from "../Database/database";
import { profileValidation } from "../validations/index";

export const getUser = async (req, res) => {
	const { id } = req.params;
	client.connect();
	const user = await client.query(
		`SELECT * FROM public."Users" where id = ${id} `
	);
	if (!user.rowCount) {
		return res
			.status(400)
			.send({ success: false, message: `No user profile found` });
	}
	return res.status(200).send({
		success: true,
		data: user.rows,
	});
};

export const updateUser = async (req, res) => {
	const { error } = profileValidation(req.body);
	if (error) return res.status(400).send({ message: error.details[0].message });
	const { name, email, id_number, permit_id, phone } = req.body;
	const { id } = req.params;
	client.connect();
	const user = await client.query(
		`SELECT * FROM public."Users" where id = ${id} `
	);
	if (!user.rowCount) {
		return res
			.status(400)
			.send({ success: false, message: `No user profile found` });
	} else {
		const updates = await client.query(
			`UPDATE public."Users" SET name = $1 ,email=$2,id_number= $3 , permit_id=$4, phone=$5 WHERE id = $6 `,
			[name, email, id_number, permit_id, phone, id]
		);
		if (!user.rowCount) {
			return res
				.status(400)
				.send({ success: false, message: `Something went wrong` });
		}
		return res.status(200).send({
			success: true,
			message: `Profile Updated Successfully`,
		});
	}
};
