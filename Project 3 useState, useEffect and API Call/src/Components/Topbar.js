import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Topbar({ subtitle }) {
  return (
    <nav className="navbar navbar-expand-lg navbardark bg-info">
        <a className="navbar-brand ms-3" href="#">{subtitle}</a>
        <button className="navbar-toggler ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link ms-3" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-3" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle ms-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled ms-3" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex ms-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
    </nav>
  );
}
