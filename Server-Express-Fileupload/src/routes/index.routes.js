const indexRoute = require("express").Router();

indexRoute.get("/", (req, res) => {
  res.render("index");
});

indexRoute.post("/upload", (req, res) => {
  //   console.log(req.files);
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send("No se adjuntaron archivos.");
    return;
  }

  let file = req.files.archivo;
  let path = `${__dirname}/Archivos/${file.name}`;
  file.mv(path, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.redirect("/");
  });
});

module.exports = indexRoute;
