require("dotenv").config();
const express = require("express");


const app = express()
const PORT = process.env.PORT

app.get("/", (req, res) => {
    res.send("Testing aja");
})

app.listen(PORT, () => {
    console.log("Server Running "+PORT);
})
