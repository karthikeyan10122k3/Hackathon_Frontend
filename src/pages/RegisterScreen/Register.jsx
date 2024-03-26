import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../assets/Style/RegisterScreen/register.css";

export default function Register() {
  const location = useLocation();
  const registerPage = location.state && location.state.register;
  const [showRegister, setShowRegister] = useState(registerPage);
  return (
    <div className="container-fluid bg-gradient">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
          {showRegister === "signup" && (
            <SignupFormComponent setShowRegister={setShowRegister} />
          )}
          {showRegister === "otp" && (
            <OTPPage setShowRegister={setShowRegister} />
          )}
          {showRegister === "login" && (
            <LoginFromComponent setShowRegister={setShowRegister} />
          )}
        </div>
      </div>
    </div>
  );
}

function LoginFromComponent({ setShowRegister }) {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setLoginInfo({ ...loginInfo, [name]: newValue });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!loginInfo.email) {
      newErrors.email = "Email is required";
    }
    if (!loginInfo.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      navigate("/dashboard", { state: { loggedIn: true } });
      console.log("Login form submitted:", loginInfo);
    }
  };

  return (
    <div className="login form bg-white p-4 rounded border border-primary text-center">
      <header className="mb-4 heading-text">Login</header>
      <form>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter your email"
          name="email"
          value={loginInfo.email}
          onChange={handleInputChange}
        />
        {errors.email && <div className="text-danger">{errors.email}</div>}
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter your password"
          name="password"
          value={loginInfo.password}
          onChange={handleInputChange}
        />
        {errors.password && (
          <div className="text-danger">{errors.password}</div>
        )}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={loginInfo.rememberMe}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <a href="#" className="text-end">
            Forgot password?
          </a>
        </div>
        <button
          className="btn btn-primary btn-block mb-3"
          type="button"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
      <div className="signup">
        <p className="mb-0 text-center">
          Don't have an account?{" "}
          <button
            className="btn btn-link p-0"
            onClick={() => setShowRegister("signup")}
          >
            Signup
          </button>
        </p>
      </div>
    </div>
  );
}

function SignupFormComponent({ setShowRegister }) {
  const [signupInfo, setSignupInfo] = useState({
    username: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!signupInfo.username) {
      newErrors.username = "username is required";
    }
    if (!signupInfo.email) {
      newErrors.email = "Email is required";
    }
    if (!signupInfo.mobileNumber) {
      newErrors.mobileNumber = "mobile Number is required";
    }
    if (!signupInfo.password) {
      newErrors.password = "Password is required";
    }
    if (signupInfo.password !== signupInfo.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setShowRegister("otp");
      console.log("Signup form submitted:", signupInfo);
    }
  };

  return (
    <div className="registration form bg-white p-4 rounded border border-primary ">
      <header className="mb-4 text-center heading-text">Signup</header>
      <form>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter your username"
          name="username"
          value={signupInfo.username}
          onChange={handleInputChange}
        />
        {errors.username && (
          <div className="text-danger">{errors.username}</div>
        )}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter your email"
          name="email"
          value={signupInfo.email}
          onChange={handleInputChange}
        />
        {errors.email && <div className="text-danger">{errors.email}</div>}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter your Mobile Number"
          name="mobileNumber"
          value={signupInfo.mobileNumber}
          onChange={handleInputChange}
        />
        {errors.mobileNumber && (
          <div className="text-danger">{errors.mobileNumber}</div>
        )}
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Create a password"
          name="password"
          value={signupInfo.password}
          onChange={handleInputChange}
        />
        {errors.password && (
          <div className="text-danger">{errors.password}</div>
        )}
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Confirm your password"
          name="confirmPassword"
          value={signupInfo.confirmPassword}
          onChange={handleInputChange}
        />
        {errors.confirmPassword && (
          <div className="text-danger">{errors.confirmPassword}</div>
        )}
        <div className="text-center signup-btn ">
          <button
            className="btn btn-primary btn-block mb-3 "
            type="button"
            onClick={handleSubmit}
          >
            Signup
          </button>
        </div>
      </form>
      <div className="signup">
        <p className="mb-0 text-center">
          Already have an account?{" "}
          <button
            className="btn btn-link p-0"
            onClick={() => setShowRegister("login")}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

function OTPPage({ setShowRegister }) {
  const [otp, setOTP] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setOTP(value);
  };

  const handleSubmit = () => {
      if (otp.length !== 6 ) {
      setError("Please enter a valid 6-digit OTP number.");
      return;
    }
    setShowRegister("login");
  };

  return (
    <div className="registration form bg-white p-4 rounded border border-primary ">
      <h2 className="text-center mb-4">Enter OTP</h2>
      <p className="text-center text-muted mb-4">
        An OTP has been sent to your Email u Entered.
      </p>
      <div className="mb-3">
        <input
          type="text" 
          className="form-control"
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={handleInputChange}
        />
        {error && <div className="text-danger mt-1">{error}</div>}
      </div>
      <div className="text-center">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
