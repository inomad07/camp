import React from 'react';
import { Link } from "react-router-dom";

import './header.scss'

const Header = () => {
  return (
      <div className="header-container">
          <div className="header">
              <Link to="/" className="logo">Camp</Link>
              <div className="header-right">
                  <Link className="active" to="/">Home</Link>
                  <Link to="/about">About us</Link>
              </div>
          </div>
          <div className="greetings">
              Best ever camp for your child
          </div>
      </div>
  )
};

export default Header;