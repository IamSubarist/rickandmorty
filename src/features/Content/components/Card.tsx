import { CardProps } from "../lib/types";

// FC<ItemProps>, где ItemProps - интерфейс твоего компонента.
export const Card: React.FC<CardProps> = ({ cardItems }) => {
  return (
    <>
      <div
        className={`shadow-md rounded w-52 h-auto min-h-36 flex flex-col ${cardItems.name && cardItems.gender ? "" : "justify-center text-center"}`}
      >
        <div className="rounded-t-md">
          {cardItems.image ? (
            <img
              className="w-full h-full object-cover rounded-t-md"
              src={cardItems.image}
            />
          ) : (
            <div></div>
          )}
        </div>
        <div className="p-3">
          <p className="text-lg font-bold">{cardItems.name}</p>
          <p className="text-gray-400">{cardItems.gender}</p>
          <p className="text-gray-400">{cardItems.dimension}</p>
        </div>
      </div>
    </>
  );
};
