import pool from "../Database/database";

export const getRole = async (req, res) => {
	const { id } = req.params;
	const user = await pool.query(
		`SELECT id,name,email,role FROM public."Users" where id = ${id} `
	);
	if (!user.rowCount) {
		return res
			.status(400)
			.send({ success: false, message: `No user profile found` });
	} else if (user.rows[0].role == "admin"){
        return res.status(200).send({
            success: true,
            data: user.rows[0],
        });
    } else {
        return res.status(200).send({
            success: false,
            message: "You don't have permission for this operation"
        });
    }
	
};


export const updateRole = async (req, res, next) => {
	const Role = req.body.role;
    const id = req.params.id;
    
    console.log(Role, id)

	const user = await pool.query(
		`SELECT id,name,email,role FROM public."Users" where id = ${id} `
	);
	if (!user.rowCount) {
		return res
			.status(400)
			.send({ success: false, message: `No user role found` });
	} else {
		const updates = await pool.query(
			`UPDATE public."Users" SET role = '${Role}'  WHERE id = '${id}' `
		);
		if (!updates.rowCount) {
			return res
				.status(400)
				.send({ success: false, message: `Assigning role failed` });
		}
		return res.status(200).send({
			success: true,
			message: `Role assigned Successfully`,
		});
	}
};