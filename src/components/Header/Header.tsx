import headerLogo from "../../assets/header-logo.svg";

function Header() {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <img src={headerLogo} alt="" />
        <div className="menu__link flex gap-5">
          <a className="font-bold" href="/">
            Characters
          </a>
          <a className="font-bold" href="/">
            Location
          </a>
          <a className="font-bold" href="/">
            Episodes
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
