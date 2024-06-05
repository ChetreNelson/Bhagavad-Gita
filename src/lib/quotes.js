import clientPromise from "./mongodb";
// let client;
let db;
let quotes;
const init = async () => {
  try {
    const client = await clientPromise;
    console.log("clieeent", client);
    db = client.db("BhagavadQuotes");
    console.log("Database:", db);
    quotes = await db.collection("quotes").find({}).toArray();
    console.log("incomming", quotes);
    // res.json(quotes);
  } catch (e) {
    console.error(e);
  }
};
(async () => {
  console.log("abc", clientPromise);
  await init();

  console.log("heelelelel");
})();

export const getQuotes = async () => {
  try {
    if (!quotes) await init();
    const result = await quotes;
    return { quotes: result };
  } catch (error) {
    return {
      error: "Failed to fetch",
    };
  }
};
