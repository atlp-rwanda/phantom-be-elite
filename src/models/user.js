/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			name: DataTypes.STRING,
			email: DataTypes.STRING,
			idNumber: DataTypes.STRING,
			permitId: DataTypes.STRING,
			phone: DataTypes.INTEGER,
			password: DataTypes.STRING,
			role: DataTypes.ENUM("admin", "operator", "driver", "client"),
		},
		{
			sequelize,
			modelName: "User",
		}
	);
	return User;
};
