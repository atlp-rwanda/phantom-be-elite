import pool from "../Database/database";

export const getRole = async (req, res) => {
	const { id } = req.params;
	const user = await pool.query(
		`SELECT id,name,email,role FROM public."Users" where id = ${id} `
	);
	if (!user.rowCount) {
		res.status(400).send({ 
			success: false, 
			message: `No user profile found` });
	} else if (user.rows[0].role == "admin"){
        res.status(200).send({
            success: true,
            data: user.rows[0],
        });
    } else {
        res.status(200).send({
            success: false,
            message: "You don't have permission for this operation"
        });
    }
	
};


export const updateRole = async (req, res, next) => {
	const Role = req.body.role;
	const id = req.params.id;
	
	if (id =="" || Role == "") {
		res.status(400).send({ 
			success: false, 
			message: `Please provide user role and id` });
	} else {
		const user = await pool.query(`SELECT id,name,email,role FROM public."Users" where id = ${id}`);
	if (user.rowCount == 0) {
		res.status(400).send({ 
			success: false, 
			message: `No user role found` });
	} else {
		const updates = pool.query(`UPDATE public."Users" SET role = '${Role}'  WHERE id = '${id}' `);
		if (updates.rowCount == 0) {
			res.status(400).send({ 
				success: false, 
				message: `Assigning role failed` });
		} else {
			res.status(200).send({
				success: true,
				message: `Role assigned Successfully`,
			});
		}
	}
	}
	
};