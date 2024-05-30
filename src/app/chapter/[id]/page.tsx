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
  const searchParmas = usePathname();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(`https://bhagavadgitaapi.in/${searchParmas}`);
        const result: ChapterInfo = await resp.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>hello</h1>
      {data?.summary.en}
    </div>
  );
};

export default page;
