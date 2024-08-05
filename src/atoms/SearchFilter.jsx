import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchFilter = ({
  searchQuery,
  handleSearchChange,
  filter,
  handleFilterChange,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilterPanel = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="flex items-center justify-between mt-4 mb-4">
      <div className="flex items-center  gap-4 border border-gray-200 w-[250px] py-[14px] px-[15px] rounded-md">
        <FaSearch className="text-gray-400" />
        <input
          type="search"
          className="outline-none"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        <div className="flex gap-2 rounded-full">
          <div className="hover:bg-gray-100 transition-all duration-300 rounded-full ease-in-out p-2">
            <button className="flex gap-3 font-mono">
              Filters
              <div className="flex flex-col gap-1 items-center mt-[7px] font-mono">
                <div className="w-4 h-[1px] bg-black font-mono"></div>
                <div className="w-3 h-[1px] bg-black font-mono"></div>
                <div className="w-1 h-[0.5px] bg-black font-mono"></div>
              </div>
            </button>
          </div>
          <div className="relative z-50">
            <button
              onClick={toggleFilterPanel}
              className="flex items-center hover:bg-gray-100 cursor-pointer transition-all duration-300 rounded-full ease-in-out p-2 font-mono"
            >
              <p>Sort by: {filter}</p>
            </button>
            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-[150px] bg-white border border-gray-200 rounded-lg shadow-lg z-50 font-mono">
                <div
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    handleFilterChange({ target: { value: "Latest" } });
                    setIsFilterOpen(false);
                  }}
                >
                  Latest
                </div>
                <div
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    handleFilterChange({ target: { value: "Popular" } });
                    setIsFilterOpen(false);
                  }}
                >
                  Popular
                </div>
                <div
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    handleFilterChange({ target: { value: "Oldest" } });
                    setIsFilterOpen(false);
                  }}
                >
                  Oldest
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
