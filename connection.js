const mongoose = require("mongoose");
m.set("debug", true);
async function getConn() {
  await mongoose.connect("mongodb://localhost:27017/frameworks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
getConn().catch((e) => console.error("Соединение с БД не удалось."));
module.exports = mongoose;
