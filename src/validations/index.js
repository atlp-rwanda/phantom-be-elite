/** @format */

import Joi from "joi";

// New update profile validation
export const profileValidation = (data) => {
	const schema = Joi.object({
		name: Joi.string().min(3).required(),
		email: Joi.string().required().email(),
		id_number: Joi.number().min(6).required(),
		permit_id: Joi.number().min(6).required(),
		phone: Joi.string().min(6).required(),
	});

	return schema.validate(data);
};
