const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
// app.use(express.static(__dirname + "/veiws"));

const port = 8000;
// 전역으로 사용할 변수

app.get("/", (req, res) => {
  res.render("root");
});

app.listen(port, () => {
  console.log("Server open: ", port);
});
