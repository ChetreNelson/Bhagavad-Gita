"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export interface INavLinks {
  url: string;
  title: string;
}
interface INav {
  link: INavLinks;
}
const NavLink = ({ link }: INav) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded p-1 ${
        pathName === link.url && "bg-white text-black"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
