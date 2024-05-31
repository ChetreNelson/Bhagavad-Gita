"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

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

interface VerseInfo {
  id: number;
  verse_number: number;
  chapter_number: number;
  slug: string;
  text: string;
  transliteration: string;
  word_meanings: string;
  translations: [
    {
      id: number;
      author_name: string;
      description: string;
      language: string;
    }
  ];
  commentaries: [
    {
      author_name: string;
      description: string;
      id: number;
      language: string;
    }
  ];
}

const ChaptersInfo = () => {
  const [data, setData] = useState<ChapterInfo>();
  const [verese, setVerse] = useState<VerseInfo[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const params = usePathname();

  const newParams = params?.split("/chapter");
  const neeVal = newParams?.splice(1, 1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resp = await fetch(`https://bhagavadgitaapi.in/${params}`);
        const result: ChapterInfo = await resp.json();
        setData(result);
        if (result) {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchVerse = async () => {
      try {
        setLoading(true);
        const resp = await fetch(
          `https://bhagavad-gita3.p.rapidapi.com/v2/chapters${neeVal}/verses/`,
          {
            headers: {
              "x-rapidapi-key":
                "6722d4f3e7mshc77fa4dac2ed142p10b809jsn859a3cb90a18",
            },
          }
        );
        const result: VerseInfo[] = await resp.json();
        setVerse(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchVerse();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <div>
          <div className="flex p-4 border rounded-2xl justify-center items-center flex-col  shadow-lg  shadow-indigo-500/40  bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 ">
            <h2 className="font-bold  flex gap-2  text-2xl text-purple-900">
              CHAPTER
              <span className="text-purple-600">{data?.chapter_number}</span>
            </h2>
            <h1 className="text-orange-600 font-medium pb-2 text-xl">
              {data?.translation}
            </h1>
            <p className="text-justify text-gray-900">{data?.summary.en}</p>
          </div>
          <div className="mt-5">
            {verese.map((verse, index) => (
              <div
                key={index}
                className="flex p-4 border rounded-2xl   flex-col  shadow-lg gap-2 mb-2
                  shadow-green-500/40  bg-gradient-to-r from-blue-100 via-red-100 to-green-50 "
              >
                <h1 className="font-semibold flex gap-2 flex-col  text-xl text-purple-900 items-end">
                  {verse.text}
                </h1>
                <p className="text-justify">{verse.translations[5 as typeof index].description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ChaptersInfo;
