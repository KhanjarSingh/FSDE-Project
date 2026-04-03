import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Cart = ({ cart, setCart, user }) => {
  const navigate = useNavigate();
  const totalPrice = cart.reduce((a, c) => a + c.price * c.quantity, 0);
  const placeOrder = async () => {
    if (!user) return navigate('/login');
    try {
      await axios.post('http://localhost:5001/api/orders', { items: cart, totalPrice }, { headers: { Authorization: `Bearer ${user.token}` } });
      alert('Order placed!'); setCart([]); navigate('/orders');
    } catch (err) { alert('Error'); }
  };
  const removeFromCart = (id) => setCart(cart.filter((x) => x.product !== id));
  return (
    <div className="container"><h1>Your Cart</h1>{cart.length === 0 ? <p>Empty</p> : (
        <>{cart.map((item) => (<div key={item.product}><h3>{item.name}</h3><button onClick={() => removeFromCart(item.product)}>Remove</button></div>))}<h2>Total: ${totalPrice.toFixed(2)}</h2><button onClick={placeOrder}>Place Order</button></>
      )}</div>
  );
};
export default Cart;
