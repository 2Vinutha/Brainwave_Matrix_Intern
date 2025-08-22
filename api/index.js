const express = require("express");
const app = express();

// home page
app.get("/", (req, res) => {
  res.json({
    message: "Hello from Vercel + Express 👋",
    timeUtc: new Date().toISOString(),
  });
});

// health endpoint (handy for checks)
app.get("/health", (req, res) => res.send("ok"));

// this line helps when running locally;
// on Vercel they handle the server for us
app.listen(3000, () => console.log("Server ready on 3000"));

module.exports = app;
