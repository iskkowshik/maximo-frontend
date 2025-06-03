import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink
import '../styles/Navbar.css'; 

const Navbar = () => {
    return (
        <div className="nav" id="nav">
            <nav className="nav__content">
                <NavLink to="/home" className="nav__logo">
                    <i className='bx bx-menu'></i>
                    <span className="nav__logo-name"></span>
                </NavLink>

                <div className="nav__list">
                    <NavLink to="/home" className="nav__link" activeClassName="active-link">
                        <i className='bx bx-alarm'></i>
                        <span className="nav__name">Pomodoro-ToDo</span>
                    </NavLink>
                    <NavLink to="/eisenhower-matrix" className="nav__link" activeClassName="active-link">
                        <i className='bx bx-grid-alt'></i>
                        <span className="nav__name">Eisenhower Matrix</span>
                    </NavLink>

                    <NavLink to="/spinning-wheel" className="nav__link" activeClassName="active-link">
                        <i className='bx bx-webcam'></i>
                        <span className="nav__name">Motivational wheel</span>
                    </NavLink>

                    <NavLink to="/milestone-setter" className="nav__link" activeClassName="active-link">
                        <i className='bx bx-flag'></i>
                        <span className="nav__name">Milestone Setter</span>
                    </NavLink>

                    <NavLink to="/priority-setter" className="nav__link" activeClassName="active-link">
                        <i className='bx bx-bar-chart-square'></i>
                        <span className="nav__name">1-3-5 Rule</span>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
