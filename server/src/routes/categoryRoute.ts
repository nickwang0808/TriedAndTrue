import { Router } from "express";
import fetch from "node-fetch";

const route = Router();
export default route;

route.post("/", async (req, res) => {
  try {
    return res.status(200);

    // const {
    //   event: { op, data },
    //   table,
    // } = req.body as Payload;
    // // get name
    // // console.log(data);
    // const { name, id } = data.new;
    // // look up the name and get the category

    // const fdcId = await getFdcId(name);
    // const category = await getCategory(fdcId);

    // // update the category

    // await query(
    //   `
    // UPDATE list_items
    // SET
    //   category = $1
    // WHERE id = $2
    // `,
    //   [category, id]
    // );

    // return res.json({ category });
  } catch (err) {
    res.status(500).json(err);
  }
});

async function getFdcId(name: string) {
  const url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${name}`;
  const headers = {
    "Content-Type": "application/json",
    "X-Api-Key": process.env.USDA_KEY,
  };
  const result = await fetch(url, {
    headers,
  }).then((res) => res.json());

  return result.foods[0].fdcId as string;
}

async function getCategory(fdcId: string) {
  // const url = `https://api.nal.usda.gov/fdc/v1/foods/?fdcIds=${fdcId}`;
  const url = `https://api.nal.usda.gov/fdc/v1/foods/?fdcIds=${fdcId}&dataType=SRLegacy `;
  const headers = {
    "Content-Type": "application/json",
    "X-Api-Key": process.env.USDA_KEY,
  };
  const result = await fetch(url, {
    headers,
  }).then((res) => res.json());

  return result[0].foodCategory.description as string;
}
