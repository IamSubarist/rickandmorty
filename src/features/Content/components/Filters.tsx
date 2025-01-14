import { useState } from "react";
import { Input } from "../../Filters/components/Input";
import { Select } from "../../Filters/components/Select";

export const Filters = () => {
  // Состояние для всех фильтров
  const [filters, setFilters] = useState({
    name: "",
    species: "Species",
    gender: "Gender",
    status: "Status",
  });

  // Обработчики для изменения фильтров
  const handleNameChange = (name: string) => {
    setFilters((prev) => ({ ...prev, name }));
  };

  const handleFilterChange = (
    key: "species" | "gender" | "status",
    value: string
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex flex-row justify-between gap-4">
      {/* Текстовый ввод для фильтра по имени */}
      <Input placeholder="Filter by name..." onChange={handleNameChange} />

      {/* Выпадающий список для фильтра по виду */}
      <Select
        options={["Human", "Alien", "Mythical"]}
        selected={filters.species}
        onSelect={(value) => handleFilterChange("species", value)}
      />

      {/* Выпадающий список для фильтра по полу */}
      <Select
        options={["Male", "Female"]}
        selected={filters.gender}
        onSelect={(value) => handleFilterChange("gender", value)}
      />

      {/* Выпадающий список для фильтра по статусу */}
      <Select
        options={["Alive", "Dead"]}
        selected={filters.status}
        onSelect={(value) => handleFilterChange("status", value)}
      />
    </div>
  );
};
