import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
const ProductDetails = ({ cart, setCart }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProduct = async () => { const { data } = await axios.get(`http://localhost:5001/api/products/${id}`); setProduct(data); };
    fetchProduct();
  }, [id]);
  const addToCart = () => {
    const exist = cart.find((x) => x.product === product._id);
    if (exist) setCart(cart.map((x) => (x.product === product._id ? { ...exist, quantity: exist.quantity + 1 } : x)));
    else setCart([...cart, { product: product._id, name: product.name, price: product.price, quantity: 1 }]);
    navigate('/cart');
  };
  return (
    <div className="container">
      {product.name ? (<div style={{ display: 'flex', gap: '2rem' }}><img src={product.image} alt={product.name} style={{ width: '300px' }} /><div><h1>{product.name}</h1><p>{product.description}</p><h3>${product.price}</h3><button onClick={addToCart}>Add to Cart</button></div></div>) : ( <p>Loading...</p> )}
    </div>
  );
};
export default ProductDetails;
