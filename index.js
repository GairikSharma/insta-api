const express = require("express");
const app = express();
const cors = require("cors");
const ytdl = require("ytdl-core");
const instagramDl = require("@sasmeee/igdl");

//cors
app.use(cors());
//middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the server...");
});

//yt video
//youtube videos
app.get("/download", async (req, res) => {
  try {
    res.send('Yt video downloader...')
    const url = req.query.url;
    const id = await ytdl.getURLVideoID(url);
    const metaInfo = await ytdl.getInfo(url);
    let video = {
      url: "https://www.youtube.com/embed/" + id,
      info: metaInfo.formats,
    };
    res.send(video);
  } catch (error) {
    console.log(error);
  }
});

//Insta reel downloader
app.get("/insta-reel-download", async (req, res) => {
  try {
    res.send('insta reel downloader...')
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
