import headerLogo from "../../../assets/header-logo.svg";
import { HeaderNavLinks } from "./HeaderNavLinks";

export const Header = () => {
  const navLinks = [
    { id: 1, name: "Characters", link: "/" },
    { id: 2, name: "Location", link: "location" },
    { id: 3, name: "Episodes", link: "episodes" },
  ];
  return (
    <div className="flex flex-row justify-between items-center">
      <img src={headerLogo} />
      <div className="menu__link flex gap-5">
        {navLinks.map((link) => (
          <HeaderNavLinks key={link.id} props={link} />
        ))}
      </div>
    </div>
  );
};
