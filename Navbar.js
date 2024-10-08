import React, { useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom"

function Navbar() {
  useEffect(() => {
    let navItems = document.querySelectorAll(".nav-link")
    navItems.forEach((item) => {
      item.addEventListener('click', (evt) => {
        navItems.forEach((menu) => {
          menu.classList.remove('text-danger')
        })
        evt.target.classList.add('text-danger')
      })
    })
  })
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/general">NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-danger" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/technology">Technology</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/business">Business</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search Country" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

  )
}
export default Navbar