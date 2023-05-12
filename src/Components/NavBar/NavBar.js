import React from 'react';
import './NavBar.css'; // Import the CSS file

export default function NavBar() {
  return (
    <div>
      <header>
        <h1 className="logo">My Website</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
