import React from "react";

type SearchBarProps = {
  searchTerm: string;
  onSearch: (term: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      className="search-input"
    />
  );
};

export default React.memo(SearchBar);
