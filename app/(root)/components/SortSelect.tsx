import React from "react";

type SortSelectProps = {
  sortOption: string;
  onSortChange: (option: string) => void;
};

const SortSelect: React.FC<SortSelectProps> = ({
  sortOption,
  onSortChange,
}) => {
  return (
    <select
      value={sortOption}
      onChange={(e) => onSortChange(e.target.value)}
      className="sort-select"
    >
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="name-asc">Name: A-Z</option>
      <option value="name-desc">Name: Z-A</option>
    </select>
  );
};

export default React.memo(SortSelect);
