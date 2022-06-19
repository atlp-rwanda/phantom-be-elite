/** @format */

import client from "../Database/database";

// export const getUser = async (req, res) => {
// 	client.connect();
// 	const id = req.params.id;
// 	client.query(
// 		`SELECT * FROM public."Users" where id = ${id} `,
// 		(err, result) => {
// 			if (!err) {
// 				res.send(result.rows);
// 			} else {
// 				console.log(err.message);
// 			}
// 			client.end();
// 		}
// 	);
// };

const getUser = async (req, res) => {
	const { id } = req.params;
	client.connect();
	const user = await client.query(
		`SELECT * FROM public."Users" where id = ${id} `
	);
	if (!user.rowCount) {
		return res.status(400).send({
			message: `No user profile found`,
		});
	}
	return res.status(200).send({
		data: user.rows,
	});
};

const updateUser = async (req, res) => {
	const { name, email, phone, password } = req.body;
	const { id } = req.params;

	const user = await User.findOne({
		where: {
			id,
		},
	});

	if (!user) {
		return res.status(400).send({
			message: `No user found with the id ${id}`,
		});
	}

	try {
		if (name) {
			user.name = name;
		}

		if (email) {
			user.email = email;
		}
		if (phone) {
			user.phone = phone;
		}
		if (password) {
			user.password = password;
		}

		user.save();
		return res.send({
			message: `Profile updated`,
		});
	} catch (err) {
		return res.status(500).send({
			message: `Error: ${err.message}`,
		});
	}
};
export { getUser, updateUser };
