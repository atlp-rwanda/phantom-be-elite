import app from './app';
import "dotenv/config";
import sequelize from "./models"

const port = process.env.PORT || 3001;


sequelize
  .authenticate()
  .then(() => {
    console.log('phantom Database Connected!');
  })
  .catch((err) => {
    console.log('phantom Database Not Connected');
    console.log({ Error_Message: err });
  });


const server = app.listen(port, () => { console.log("Server listening on port " + port) });

export default server