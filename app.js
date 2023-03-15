const express = require("express");
const app = express();


app.set("view engine", "ejs");
app.use("/static", express.static("static"));
// app.use(express.static(__dirname + "/veiws"));

const port = 8000;
// 전역으로 사용할 변수

app.get("/", (req, res) => {
  res.render("list");
});
app.get("/success", (req, res) => {
  res.render("success");
});
app.get("/cart", (req, res) => {
  res.render("cart");
});
app.get("/scroll", (req, res) => {
  res.render("scroll");
});

app.listen(port, () => {
  console.log("Server open: ", port);
});
