import { exec } from "child_process";
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
  const ingredients = input.join("\n");

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
