import app from './app';
require("dotenv").config({ path: ".env" })


const port = process.env.PORT || 3001;

const server = app.listen(port, () => { console.log("Server listening on port " + port) });

export default server