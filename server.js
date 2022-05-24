const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());
const port = 8082;

const Repository = require("./repository.json")

app.get('/repo', (req, res) => {
  res.send(Repository);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});