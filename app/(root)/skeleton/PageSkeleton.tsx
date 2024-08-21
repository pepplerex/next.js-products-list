import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton: React.FC = () => {
  return (
    <div className="skeleton-cnt">
      <div className="navigation">
        <Skeleton height={40} width={300} className="search-input-skeleton" />
        <Skeleton height={40} width={200} className="sort-select-skeleton" />
      </div>

      <div className="product-list">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="product-card-skeleton">
            <Skeleton height={150} />
            <Skeleton height={20} width={100} style={{ margin: "10px 0" }} />
            <Skeleton height={15} width={200} />
            <Skeleton height={15} width={150} style={{ marginTop: "5px" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSkeleton;
