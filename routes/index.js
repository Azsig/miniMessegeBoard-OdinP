const express = require("express");
const router = express.Router();

// Simpan pesan dalam array
const messages = [
  { text: "Hello World!", user: "Alice", added: new Date() },
  { text: "Hi there!", user: "Bob", added: new Date() },
];

// Rute utama (index)
router.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

// Rute untuk form pesan baru
router.get("/new", (req, res) => {
  res.render("new", { title: "New Message" });
});

// Rute untuk menangani pengiriman form
router.post("/new", (req, res) => {
  const { message, user } = req.body;
  messages.push({ text: message, user: user, added: new Date() });
  res.redirect("/");
});

module.exports = router;