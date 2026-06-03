import { Button, SearchField } from "@heroui/react";

const SearchFilter = ({search, setSearch}) => {
  return (
    <div className="space-y-5 pt-10">
      <div className="text-center space-y-2">
        <h1 className="text-2xl md:text-5xl font-bold">
          Explore our <span className="text-accent">awesome</span> pets
        </h1>
        <p className="text-gray-500">
          Find the perfect and friendly pet for you from the best place
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <SearchField name="search" className={'shadow-2xl'}>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input value={search} onChange={(e)=> setSearch(e.target.value)} className="w-[280px]" placeholder="Search..." />
            <SearchField.ClearButton />

          </SearchField.Group>

        </SearchField>

        {/* <Button size="sm">Search</Button> */}
      </div>
    </div>
  );
};

export default SearchFilter;
