import { getQuotes } from "@/lib/quotes";
import React from "react";

interface Props {
  _id: string;
  id: number;
  quote: string;
}


const fetchQuotes = async () => {
  const { quotes } = await getQuotes();
  return quotes;
};

const page = async () => {
  const quotes: Props[] = await fetchQuotes();

  console.log("quotes", quotes);
  console.log("heelelelel");
  return (
    <div>
      <p>this is quote</p>
      {quotes.map((item, index) => (
        <p>{item.quote}</p>
      ))}
    </div>
  );
};

export default page;
