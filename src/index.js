require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { NODE_PORT } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());

app.listen(NODE_PORT, () => {
  console.log(`Server start on port ${NODE_PORT}`);
});

module.exports = app;
