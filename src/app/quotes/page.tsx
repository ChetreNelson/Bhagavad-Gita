import Loader from "@/components/Loader/Loading";
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
    <div className="flex">
      <span>{quotes.quote}</span>
      <Loader/>
    </div>
  );
};

export default page;
