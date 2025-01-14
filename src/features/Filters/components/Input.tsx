import { useState } from "react";
import { InputProps } from "../lib/types";

export const Input: React.FC<InputProps> = ({ placeholder, onChange }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <input
      className="pl-4 w-full h-10 border border-gray-300 rounded-md text-gray-400"
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
        onChange(e.target.value);
      }}
    />
  );
};
