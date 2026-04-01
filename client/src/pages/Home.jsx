import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => { const { data } = await axios.get('http://localhost:5001/api/products'); setProducts(data); };
    fetchProducts();
  }, []);
  return (
    <div className="container">
      <h1>All Products</h1>
      <div className="product-grid">
        {products.map((p) => (
          <Link key={p._id} to={`/product/${p._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="product-card"><img src={p.image} alt={p.name} /><h3>{p.name}</h3><p>${p.price}</p></div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Home;
