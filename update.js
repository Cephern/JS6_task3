const { Framework } = require("./models/framework");

const update = async () => {
  await Framework.updateOne({ title: "Vue" }, { votes: 10 });

  process.exit(0);
};

update().catch((e) => console.error(e));
