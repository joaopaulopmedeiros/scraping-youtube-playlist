require('dotenv/config');

const fs = require('fs');
const puppeteer = require("puppeteer");
const getVideos = require("./utils/getVideos");

const url = process.env.YOUTUBE_URL;
const elements = process.env.YOUTUBE_DOM_ELEMENT;

(async () => {
  const browser = await puppeteer.launch();

  const list = await getVideos(browser, url, elements);

  fs.writeFileSync('results/math.json', JSON.stringify(list));

  await browser.close();
})();
