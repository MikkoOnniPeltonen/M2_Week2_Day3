// src/components/Navbar.jsx

import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
      <nav className="Navbar">
        <ul>
          {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link> */}

          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  