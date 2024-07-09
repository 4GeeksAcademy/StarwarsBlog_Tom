import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-body-tertiary">
		<div className="container">
		  <a className="navbar-brand" href="/">
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUPS_ZG-j_cnaz0nYpJkY9wtbR63Lwxdhww&s" alt="Bootstrap" width="100" height="50"/>
		  </a>
		  <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favoritos
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
		</div>
	
     
   
	  </nav>
	);
};
