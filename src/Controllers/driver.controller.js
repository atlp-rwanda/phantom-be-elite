/** @format */

import pool from "../Database/database";
import bcryptjs from "bcryptjs";
const { hash } = bcryptjs;


export const getAllDrivers = async(req, res) => {
    const { id } = req.params;
    const driver = await pool.query(
        `SELECT id,name,email,id_number,permit_id,phone,role FROM public."Users" WHERE role = 'driver' `
    );
    if (!driver.rowCount) {
        return res
            .status(400)
            .send({ success: false, message: `No user profile found` });
    }
    return res.status(200).send({
        success: true,
        data: driver.rows,
    });
};

export const createDriver = async(req, res) => {

    const { name, email, password, id_number, permit_id, phone, role = 'driver' } = req.body;
    const passwordHash = await hash(password, 12);

    pool.query(`INSERT INTO public."Users"  (name,email, password, id_number,permit_id,phone,role) VALUES ($1, $2, $3, $4, $5, $6, $7)  RETURNING *`, [name, email, passwordHash, id_number, permit_id, phone, role],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).send(`New driver has been created with ID: ${results.rows[0].id}`);
        });
};