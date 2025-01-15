import { Link } from "react-router-dom";
import headerLogo from "../../../assets/header-logo.svg";
import { HeaderNavLinks } from "./HeaderNavLinks";
import { Links } from "./lib/types";

export const Header = () => {
  const navLinks: Links[] = [
    { id: 1, name: "Characters", link: "/" },
    { id: 2, name: "Location", link: "locations" },
    { id: 3, name: "Episodes", link: "episodes" },
  ];
  return (
    <div className="shadow-md">
      <div className="flex flex-row justify-between items-center py-4 w-3/5 mx-auto">
        <Link to="/">
          <img src={headerLogo} />
        </Link>
        <div className="menu__link flex gap-5">
          {navLinks.map((link) => (
            <HeaderNavLinks key={link.id} props={link} />
          ))}
        </div>
      </div>
    </div>
  );
};
