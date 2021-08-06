import React from 'react';
import './NavButton.css'

export const NavButton = ({ icon, label, onClick }) => {
  return <button className="navButton" onClick={onClick}>
    {icon}
    {label}
  </button>
}