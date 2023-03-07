const express = require("express");
const app = express();


app.set("view engine", "ejs");
app.use("/static", express.static("static"));
// app.use(express.static(__dirname + "/veiws"));

const port = 8000;
// 전역으로 사용할 변수

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/success", (req, res) => {
  res.render("success");
});

app.listen(port, () => {
  console.log("Server open: ", port);
});
