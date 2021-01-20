import { exec } from "child_process";
import { promisify } from "util";
const promiseExec = promisify(exec);

interface IScrapeResult {
  title: string;
  total_time: string;
  yields: string;
  ingredients: string[];
  instructions: string;
  image: string;
}

export default async function runScraper(
  url: string,
  wild_mode: boolean = false
): Promise<IScrapeResult> {
  const { stdout } = await promiseExec(
    `${__dirname}/../scraper/venv/bin/python ${__dirname}/../scraper/src/scrape.py ${url} ${wild_mode}`
  );

  console.log(stdout);
  return JSON.parse(stdout) as IScrapeResult;
}

// runScraper(
//   // "https://google.com"
//   "https://www.allrecipes.com/recipe/158968/spinach-and-feta-turkey-burgers/"
// );
