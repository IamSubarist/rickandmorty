import { getCharacters } from "../api/get-character";
import Logo from "../assets/content-logo.svg";
import { Filters } from "../features/Content/components/Filters";
import { Items } from "../features/Content/components/Items";
import { Card } from "../features/Content/components/Card";

export const Characters = () => {
  return (
    <div className="flex flex-col justify-center">
      <img src={Logo} />
      <div className="flex flex-col gap-10">
        <Filters />
        <Items
          query={getCharacters}
          renderItem={(character) => (
            <Card key={character.id} character={character} />
          )}
        />
      </div>
    </div>
  );
};
