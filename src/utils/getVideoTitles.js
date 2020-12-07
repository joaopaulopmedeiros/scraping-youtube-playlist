module.exports = async function (browser, url, elements) {
  const page = await browser.newPage();

  await page.goto(url);

  const result = await page.evaluate((DOMNode) => {
    const fetchedDOMItems = [...document.querySelectorAll(DOMNode)];

    return fetchedDOMItems.map((item) => ({
      title: item.getAttribute("title"),
    }));
  }, elements);

  return result;
};
