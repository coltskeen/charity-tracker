const express = require("express");

const app = express();
const PORT = 5060;

app.listen(PORT, () => console.log(`Listsening on PORT: ${PORT}`));