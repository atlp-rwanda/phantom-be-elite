import pool from "../Database/database";
import {  busValidation } from "../validations/index";

export const getAllAssigned = async (req, res)=>{
    const bus = await pool.query(
        `SELECT * FROM public."Buses" ORDER BY id ASC`
    );
    res.status(200).send({
        success:true,
        message:bus.rows
    })
}
export const BusOneAssign = async (req, res) => {
	const { id } = req.params;
	const bus = await pool.query(
		`SELECT * FROM public."Buses" where id = ${id} `
	);
	if (!bus.rowCount) {
		return res.status(400).send({ success: false, message: `No Bus found` });
	}
	return res.status(200).send({
		success: true,
		data: bus.rows,
	});
};


export const createBusToRoute =async(req, res)=>{
    const {error} = busValidation(req.body);
    if(error)
    return res.status(400).send({
        message: error.details[0].message
    });
    const { bus_number, plate_number, route } = req.body;

    const bus =await pool.query(
        `SELECT * FROM public."Buses" where plate_number='${plate_number}'`
    );
    if(bus.rowCount){
        return res.status(400)
               .send({
                   success: false, 
                   message: `Double same Plate exist`
               });
    }else{
        const trueBus = await pool.query(
            `INSERT INTO public."Buses" (bus_number, plate_number,route) VALUES ($1, $2, $3) RETURNING *`,
            [bus_number, plate_number, route]
        );
        if(!trueBus.rowCount){
            return res.status(400)
                   .send({
                       success: false,
                       message: `Went wrong`
                   });
        }
       
            return res.status(200)
                   .send({
                       success:true,
                       message: `Route saved well on bus`
                   });
        
    };
}
export const updateRouteToBus = async (req, res) => {
	const { error } = busValidation(req.body);
	if (error) return res.status(400).send({ message: error.details[0].message });
	const { bus_number, plate_number, route } = req.body;
	const { id } = req.params;
	const bus = await pool.query(
		`SELECT * FROM public."Buses" where id = ${id} `
	);
	if (!bus.rowCount) {
		return res.status(400).send({ success: false, message: `No bus found` });
	} else {
		const updates = await pool.query(
			`UPDATE public."Buses" SET bus_number = $1 ,plate_number=$2,route= $3 WHERE id = $4 `,
			[bus_number, plate_number, route, id]
		);
		return res.status(200).send({
			success: true,
			message: `Route assign Updated Successfully`,
		});
	}
};
export const deleteBusAssign = async (req, res) => {
	const { id } = req.params;
	const bus = await pool.query(
		`SELECT * FROM public."Buses" where id = ${id} `
	);
	if (!bus.rowCount) {
		return res.status(400).send({ success: false, message: `No Bus found` });
	} else {
		const deletedBus = await pool.query(
			`DELETE FROM public."Buses" where id = ${id} `
		);
		if (deletedBus.rowCount) {
			return res.status(200).send({
				success: true,
				message: `Bus Deleted Successfully`,
			});
		}
	}
};