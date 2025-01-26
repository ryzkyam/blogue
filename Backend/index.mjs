import express from "express";
const app = express();
app.listen(5000, () => console.log("server running at port 5000"));

app.get("/home", (req, res) => {
  res.send("this home ");
  
});
