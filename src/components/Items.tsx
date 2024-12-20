import Item from "./Item";
import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../api/characters";
import { useState } from "react";

type CharacterProps = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: undefined;
};

/*
  Я бы сделал этот компонент обособленным, просто принимающим items, которые передавались бы в него через props.
*/
function Items() {
  /*
    Отдельный файл (get-characters-query)

    const getCharactersQuery = (params) => useQuery({
      // Ключ тоже выносится в константы в отдельный файл и зачастую имеет вид - const CHARACTERS_PRIMARY_KEY = ['get-characters']
      queryKey: ["results"],
      queryFn: () => getCharacters(params),
  });

  */
  // interface Character {
  //   id: number
  //   gender: string
  //   image: string
  // }

  // type CharacterResponseType = {
  //   results: Character[]
  // }

  const {
    data,
    // isLoading, isError
  } = useQuery({
    queryKey: ["results"],
    queryFn: getCharacters,
  });

  // data?.results.map(item => item.)

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
          // Компонент load-more-button.
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
