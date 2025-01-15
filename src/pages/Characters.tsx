import Logo from "../assets/content-logo.svg";
import { Filters } from "../features/Content/components/Filters";
import { Items } from "../features/Content/components/Items";

export const Characters = () => {
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
