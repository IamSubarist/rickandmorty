import { useState } from "react";
import { useQuery, QueryFunction } from "@tanstack/react-query";

/*
  Я бы сделал этот компонент обособленным, просто принимающим items, которые передавались бы в него через props.
*/
type ItemsProps<T> = {
  query: QueryFunction<{ results: T[] }>; // Функция запроса, возвращающая массив объектов
  renderItem: (item: T) => React.ReactNode; // Как рендерить один элемент
};
export const Items = <T,>({ query, renderItem }: ItemsProps<T>) => {
  // type CharacterResponseType = {
  //   results: Character[]
  // }

  // data?.results.map(item => item.)

  const { data } = useQuery({
    queryKey: ["results"],
    queryFn: query,
  });

  const [visibleCount, setVisibleCount] = useState(8);
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <>
      <div className="flex flex-row justify-between flex-wrap gap-4">
        {data?.results.slice(0, visibleCount).map((item) => renderItem(item))}
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
