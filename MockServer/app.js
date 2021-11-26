const express = require("express");
const usermock = require("./mocks/usermock.json");
const cors = require("cors");
const { request } = require("http");

const app = express();
const port = 3009;
app.use(cors());


app.get("/getUsers", async (req, res) => {
    res.status("200").send(usermock);
});


  app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });