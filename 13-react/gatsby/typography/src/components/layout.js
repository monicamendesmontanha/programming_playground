import React from "react";
import { Link } from "gatsby";

const NavLink = (props) => (  // DECONSTRUCTION: const NavLink = (to, children ) => (
  <li style={{display: 'inline-block', marginRight: '1em'}}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);


export default ({children}) => (
  <div style={ {color: 'green', margin: '3em auto', maxWidth: 650, padding: '0 1em', textAlign: 'justify'} }>
    <header style={{marginBottom: '1.5em'}}>
      <Link to="/">
        <h3 style={{display: 'inline'}}>My Site</h3>
      </Link>
    </header>

    <ul style={{display: 'inline'}}>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </ul>
    {children}
  </div>
);