import React from 'react';
import { Link } from 'react-router-dom'

import './Nav.css'

export default ({ cities }) => (
  <nav className="nav">
    {cities && cities.map(({name, id}) => 
      <Link to={name} key={id} className="nav-item">
        {name}
      </Link>
    )}
  </nav>
)