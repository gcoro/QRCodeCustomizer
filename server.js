//simple express server to run frontend production build;
const express = require("express");
const path = require("path");
const dotenv = require('dotenv');

const app = express();
const envFound = dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
        res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`
  ################################################
      🛡️  Server listening on port: ${port} 🛡️
  ################################################
`)
});