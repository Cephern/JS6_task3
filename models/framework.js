const { Schema, model } = require("../connection");

const FrameworkSchema = new Schema({
  title: {
    type: "String",
  },
  votes: {
    type: "Number",
  },
  id: {
    type: "Number",
  },
});

const Framework = model("Framework", FrameworkSchema);

module.exports = { Framework };
