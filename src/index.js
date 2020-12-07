const puppeteer = require("puppeteer");
const getVideoTitles = require("./utils/getVideoTitles");

const url =
  "https://www.youtube.com/playlist?list=PLTPg64KdGgYgr5Tz4xUr1bQLEI_ze7SNB";
const elements =
  ".ytd-playlist-video-renderer h3.ytd-playlist-video-renderer span#video-title";

(async () => {
  const browser = await puppeteer.launch();

  const list = await getVideoTitles(browser, url, elements);

  console.log(list);

  await browser.close();
})();
