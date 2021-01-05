const { Framework } = require("./models/framework");

const read = async () => {
  const result = await Framework.findOne({ title: "Svelte" });
  console.log(result);

  process.exit(0);
};

read().catch((e) => console.error(e));
