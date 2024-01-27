import React from "react";
import UserCard from "./UserCard";
import "../styles/header.css";

export default function Header() {
  return (
    <header>
      <a href="/">
        <div id="logo">
          <img src="logo.svg" alt="logo" height="32" />
        </div>
      </a>
      <nav>
        <ul>
          <li className="nav_el">
            <a className="highlighted" href="">
              Featured Cocktails
            </a>
          </li>
          <li className="nav_el">
            <a href="">Cocktail Constructor</a>
          </li>
          <li className="nav_el">
            <a href="">Featured</a>
          </li>
          <li className="nav_el">
            <a href="">About project</a>
          </li>
        </ul>
      </nav>
      <UserCard />
    </header>
  );
}
