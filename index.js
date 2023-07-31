const server = require("./src/server");
const main = require("./src/db");

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  main().catch((err) => console.log(err));
  console.log(`Server listening on port ${PORT}`);
});
