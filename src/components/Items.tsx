import Item from "./Item";
import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../api/characters";
import { useEffect, useState } from "react";

type CharacterProps = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: undefined;
};

function Items() {
  const { data } = useQuery({
    queryKey: ["results"],
    queryFn: getCharacters,
  });

  const [visibleCount, setVisibleCount] = useState(8); // Начальное количество отображаемых элементов

  // Функция для увеличения количества видимых персонажей
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <>
      <div className="flex flex-row justify-between flex-wrap gap-4">
        {data?.results
          .slice(0, visibleCount)
          .map((character: CharacterProps) => (
            <Item key={character.id} props={character} />
          ))}
      </div>
      {data &&
        visibleCount < data.results.length && ( // Проверяем, нужно ли показывать кнопку "Load More"
          <button
            onClick={loadMore}
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded"
          >
            Load More
          </button>
        )}
    </>
  );
}

export default Items;
