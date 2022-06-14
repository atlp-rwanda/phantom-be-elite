import { Model } from 'sequelize';

const PROTECTED_ATTRIBUTES = ['password'];

export default (sequelize, DataTypes) => {
  class User extends Model {
    toJSON() {
      const attributes = { ...this.get() };
      for (const a of PROTECTED_ATTRIBUTES) {
        delete attributes[a];
      }
      return attributes;
    }
    static associate(models) {
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your email address',
      },
      unique: {
        args: true,
        msg: 'Email already exists',
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter a valid email address',
        },
      },
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    status: DataTypes.STRING,
    last_login_at: DataTypes.DATE,
    last_ip_address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};