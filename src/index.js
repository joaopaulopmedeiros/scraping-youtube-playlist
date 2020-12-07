const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://www.youtube.com/playlist?list=PLTPg64KdGgYgr5Tz4xUr1bQLEI_ze7SNB"
  );

  await page.screenshot({ path: "example.png" });

  const list = await page.evaluate(() => {
    const fetchedDOMItems = [
      ...document.querySelectorAll(
        ".ytd-playlist-video-renderer h3.ytd-playlist-video-renderer span#video-title"
      ),
    ];

    return fetchedDOMItems.map((item) => item.getAttribute("title"));
  });

  console.log(list);

  await browser.close();
})();
