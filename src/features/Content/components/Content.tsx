import Logo from "../../../assets/content-logo.svg";
import { Filters } from "./Filters";
import { Items } from "./Items";

export const Content = () => {
  return (
    <div className="flex flex-col justify-center">
      <img src={Logo} />
      <div className="flex flex-col gap-10">
        <Filters />
        <Items />
      </div>
    </div>
  );
};
