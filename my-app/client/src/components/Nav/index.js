import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>

      <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/"><button type="button" className="btn btn-info text-white">Search Books</button></a>
                    </li>
                    <li className="nav-item" id="save">
                        <a className="nav-link" href="/Saved"><button type="button" className="btn btn-info text-white">Saved Books</button></a>
                    </li>
                </ul>
            </div>
    </nav>
  );
}

export default Nav;
