import { getRandomQuote } from "@/lib/quotes";


interface Props {
  _id: string;
  id: number;
  quote: string;
}

const page = async () => {
  const fetchQuotes = async () => {
    try {
      const { quotes } = await getRandomQuote();
      return quotes;
    } catch (error) {
      console.error("Failed to fetch quotes:", error);
    } 
  };

  const quotes: Props = await fetchQuotes();
  return (
    <div>
      <p>this is quote</p>
      {quotes.quote}
    </div>
  );
};

export default page;
