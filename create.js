const { Framework } = require("./models/framework.js");

const createEntries = async () => {
  const create = await Framework.create([
    { title: "Angular", votes: 0, id: 0 },
    { title: "React", votes: 3, id: 1 },
    { title: "Vue", votes: 2, id: 2 },
    { title: "Svelte", votes: 1, id: 3 },
  ]);

  console.log(create);

  process.exit(0);
};

createEntries().catch((e) => console.log(e));
