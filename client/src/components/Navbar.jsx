import { Link, useNavigate } from 'react-router-dom';
const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const logout = () => { localStorage.removeItem('userInfo'); setUser(null); navigate('/login'); };
  return (
    <nav>
      <Link to='/'>MiniShop</Link>
      <div>
        <Link to='/cart'>Cart</Link>
        {user ? (
          <>
            <Link to='/orders'>My Orders</Link>
            {user.isAdmin && <Link to='/admin'>Admin</Link>}
            <button onClick={logout}>Logout</button>
            <span>({user.name})</span>
          </>
        ) : ( <Link to='/login'>Login</Link> )}
      </div>
    </nav>
  );
};
export default Navbar;
