import NavLink from "./navLink";

const navLinks = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/quotes", title: "KrishnasQuotes" },
  { url: "/bhgavadai", title: "BhagvadAI" },
];
const NavBar = () => {
  return (
    <div className="flex justify-between my-4 p-4 bg-gradient-to-r from-slate-500 via-black ">
      <div className="hidden md:flex gap-4 w-1/3 text-white">
        {navLinks.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      <div>
        logo
      </div>
    </div>
  );
};

export default NavBar;
