// excute: ts-node index.ts https://www.youtube.com/
/**
 * Run:
 * $ yarn start https://www.youtube.com/
 * [ 'Roboto', 'Arial', 'sans-serif' ]
 */
import puppeteer from "puppeteer";
import { program } from "commander";

program.version("0.0.1", "-v", "--version");
program.parse(process.argv);
const options = program.opts();
const main = async (targetUrl: string) => {
  try {
    const url = new URL(targetUrl);
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url.href);

    const fontFamily = await page.evaluate(() => {
      return getComputedStyle(document.body).fontFamily;
    });

    console.log(fontFamily.split(", "));

    await browser.close();
  } catch (error) {
    console.error(error);
    return;
  }
};

main(program.args[0]);
