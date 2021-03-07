"use strict";
const express = require("express");
const app = express();
const port = process.env.port || 5005;
// https://expressjs.com/en/4x/api.html#express.static

let options = {
  dotfiles: "ignore", //allow, deny, ignore
  etag: true,
  extensions: ["htm", "html"],
  index: false, //to disable directory indexing
  maxAge: "7d",
  redirect: false,
  setHeaders: function(res, path, stat) {
    //add this header to all static responses
    res.set("x-timestamp", Date.now());
  }
};

app.use(express.static("public", options));
//you can use https://favicon.io/favicon-generator/ to create the favicon.ico

app.get("/", (req, res) => {
  let img = `<img src="/img/cotton-candy.gif"/>`;
  let secret = `<a href="/.htaccess">secret</a>`;

  let html = `<!Doctype html><html><head><title>Sample</title></head>`;
  html += `<body><h1>Sample HTML</h1><main>${secret}</main></body></html>`;
  res.send(html);
});

app.listen(port, err => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`Listening on port ${port}`);
});