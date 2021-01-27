import React from 'react';
import {
    NavLink
} from "react-router-dom"

const Navbar = () => {
    return(
        <>
        <div className="text-center text-uppercase fw-bold fs-4 p-5 bg-light mb-3">
            Test front-end
        </div>
        <nav className="navbar navbar-expand-lg navbar-light container">
            {/* <a className="navbar-brand" href="#">Admin</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            <ul className="navbar-nav mx-auto fw-bold">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        activeClassName="is-active"
                        to="/"
                    >
                        HOME
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="is-active" to="/pokemon" >POKEMON</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="is-active" to="/function1">FUNCTION1</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="is-active" to="/function2">FUNCTION2</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="is-active" to="/function3">FUNCTION3</NavLink>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;