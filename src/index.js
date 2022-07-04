import app from './app';
import "dotenv/config";
require("dotenv").config();


const port = process.env.PORT || 3001;
console.log(process.env.KING);

const server = app.listen(port, () => { console.log("Server listening on port " + port) });

export default server