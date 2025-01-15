import { useState } from "react";
import { SelectProps } from "../lib/types";

export const Select: React.FC<SelectProps> = ({
  options,
  selected,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-10 border border-gray-300 rounded-md text-gray-400 relative inline-block">
      <div className="w-full h-full flex flex-row items-center">
        <p
          onClick={() => setIsOpen(!isOpen)}
          className="w-full pl-4 cursor-pointer"
        >
          {selected}
        </p>
      </div>
      {isOpen && (
        <div className="w-full absolute z-10 bg-white mt-1 border border-gray-300">
          {options.map((option, index) => (
            <p
              key={index}
              className="block bg-white py-2 pl-4 cursor-pointer hover:bg-gray-100"
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
