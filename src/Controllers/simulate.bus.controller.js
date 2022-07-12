import pool from "../Database/database"

export const postBusInRoad = async (req, res) => {
	const { driver_id,plate_number,origin,destination,passengers,speed,lat,long } = req.body;
    const buses = await pool.query(
		`SELECT * FROM public."BusesInRoads" where plate_number = '${plate_number}' `
	);
    if (buses.rowCount) {
		return res
			.status(400)
			.send({ success: false, message: `Bus With Same Plate Number is in the road` });
    }else{
        const bus = await pool.query(
            `INSERT INTO public."BusesInRoads" (driver_id, plate_number,origin,destination,passengers,speed,lat,long) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,[driver_id, plate_number,origin,destination,passengers,speed,lat,long]
        );
        if (!bus.rowCount) {
            return res
                .status(400)
                .send({ success: false, message: res.__("DenyMessage") });
        }else{
            return res.status(200).send({
                success: true,
                message: res.__("BusInMotion"),
            });
        }
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
        .send({ success: false,  message: res.__("BusPlate") });
    }else{
        return res.status(200).send({
            success: true,
            message: res.__("BusToStop") ,
        });
    }
}

export const updateBus = async (req, res) => {
    const { plate_number, speed, passengers,lat,long } = req.body;
    const bus = await pool.query(
        `UPDATE public."BusesInRoads" SET speed=$1,passengers=$2,lat=$3,long=$4 WHERE plate_number LIKE '%${plate_number}%'`,
        [speed,passengers,lat,long]
    );
    if (!bus.rowCount) {
        return res
        .status(400)
        .send({ success: false, message: res.__("DenyMessage")});
    }else{
        return res.status(200).send({
            success: true,
            message: res.__("UpdateBus"),
        });
    }
}

export const getBusInRoad = async (req, res) => {
	const { destination } = req.body;
	const bus = await pool.query(
		`SELECT * FROM public."BusesInRoads" WHERE destination LIKE '%${destination}%'`
	);
	if (!bus.rowCount) {
		return res
		.status(400)
		.send({ success: false, message: res.__("BusRoute")});
    }else{
        return res.status(200).send({
            success: true,
            message: res.__("BusRes"),
            data:bus.rows
        });
    }
}