import { Card } from "./Card";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../../../api/get-character";

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
export const Items = () => {
  // interface Character {
  //   id: number
  //   gender: string
  //   image: string
  // }

  // type CharacterResponseType = {
  //   results: Character[]
  // }

  // data?.results.map(item => item.)

  const { data } = useQuery({
    queryKey: ["results"],
    queryFn: getCharacters,
  });

  const [visibleCount, setVisibleCount] = useState(8);
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <>
      <div className="flex flex-row justify-between flex-wrap gap-4">
        {data?.results
          .slice(0, visibleCount)
          .map((character: CharacterProps) => (
            <Card key={character.id} props={character} />
          ))}
      </div>
      {data && visibleCount < data.results.length && (
        <button
          onClick={loadMore}
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded"
        >
          Load More
        </button>
      )}
    </>
  );
};
