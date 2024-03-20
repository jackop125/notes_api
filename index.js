require('dotenv').config();
require("./src/db/connection")
const express = require('express')
const app = express();
const router = require("./src/routers/router")
const cors = require("cors");
app.use(cors({
    origin:"*",
}))
app.use(express.json());
app.use(router)

const PORT = process.env.PORT_NUM || 4000;
app.listen(PORT,()=>{
    console.log(`Server Started on PORT Number :${PORT}`);
})