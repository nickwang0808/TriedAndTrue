import { exec } from "child_process";
import { parse } from "recipe-ingredient-parser-v2";
import { promisify } from "util";

const promiseExec = promisify(exec);

export interface IParsedIngredinets {
  qty?: string;
  unit?: string;
  name: string;
  other?: string;
  comment?: string;
  input: string;
}

export default async function runParser(input: string[]) {
  //  use the regex ingredient parser first to format some of the odd wording
  const formattedInputs = input.map((text) => {
    const { quantity, unit, ingredient } = parse(text);
    return `${quantity ?? ""} ${unit ?? ""} ${ingredient ?? ""}`
      .trim()
      .replace(/\s+/g, " ");
  });

  const ingredients = formattedInputs.join("\n");

  const { stdout, stderr } = await promiseExec(
    `docker run parser ./parse "${ingredients}"`
  );
  if (!!stderr) {
    // catch err
  } else {
    const result: IParsedIngredinets[] = JSON.parse(stdout).map((e) => {
      delete e.display;
      return e;
    });

    console.log(result);
    return result;
  }
}

// runParser(["1pound beef", "10 cup water, boiled first", "1 tbsp honey"]);
