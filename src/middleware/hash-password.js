/** @format */
import bcryptjs from "bcryptjs";

export const verify = async (hashedPassword, plainPassword) => {
	return await bcryptjs.compare(hashedPassword, plainPassword);
};
