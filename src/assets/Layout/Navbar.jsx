import React from "react";
import "../Style/Layout/navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ loggedIn }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container-fluid text-light top-header ">
        <header className="d-flex flex-wrap align-items-center justify-content-between py-2 mx-4">
          <div className="col-md-3 mb-2 mb-md-0 first-part">
            <img
              src="src\assets\Images\HomeScreen\Logo.PNG"
              alt="logo"
              height={32}
              width={32}
            />
            <button
              onClick={() => {
                navigate("/");
              }}
              className=" d-inline-flex text-decoration-none text-light btn head-text"
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
            <div className="d-flex align-items-center justify-content-end">
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
                      className="d-block link-body-emphasis text-decoration-none dropdown-toggle text-white"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="src\assets\Images\Dashboard\user-icon.png"
                        alt="mdo"
                        width="32"
                        height="32"
                        className="rounded-circle"
                      />
                    </a>
                    <ul className="dropdown-menu text-small">
                      <li>
                        <button onClick={()=>navigate("/profile")} className="dropdown-item">Profile</button>
                      </li>
                      <li>
                        <button onClick={()=>navigate("/cart")} className="dropdown-item">Cart</button>
                      </li>
                      <li>
                        <button onClick={()=>navigate("/myOrders")} className="dropdown-item">My Orders</button>
                      </li>
                      <li>
                        <button onClick={()=>navigate("/settings")} className="dropdown-item">Settings</button>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <button onClick={()=>navigate("/")} className="dropdown-item">Sign out</button>
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
  const navigate = useNavigate();
  return (
    <footer className=" text-light py-4 footer ">
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
                <button onClick={()=>navigate("/")} className="nav-link">Home</button>
              </li>
              <li>
                <button onClick={()=>navigate("/products")} className="nav-link ">Products</button>
              </li>
              <li>
                <button onClick={()=>navigate("/customer")} className="nav-link">Customer Testimonials</button>
              </li>
              <li>
                <button onClick={()=>navigate("/contact")} className="nav-link">Contact Us</button>
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
