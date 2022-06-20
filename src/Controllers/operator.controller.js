/** @format */

import pool from "../Database/database";
import bcryptjs from "bcryptjs";
const { hash } = bcryptjs;



export const getAllOperators = async(req, res) => {
    const { id } = req.params;
    const operator = await pool.query(
        `SELECT id,name,email,id_number,permit_id,phone,role FROM public."Users" WHERE role = 'operator' `
    );
    if (!operator.rowCount) {
        return res
            .status(400)
            .send({ success: false, message: `No operator found` });
    }
    return res.status(200).send({
        success: true,
        data: operator.rows,
    });
};
export const createOperator = async(req, res) => {
    const { name, email, password, id_number, permit_id, phone, role = 'operator' } = req.body;
    const passwordHash = await hash(password, 12);


    pool.query(`INSERT INTO public."Users"  (name,email, password, id_number,permit_id,phone,role) VALUES ($1, $2, $3, $4, $5, $6, $7)  RETURNING *`, [name, email, passwordHash, id_number, permit_id, phone, role],
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(201).send(`New operator: ${results.rows[0].name}, has been created with ID: ${results.rows[0].id}`)
        });
};