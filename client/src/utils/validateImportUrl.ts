import { siteList } from "./scraperSIteList";

export default function validateImportUrl(url: string) {
  // build regex based on string of urls
  const regexString = siteList
    .split("\n")
    .map((elem) => elem.replace("https://", ""))
    .join("|");

  const re = new RegExp(regexString, "g");

  return re.test(url);
}
