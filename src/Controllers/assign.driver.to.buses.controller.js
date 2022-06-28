import pool from "../Database/database";
import { assignValidation } from "../validations/index";

export const getAllAssigned = async (req, res) => {
  const routes = await pool.query(
    "SELECT * FROM Driver_buse_assign ORDER BY id ASC"
  );
  res.status(200).json({
    status: res.__("status0"),
    results: routes.rowCount,
    assigned: routes.rows,
  });
};

export const createAssign = async (req, res) => {
  try {
    const { error } = assignValidation(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const { route, driver_name, plate_number } = req.body;
    const assigned = await pool.query(
      "INSERT INTO Driver_buse_assign (route, driver_name, plate_number) VALUES ($1, $2, $3) RETURNING *",
      [route, driver_name, plate_number]
    );
    res.status(201).json({
      status: res.__("status2"),
      route: assigned.rows,
    });
  } catch (e) {
    res.status(404).json({
      status: "fail",
      message: e.detail,
    });
  }
};

export const deleteAssigned = async (req, res) => {
  try {
    await pool.query(
      `SELECT * FROM Driver_buse_assign where id = ${req.params.id} `
    );
    const deleted = await pool.query(
      "DELETE FROM Driver_buse_assign WHERE id = $1",
      [req.params.id]
    );

    res.status(202).json({
      status: res.__("status4"),
      message: "Route deleted successfully",
    });
  } catch (e) {
    res.status(404).json({
      status: "fail",
    });
  }
};
