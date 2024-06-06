import { getRandomQuote } from "@/lib/quotes";
import React from "react";

interface Props {
  _id: string;
  id: number;
  quote: string;
}


const fetchQuotes = async () => {
  const { quotes } = await getRandomQuote();
  return quotes;
};

const page = async () => {
  const quotes: Props = await fetchQuotes();

  console.log("quotes", quotes);

  return (
    <div>
      <p>this is quote</p>
     {quotes.quote}
    </div>
  );
};

export default page;
