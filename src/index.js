require('dotenv/config');
const puppeteer = require("puppeteer");
const getVideoTitles = require("./utils/getVideoTitles");

const url = process.env.YOUTUBE_URL;
const elements = process.env.YOUTUBE_DOM_ELEMENT;

(async () => {
  const browser = await puppeteer.launch();

  const list = await getVideoTitles(browser, url, elements);

  console.log(list);

  await browser.close();
})();
