const express = require("express");
const app = express();
const cors = require("cors");
const instagramDl = require("@sasmeee/igdl");

//cors
app.use(cors());
//middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the server...");
});

//Insta reel downloader
app.get("/insta-reel-download", async (req, res) => {
  try {
    const url = req.body.url;
    const dataList = await instagramDl(url);
    res.json({ message: "Success", data: dataList });
  } catch (error) {
    console.log("Error occured", error);
  }
});


app.listen(4000, (req, res) => {
  console.log("Server running...");
});
