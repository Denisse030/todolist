import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <center>
        <nav>
            <ul>
                <li><Link to="/">To Do List</Link></li>
                <li><Link to="/advice">Advice</Link></li>
            </ul>
        </nav> 
    </center>
  );
}

export default Navbar;
