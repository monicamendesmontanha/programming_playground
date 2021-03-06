import React from "react";
import { Link } from "gatsby";
import Header from '../components/header';

export default () => (
  <div style={ { color: 'teal'} }>
    <Link to="/">Home</Link>
    <Header headerText="About me" />
    <Header headerText="Gatsby" />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat minima praesentium illo numquam et accusamus itaque ullam unde facilis sint fuga eligendi sequi optio delectus, asperiores doloremque ipsam, repellat nesciunt.</p>
  </div>
);