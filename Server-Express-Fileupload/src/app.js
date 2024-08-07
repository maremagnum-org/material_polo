const express = require("express");
const path = require("node:path");
const fileUpload = require("express-fileupload");
const indexRoute = require("./routes/index.routes");
const morgan = require("morgan");

const app = express();
const port = 4000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  fileUpload({
    createParentPath: true,
    limits: { fileSize: 20 * 1024 * 1024 },
    abortOnLimit: true,
    responseOnLimit: "Archivo muy grande",
  })
);
app.use(morgan("tiny"));

//Settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Routes
app.use(indexRoute);

//Servidor
app.listen(port, () => {
  console.log(`Server run in port ${port}`);
});
