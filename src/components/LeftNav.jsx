import React from 'react';
import './LeftNav.css';
import { Link } from 'react-router-dom';

export const LeftNav = () => {
  return (
    <div className="navbar">
      <div className="logo">PROJ</div>
      <hr />
      <div className='links'>
        <Link to="/"> Home </Link>
        <Link to="/Explore"> Explore </Link>
        <div className="product-service-event-links">
          <Link to="/product"> Products </Link>
          <Link to="/service"> Services </Link>
          <Link to="/event"> Events </Link>
        </div>
        <Link to="/Saved"> Saved </Link>
        <Link to="/Cart"> Cart </Link>
        <Link to="/Notification"> Notification </Link>
        <Link to="/Create"> Create </Link> 
      </div>
    </div>
  );
};
