const mongoose = require("mongoose");
require("dotenv").config();
const {DB_USER, DB_PASSWORD} = process.env;

console.log("Si pude mama");

async function main() {
  await mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.cfkr92h.mongodb.net/`
  );
}

module.exports = main;
