require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const router = require("./routes/");
const listEndpoints = require("express-list-endpoints"); 

const app = express()
const PORT = process.env.PORT

// Gunakan middleware body-parser
app.use(bodyParser.json()); // Untuk JSON
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Testing aja");
})

app.use("/api/v1", router);

app.listen(PORT, () => {
    console.log(`server run at PORT:${PORT}/`);
    console.log("List Routes: ",listEndpoints(app));;
})
