import React, { useState, useEffect, useContext } from 'react';
import falcon from '../Assets/falcon_emblem.jpg'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'

const Navbar = () => {
  const {user, setUser} = useContext(UserContext);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const history = useHistory();

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    setToken(null)
    history.push('/')
  }

  return(
    <nav>
      <section className="navbar-brand">
        <Link to="/"><img src={falcon} /></Link>
      </section>
      <section className="nav-links">
        {token ? <Link to="/admin">Admin</Link> : null}
        {token ? <Link to="/industry">Industry</Link> : null}
        {token ? 
            <button className="logout-button" onClick={logOut}>Logout</button>
          : <Link to="/login">Login</Link>
        }
      </section>
    </nav>
  );
}

export default Navbar;