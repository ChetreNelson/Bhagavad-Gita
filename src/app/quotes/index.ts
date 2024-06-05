import { NextApiRequest, NextApiResponse } from "next";
import { getQuotes } from "../../lib/quotes";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { error, quotes } = await getQuotes();
      if (error) throw new Error(error);
      return res.status(200).json({ quotes });
    } catch (error) {
      return { error };
    }
  }
  res.setHeader("Allow", ["GET"]);
  res.status(425).end(`Method ${req.method} is not allwowed`);
};

export default handler;
