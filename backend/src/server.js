const app = require("./app");
const config = require("./config/config");

const PORT = config.server.port;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
