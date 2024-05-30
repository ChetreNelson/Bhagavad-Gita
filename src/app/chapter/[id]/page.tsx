"use client";

import { usePathname, useSearchParams } from "next/navigation";
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
const page = () => {
  const [data, setData] = useState<ChapterInfo>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const searchParmas = usePathname();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resp = await fetch(`https://bhagavadgitaapi.in/${searchParmas}`);
        const result: ChapterInfo = await resp.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <div>
          <h2>CHAPTER{data?.chapter_number}</h2>
          <h1>{data?.translation}</h1>
          <p>{data?.summary.en}</p>
        </div>
      )}
    </>
  );
};

export default page;
