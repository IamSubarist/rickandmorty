import Logo from "../../assets/content-logo.svg";
import Filters from "../Filters/Filters";
import Items from "../Items";

function Content() {
  return (
    <div className="flex flex-col justify-center">
      <img src={Logo} alt="" />
      <div className="flex flex-col gap-10">
        <Filters />
        <Items />
      </div>
    </div>
  );
}

export default Content;
