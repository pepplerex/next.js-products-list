"use client";
import { useEffect, useState } from "react";
import { fetchProducts } from "./lib/api";
import SearchBar from "./components/SearchBar";
import SortSelect from "./components/SortSelect";
import ProductList from "./components/ProductList";
import ProductSkeleton from "./skeleton/PageSkeleton";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
};

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <ProductSkeleton />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const filteredProducts = products
    .filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "name-asc") return a.title.localeCompare(b.title);
      if (sortOption === "name-desc") return b.title.localeCompare(a.title);
      return 0;
    });

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="navigation">
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <SortSelect sortOption={sortOption} onSortChange={setSortOption} />
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default HomePage;
