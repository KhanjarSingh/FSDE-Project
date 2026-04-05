import { useEffect, useState } from 'react';
import axios from 'axios';
const Orders = ({ user }) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;
      try { const { data } = await axios.get('http://localhost:5001/api/orders/myorders', { headers: { Authorization: `Bearer ${user.token}` } }); setOrders(data); } catch (err) { alert('Error'); }
    };
    fetchOrders();
  }, [user]);
  return (
    <div className="container"><h1>Orders</h1>{orders.length === 0 ? <p>None</p> : (
        <div>{orders.map((o) => (<div key={o._id}><h3>Order {o._id}</h3><p>${o.totalPrice}</p></div>))}</div>
      )}</div>
  );
};
export default Orders;
