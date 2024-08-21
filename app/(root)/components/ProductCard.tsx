import React from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
};

const ProductCard: React.FC<Product> = ({
  id,
  title,
  price,
  description,
  thumbnail,
}) => {
  return (
    <div className="product-card" key={id}>
      <img src={thumbnail} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">${price.toFixed(2)}</p>
    </div>
  );
};

export default React.memo(ProductCard);
