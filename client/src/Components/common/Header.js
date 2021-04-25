import React from "react";

export const Header = () => {
  return (
    <div>
      <div align = "center">
        <nav className="navbar navbar-dark bg-dark text-white" >
          <ul className="nav justify-content-center" >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Collections">
                Create Collection
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/MyCollections">
                My Collections
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <br></br>
    </div>
  );
};

export default Header;
