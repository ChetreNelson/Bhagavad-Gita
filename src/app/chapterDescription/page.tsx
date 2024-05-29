"use client";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

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
const ChapterDescription = async () => {
  const pathname = usePathname();
  console.log(pathname)
  const fetchData = async () => {
    try {
      const resp = await fetch("https://bhagavadgitaapi.in/chapter/1");
      const result: ChapterInfo[] = await resp.json();
      return result;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const data = await fetchData();
  return (
    <div>
      {/* {data?.map((chapter,index)=>(
            <div key={index}>
                <p>{chapter.summary.en}</p>

            </div>
        ))} */}
      {data?.map((chap, index) => (
        <div key={index}></div>
      ))}
    </div>
  );
};

export default ChapterDescription;
