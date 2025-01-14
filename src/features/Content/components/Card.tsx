import { CardProps } from "../lib/types";

// FC<ItemProps>, где ItemProps - интерфейс твоего компонента.
export const Card: React.FC<CardProps> = ({ character }) => {
  return (
    <>
      <div className="border rounded-md w-52 overflow-hidden">
        <div className="rounded-t-md">
          <img className="w-full h-auto object-cover" src={character.image} />
        </div>
        <div className="p-3">
          <p className="text-lg font-bold">{character.name}</p>
          <p className="text-gray-400">{character.gender}</p>
        </div>
      </div>
    </>
  );
};
