const express = require("express");
const estadosRouter = require('./routes/estados.routes.js');
const municipiosRouter = require('./routes/municipios.routes.js');

const app = express();

app.use(express.json());

app.use('/estados', estadosRouter);
app.use('/municipios', municipiosRouter);

app.use((req, res) => {
  res.status(404).json({ message: "endpoint not found" });
});

module.exports = app;
