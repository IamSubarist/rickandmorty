import Logo from "../../assets/content-logo.svg";
import Filters from "../Filters/Filters";
import Items from "../Items";

function Content() {
  return (
    <div className="flex flex-col justify-center">
      {/* Тоже самое с alt. */}
      <img src={Logo} alt="" />
      <div className="flex flex-col gap-10">
        <Filters />
        <Items />
      </div>
    </div>
  );
}

// Ебал дефолтный.
export default Content;
