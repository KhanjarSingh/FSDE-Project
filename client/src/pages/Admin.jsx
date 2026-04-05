import { useState, useEffect } from 'react';
import axios from 'axios';
const Admin = ({ user }) => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const fetchContent = async () => {
    if (!user) return;
    try { const p = await axios.get('http://localhost:5001/api/products'); setProducts(p.data); } catch (err) { alert('Error'); }
  };
  useEffect(() => { fetchContent(); }, [user]);
  const addProduct = async (e) => {
    e.preventDefault();
    try { await axios.post('http://localhost:5001/api/products', { name, price, image, description }, { headers: { Authorization: `Bearer ${user.token}` } }); alert('Added!'); fetchContent(); } catch (err) { alert('Error'); }
  };
  return (
    <div className="container"><h1>Admin</h1><form onSubmit={addProduct}><input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required /><button type="submit">Add</button></form>
      <div>{products.map((p) => (<div key={p._id}><h3>{p.name}</h3></div>))}</div>
    </div>
  );
};
export default Admin;
