import pool from "../Database/database";
import { routeValidation } from "../validations/index";

export const getAllRoutes = async (req, res) => {
  try {
    const routes = await pool.query("SELECT * FROM Routes ORDER BY id ASC");

    res.status(200).json({
      status: "success",
      results: routes.rowCount,
      routes: routes.rows,
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

export const getOneRoute = async (req, res) => {
  try {
    const route = await pool.query("SELECT * FROM Routes WHERE id = $1", [
      req.params.id,
    ]);
    return res.status(200).json({
      route: route.rows,
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

export const createRoute = async (req, res) => {
  try {
    const { error } = routeValidation(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const { origin, destination, description } = req.body;
    const route = await pool.query(
      "INSERT INTO Routes (origin, destination, description) VALUES ($1, $2, $3) RETURNING *",
      [origin, destination, description]
    );

    res.status(201).json({
      route: route.rows,
    });
  } catch (e) {
    res.status(404).json({
      status: "fail",
      message: e.detail,
    });
  }
};

export const updateRoute = async (req, res) => {
  try {
    const { error } = routeValidation(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const { origin, destination, description } = req.body;
    await pool.query(`SELECT * FROM Routes where id = ${req.params.id} `);
    const route = await pool.query(
      "UPDATE Routes SET origin = $1, destination = $2, description = $3 WHERE id = $4 RETURNING *",
      [origin, destination, description, req.params.id]
    );

    res.status(202).json({
      route: route.rows,
    });
  } catch (e) {
    res.status(404).json({
      status: "fail",
    });
  }
};

export const deleteRoute = async (req, res) => {
  try {
    if(req.params.id) {
      await pool.query(`SELECT * FROM Routes where id = ${req.params.id} `);
      const deleted = await pool.query("DELETE FROM Routes WHERE id = $1", [
        req.params.id,
      ]);
    }
    else {
      const deleted = await pool.query("DELETE FROM Routes",);
    }

    res.status(202).json({
      message: "Route deleted successfully",
    });
  } catch (e) {
    res.status(404).json({
      status: "fail",
    });
  }
};
