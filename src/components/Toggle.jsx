import React from 'react';
import { NavLink } from 'react-router-dom';

function NavLinks() {
  return (
   <div className="basecover">
     <div className='baselinks'>
      <div><NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink></div>
      <div><NavLink to="/detailed" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Detailed</NavLink></div>
    
    </div>
   </div>
  );
}

export default NavLinks;