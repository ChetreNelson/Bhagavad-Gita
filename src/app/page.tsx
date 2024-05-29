import ListIcons from "@/components/atoms/list";
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
    <div className="grid grid-cols-2 gap-4 my-10">
      {data?.map((rep, index) => (
        <div
          key={index}
          className="flex p-4 border rounded-2xl flex-col hover:shadow-lg  shadow-indigo-500/40  bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 "
        >
          <h1 className="font-bold flex gap-2  text-xl text-purple-700">
            Chapter
            <span className="text-blue-700">{rep.chapter_number}</span>
          </h1>
          <h1 className="text-orange-600 font-medium pb-2">
            {rep.translation}
          </h1>
          <p className="line-clamp-3 mb-2 text-justify ">{rep.summary.en}</p>
          <Link href="/" className="w-fit">
            <p className="flex gap-2 font-bold">
              <ListIcons /> {rep.verses_count}
              <span className="text-purple-700 font-semibold">Verses</span>
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
