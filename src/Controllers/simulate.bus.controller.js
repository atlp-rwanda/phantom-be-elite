import pool from "../Database/database"

export const postBusInRoad = async (req, res) => {
	const { bus_number,plate_number,time_start,route,passengers,speed } = req.body;
	const bus = await pool.query(
		`INSERT INTO public."BusesInRoads" (bus_number, plate_number,time_start,route,passengers,speed) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,[bus_number, plate_number, time_start, route, passengers, speed]
	);
    if (!bus.rowCount) {
        return res
            .status(400)
            .send({ success: false, message: `Something went wrong` });
    }else{
        return res.status(200).send({
            success: true,
            message: `Bus in motion now`,
        });
    }
};
export const stopBus = async (req, res) => {
    const { plate_number } = req.body;
    const bus = await pool.query(
        `DELETE FROM public."BusesInRoads" WHERE plate_number ='${plate_number}'`
    );
    if (!bus.rowCount) {
        return res
        .status(400)
        .send({ success: false, message: `wrong plate_number` });
    }else{
        return res.status(200).send({
            success: true,
            message: `Bus have stopped`,
        });
    }
}

export const updateBus = async (req, res) => {
    const { plate_number, speed, passengers } = req.body;
    const bus = await pool.query(
        `UPDATE public."BusesInRoads" SET speed=$1,passengers=$2 WHERE plate_number LIKE '%${plate_number}%'`,
        [speed,passengers]
    );
    if (!bus.rowCount) {
        return res
        .status(400)
        .send({ success: false, message: `something went wrong` });
    }else{
        return res.status(200).send({
            success: true,
            message: `Bus have been updated`,
        });
    }
}

export const getBusInRoad = async (req, res) => {
	const { route } = req.body;
	const bus = await pool.query(
		`SELECT * FROM public."BusesInRoads" WHERE route LIKE '%${route}%'`
	);
	if (!bus.rowCount) {
		return res
		.status(400)
		.send({ success: false, message: `No user profile found` });
    }else{
        return res.status(200).send({
            success: true,
            message: `Bus which is in the route of ${route} are:`,
            data:bus.rows
        });
    }
}