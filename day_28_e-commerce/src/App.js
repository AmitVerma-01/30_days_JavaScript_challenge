import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/Products/ProductList";

const getProducts = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.log("Error fetching data: " + error);
    return [];
  }
};

getProducts();

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
      console.log(productsData);
    };
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <ProductList products={products} />
    </div>
  );
}

export default App;
