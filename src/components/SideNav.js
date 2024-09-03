import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => (
  <nav style={styles.sideNav}>
    <div style={styles.logoContainer}>
      <Link to="/" style={styles.logoLink}>
        <img
          src={`${process.env.PUBLIC_URL}/simon-savannah-logo.png`}
          alt="Simon Savannah Logo"
          style={styles.logo}
        />
      </Link>
    </div>
    <ul style={styles.navList}>
      <li>
        <Link to="/comics" style={styles.navItem}>
          Comics
        </Link>
      </li>
      <li>
        <Link to="/paintings" style={styles.navItem}>
          Paintings
        </Link>
      </li>
      <li>
        <Link to="/drawings" style={styles.navItem}>
          Drawings
        </Link>
      </li>
      <li>
        <Link to="/prints" style={styles.navItem}>
          Prints
        </Link>
      </li>
      <li>
        <Link to="/poetry" style={styles.navItem}>
          Poetry
        </Link>
      </li>
      <li>
        <Link to="/mixed-media" style={styles.navItem}>
          Mixed Media
        </Link>
      </li>
    </ul>
  </nav>
);

const styles = {
  sideNav: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "200px",
    backgroundColor: "#f1f1f1",
    padding: "40px",
    boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
  },
  logoContainer: {
    marginBottom: "30px",
    textAlign: "center",
  },
  logoLink: {
    display: "inline-block",
    transition: "transform 0.3s ease",
  },
  logo: {
    width: "180px",
    height: "auto",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  navList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  navItem: {
    display: "block",
    padding: "10px 0",
    color: "#333",
    textDecoration: "none",
    fontSize: "18px",
    transition: "color 0.3s ease",
  },
};

export default SideNav;
