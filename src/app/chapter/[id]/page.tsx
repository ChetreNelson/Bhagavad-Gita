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
        setLoading(false);
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
          <div>
            <h2>CHAPTER{data?.chapter_number}</h2>
            <h1>{data?.translation}</h1>
            <p>{data?.summary.en}</p>
          </div>
          <div>
            verses
            {verese.map((verse, index) => (
              <div key={index}>
                <h1>{verse.text}</h1>
                <div>
                  {verse?.translations[4].description}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ChaptersInfo;
