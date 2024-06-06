import clientPromise from "./mongodb";

let db;
const init = async () => {
  try {
    const client = await clientPromise;
    db = client.db("BhagavadQuotes");
  } catch (e) {
    console.error(e);
  }
};

(async () => {
  await init();
})();

export const getRandomQuote = async () => {
  try {
    if (!db) await init();
    // Use aggregation pipeline with $sample to fetch one random quote
    const pipeline = [{ $sample: { size: 1 } }];
    const randomQuote = await db
      .collection("quotes")
      .aggregate(pipeline)
      .toArray();
    return { quotes: randomQuote[0] };
  } catch (error) {
    console.error("Failed to fetch quote:", error);
    return {
      error: "Failed to fetch",
    };
  }
};
