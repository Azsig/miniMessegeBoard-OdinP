const express = require("express");
const path = require("path");
const routes = require("./routes/index");

const app = express();

// Middleware untuk parsing body request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set folder views dan view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware untuk melayani file statis
app.use(express.static(path.join(__dirname, "public")));

// Gunakan routes dari folder routes
app.use("/", routes);

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});