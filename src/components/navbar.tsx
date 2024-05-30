import Image from "next/image";
import NavLink from "./navLink";
import Logo from "../../public/logo.jpg";
import Link from "next/link";


const navLinks = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/quotes", title: "KrishnasQuotes" },
  { url: "/bhgavadai", title: "BhagvadAI" },
];
const NavBar = () => {
  return (
    <>
      <div className="flex  sticky  top-0 bg-white justify-between my-4 p-4 bg-gradient-to-r from-slate-500 via-black ">
        <div className="hidden  md:flex gap-4 w-1/3 text-white">
          {navLinks.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
      </div>
      <Link href='/'>
        <Image
          className="rounded absolute top-0 right-28"
          src={Logo}
          width={200}
          alt="Bhagavad Gita"
        />
      </Link>
    </>
  );
};

export default NavBar;
