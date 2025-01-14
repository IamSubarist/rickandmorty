import { useState } from "react";

export const Input = ({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange: (value: string) => void;
}) => {
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
