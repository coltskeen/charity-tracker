const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = 5060;

const pool = new Pool ({
    database: "charity-tracker",
});

app.listen(PORT, () => console.log(`Listsening on PORT: ${PORT}`));