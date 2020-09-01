import React, { useContext } from 'react';
import falcon from '../Assets/falcon_emblem.jpg'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'

const Navbar = () => {
  const {user} = useContext(UserContext);
  return(
    <nav>
      <section className="navbar-brand">
        <Link to="/"><img src={falcon} /></Link>
      </section>
      <section className="nav-links">
        {user && user.admin ? <Link to="/admin">Admin</Link> : null}
        {user ? <Link to="/industry">Industry</Link> : null}
        {user ? 
            <Link to="/">Logout</Link>
          : <Link to="/login">Login</Link>
        }
      </section>
    </nav>
  );
}

export default Navbar;