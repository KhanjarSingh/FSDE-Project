import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5001/api/auth/login', { email, password });
      setUser(data); localStorage.setItem('userInfo', JSON.stringify(data)); navigate('/');
    } catch (err) { alert('Invalid credentials'); }
  };
  return (
    <div className="container">
      <form onSubmit={submit}><h2>Login</h2><div><label>Email</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div><div><label>Password</label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></div><button type="submit">Login</button><p>New user? <Link to="/register">Register here</Link></p></form>
    </div>
  );
};
export default Login;
