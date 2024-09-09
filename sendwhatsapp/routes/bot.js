const puppeteer = require('puppeteer');
async function run() {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage(); 
  await page.goto('https://web.whatsapp.com');
  await page.screenshot({ path: 'screenshot.png' }); // para checkear que llego a la pagina
}
run();