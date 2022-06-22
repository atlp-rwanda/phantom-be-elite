import pool from "../Database/database";

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

    res.status(200).json({
      route: route.rows
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
    });
  }
};

export const createRoute = async (req, res) => {
  try {
    const { origin, destination } = req.body;
    const route = await pool.query(
      "INSERT INTO Routes (origin, destination) VALUES ($1, $2) RETURNING *",
      [origin, destination]
    );

    res.status(201).json({
      route: route.rows
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
    const { origin, destination } = req.body;
    const route = await pool.query(
      "UPDATE Routes SET origin = $1, destination = $2 WHERE id = $3 RETURNING *",
      [origin, destination, req.params.id]
    );

    res.status(202).json({
      route: route.rows
    });
  } catch (e) {
    res.status(404).json({
      status: "fail",
    });
  }
};

export const deleteRoute = async (req, res) => {
  try {
    const deleted = await pool.query("DELETE FROM Routes WHERE id = $1", [
      req.params.id,
    ]);

    res.status(204).json({
      message: "Routes deleted successfully",
    });
  } catch (e) {
    res.status(404).json({
      status: "fail",
    });
  }
};
