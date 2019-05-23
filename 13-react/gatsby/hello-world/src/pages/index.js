import React from "react";
import { Link } from "gatsby";
import Header from '../components/header';

export default () => (

  <div style={ { color: 'purple'} }>
    <Header headerText="Hello World" />
    <Link to="/about">About me</Link>
    <p>Oh yes</p>
    <img src="https://source.unsplash.com/random/400x200" alt="Random image" />
  </div>
);
