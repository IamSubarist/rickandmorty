import { useState } from "react";
import { Input } from "../../Filters/components/Input";
import { LocationFilterProps } from "../lib/types";
import { Select } from "../../Filters/components/Select";

export const Filters = () => {
  const [filters, setFilters] = useState<LocationFilterProps>({
    name: "",
    type: "Type",
    dimension: "Dimension",
  });

  const handleFilterChange = (key: "type" | "dimension", value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleNameChange = (name: string) => {
    setFilters((prev) => ({ ...prev, name }));
  };

  return (
    <div className="px-32 flex flex-row justify-between gap-4">
      <Input placeholder="Filter by name..." onChange={handleNameChange} />
      <Select
        options={["Type 1", "Type 2", "Type 3"]}
        selected={filters.type}
        onSelect={(value) => handleFilterChange("type", value)}
      />
      <Select
        options={["Dimension 1", "Dimension 2", "Dimension 3"]}
        selected={filters.dimension}
        onSelect={(value) => handleFilterChange("dimension", value)}
      />
    </div>
  );
};
