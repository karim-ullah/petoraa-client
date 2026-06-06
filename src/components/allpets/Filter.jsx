import { Label, ListBox, Select } from "@heroui/react";

const Filter = ({ species, setSpecies }) => {
  return (
    <select
      value={species}
      onChange={(e) => setSpecies(e.target.value)}
      className="
        w-full max-w-xs
        rounded-xl
        border border-gray-300
        bg-background
        px-4 py-3
        text-sm font-medium
        shadow-sm
        outline-none
        transition-all
        duration-200
        hover:border-gray-400
        focus:border-accent
        focus:ring-2
        focus:ring-accent
        cursor-pointer
      "
    >
      <option value="">Filter by Species</option>
      <option value="Dog">Dog</option>
      <option value="Cat">Cat</option>
      <option value="Bird">Bird</option>
      <option value="Rabbit">Rabbit</option>
    </select>
  );
};

export default Filter;
