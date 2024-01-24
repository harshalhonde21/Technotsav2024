import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link" onClick={closeSidebar}>
            <img src="/HomePage/TechnoLogo2.png" alt="Logo" width="160" height="80" />
          </Link>
        </div>
        <div className="navbar-items">
          <NavLink
            to="/"
            className="navbar-item"
            style={{
              borderBottom:
                location.pathname === "/home" ? "2px solid white" : "none",
            }}
            onClick={closeSidebar}
          >
            Home
          </NavLink>
          <NavLink
            to="/events"
            className="navbar-item"
            style={{
              borderBottom:
                location.pathname === "/events" ? "2px solid white" : "none",
            }}
            onClick={closeSidebar}
          >
            Events
          </NavLink>
          <NavLink
            to="/leaderBoard"
            className="navbar-item"
            style={{
              borderBottom:
                location.pathname === "/leaderboard"
                  ? "2px solid white"
                  : "none",
            }}
            onClick={closeSidebar}
          >
            PointsTable
          </NavLink>
          <NavLink
            to="/about"
            className="navbar-item"
            style={{
              borderBottom:
                location.pathname === "/about" ? "2px solid white" : "none",
            }}
            onClick={closeSidebar}
          >
            Schedule
          </NavLink>
        </div>
        <div className="navbar-icon" onClick={toggleSidebar}>
          {showSidebar ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      {showSidebar && (
        <div className="sidebar">
          <div className="sidebar-items">
            <NavLink to="/" className="sidebar-item" onClick={closeSidebar}>
              Home
            </NavLink>
            <NavLink
              to="/events"
              className="sidebar-item"
              onClick={closeSidebar}
            >
              Events
            </NavLink>
            <NavLink
              to="/leaderboard"
              className="sidebar-item"
              onClick={closeSidebar}
            >
              PointsTable
            </NavLink>
            <NavLink
              to="/about"
              className="sidebar-item"
              onClick={closeSidebar}
            >
              Schedule
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
