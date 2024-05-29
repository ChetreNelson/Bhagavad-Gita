import Link from "next/link";

interface ChapterInfo {
  chapter_number: number;
  verses_count: number;
  name: string;
  translation: string;
  transliteration: string;
  meaning: {
    en: string;
    hi: string;
  };
  summary: {
    en: string;
    hi: string;
  };
}

const Home = async () => {
  const fetchData = async () => {
    try {
      const resp = await fetch("https://bhagavadgitaapi.in/chapters");
      const result: ChapterInfo[] = await resp.json();
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const data = await fetchData();

  return (
    <div className="grid grid-cols-2 gap-2">
      {data?.map((rep, index) => (
        <div key={index} className="flex flex-col mt-10">
          <div className="border p-4 rounded">
            <h1 className="font-bold flex gap-2 text-xl text-purple-700">
              Chapter
              <span className="text-blue-700">{rep.chapter_number}</span>
            </h1>
            <h1 className="text-orange-400 font-medium">{rep.translation}</h1>
            <p className="line-clamp-3 ">{rep.summary.en}</p>
            <Link href="/">
              <p>{rep.verses_count} Verses</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
