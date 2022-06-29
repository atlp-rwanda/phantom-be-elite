import pool from "../Database/database";

export const getBusInfo = async(req, res) => {
    const info = await pool.query(
        `SELECT * FROM public."BusInfos" ORDER BY id ASC  `
    );
    return res.status(200).send({
        success: true,
        data: info.rows,
    });
};