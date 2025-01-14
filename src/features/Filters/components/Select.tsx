import { useState } from "react";

export const Select = ({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-10 border border-gray-300 rounded-md text-gray-400 relative inline-block">
      <p onClick={() => setIsOpen(!isOpen)} className="pl-4 cursor-pointer">
        {selected}
      </p>
      {isOpen && (
        <div className="w-full absolute z-10 bg-white">
          {options.map((option, index) => (
            <p
              key={index}
              className="block w-full h-10 bg-white pl-4 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};