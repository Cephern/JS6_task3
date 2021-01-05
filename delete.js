const { Framework } = require("./models/framework");

const createNdelete = async () => {
  await Framework.create({ title: "Ember", votes: 2, id: 4 });

  await Framework.deleteOne({ title: "Ember" });

  process.exit(0);
};

createNdelete().catch((e) => console.error(e));
