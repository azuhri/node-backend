require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const router = require("./routes/");



const app = express()
const PORT = process.env.PORT

app.get("/", (req, res) => {
    res.send("Testing aja");
})

app.use("/api/v1", router);

app.listen(PORT, () => {
    console.log("Server Running "+PORT);
})
