import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
const Register = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const submit = async (e) => { e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5001/api/auth/register', { name, email, password });
      setUser(data); localStorage.setItem('userInfo', JSON.stringify(data)); navigate('/');
    } catch (err) { alert('Error registering'); }
  };
  return (
    <div className="container">
      <form onSubmit={submit}><h2>Register</h2><div><label>Name</label><input type="text" value={name} onChange={(e) => setName(e.target.value)} required /></div><div><label>Email</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div><div><label>Password</label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></div><button type="submit">Register</button></form>
    </div>
  );
};
export default Register;
