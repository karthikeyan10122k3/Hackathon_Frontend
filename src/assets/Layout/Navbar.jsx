import React from "react";
import "../Style/Layout/navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ loggedIn }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container-fluid text-light top-header">
        <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mx-4">
          <div className="col-md-3 mb-2 mb-md-0 first-part">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="d-inline-flex text-decoration-none text-light btn"
            >
              Colossus Textile
            </button>
          </div>
          <div className="col-md-6 second-part">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  exact
                  activeClassName="active"
                  className="nav-link px-2  btn"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products"
                  activeClassName="active"
                  className="nav-link px-2 btn"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  to="/services"
                  activeClassName="active"
                  className="nav-link dropdown-toggle px-2 btn"
                >
                  Services
                </NavLink>
                <ul className="dropdown-menu text-center dropdown-menu-end">
                  <div className="row">
                    <div className="col">
                      <li>
                        <NavLink to="/service1" className="dropdown-item btn">
                          Service 1
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/service2" className="dropdown-item btn">
                          Service 2
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/service3" className="dropdown-item btn">
                          Service 3
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/service4" className="dropdown-item btn">
                          Service 4
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/service5" className="dropdown-item btn">
                          Service 5
                        </NavLink>
                      </li>
                    </div>
                    <div className="col">
                      <li>
                        <NavLink to="/service6" className="dropdown-item btn">
                          Service 6
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/service7" className="dropdown-item btn">
                          Service 7
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/service8" className="dropdown-item btn">
                          Service 8
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/service9" className="dropdown-item btn">
                          Service 9
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/service10" className="dropdown-item btn">
                          Service 10
                        </NavLink>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/customer"
                  activeClassName="active"
                  className="nav-link px-2 btn"
                >
                  Customers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/features"
                  activeClassName="active"
                  className="nav-link px-2 btn"
                >
                  Features
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-3 text-end third-part">
            <div className="d-flex align-items-center">
              {loggedIn ? (
                <>
                  <form
                    className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                    role="search"
                  >
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search..."
                      aria-label="Search"
                    />
                  </form>
                  <div className="dropdown text-end">
                    <a
                      href="#"
                      className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://github.com/mdo.png"
                        alt="mdo"
                        width="32"
                        height="32"
                        className="rounded-circle"
                      />
                    </a>
                    <ul className="dropdown-menu text-small">
                      <li>
                        <a className="dropdown-item" href="#">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Settings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          WhiteList
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <div>
                  <button
                    onClick={() => {
                      navigate("/register", { state: { register: "login" } });
                    }}
                    className="btn btn-outline-primary me-2"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      navigate("/register", { state: { register: "signup" } });
                    }}
                    className="btn btn-primary"
                  >
                    Sign-up
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <footer className=" text-light py-4 footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are a leading provider of IT products and services, dedicated
              to delivering high-quality solutions to our customers.
            </p>
          </div>
          <div className="col-md-4 text-light">
            <h5>Quick Links</h5>
            <ul className="list-unstyled ">
              <li>
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link " href="#">
                  Products
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              123 Street Name
              <br />
              City, State, ZIP
              <br />
              Phone: 123-456-7890
              <br />
              Email: info@example.com
            </p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer, Header };
