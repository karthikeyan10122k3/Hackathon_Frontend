import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ThirdOrderComponent() {
  const navigate = useNavigate();
  const [thirdOrderInfo, setThirdOrderInfo] = useState({
    zari: "",
    typeOfWeaving: "",
    manufacturer: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setThirdOrderInfo({ ...thirdOrderInfo, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!thirdOrderInfo.zari) {
      newErrors.zari = "Zari location is required";
    }
    if (!thirdOrderInfo.typeOfWeaving) {
      newErrors.typeOfWeaving = "Weaving type is required";
    }
    if (!thirdOrderInfo.manufacturer) {
      newErrors.manufacturer = "Manufacturer name is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      localStorage.setItem('thirdOrderInfo', JSON.stringify(thirdOrderInfo));
      
      navigate("/order-confirmation");
    }
  };
  return (
    <>
    <div className="third-backgroung-image"></div>
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4"
        style={{ border: "1px solid blue", padding: "20px" }}
      >
        <h2 className="mb-4 text-center heading-text">
          Select your Zari and Manufacturers
        </h2>
        <form>
          <div className="mb-3">
            <label htmlFor="zari" className="form-label label-text">
              Zari Provider
            </label>
            <select
              id="zari"
              className="form-select mb-3 "
              aria-label="Select Zari Provider"
              name="zari"
              value={thirdOrderInfo.zari}
              onChange={handleInputChange}
            >
              <option value="">Select Zari Provider</option>
              <option value="Swarna Zari">Swarna Zari</option>
              <option value="Kasim Textile Corporation">
                Kasim Textile Corporation
              </option>
              <option value="Jariwala Trading Company">
                Jariwala Trading Company
              </option>
              <option value="Saurashtra Zari Works">
                Saurashtra Zari Works
              </option>
              <option value="Suraj Zari Art">Suraj Zari Art</option>
              <option value="Mangal Zari Centre">Mangal Zari Centre</option>
              <option value="Balaji Zari Udyog">Balaji Zari Udyog</option>
              <option value="Shubh Swastik Enterprises">
                Shubh Swastik Enterprises
              </option>
              <option value="Srinathji Zari">Srinathji Zari</option>
              <option value="Vishal Zari Pvt. Ltd.">
                Vishal Zari Pvt. Ltd.
              </option>
              <option value="Anand Zari">Anand Zari</option>
              <option value="Lakshmi Zari">Lakshmi Zari</option>
            </select>
            {errors.zari && <div className="text-danger">{errors.zari}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label label-text">Type of Weaving</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="typeOfWeaving"
                value="Hand Loomed"
                checked={thirdOrderInfo.typeOfWeaving === "Hand Loomed"}
                onChange={handleInputChange}
              />
              <label className="form-check-label ">Hand Loomed</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="typeOfWeaving"
                value="Machine Loomed"
                checked={thirdOrderInfo.typeOfWeaving === "Machine Loomed"}
                onChange={handleInputChange}
              />
              <label className="form-check-label">Machine Loomed</label>
            </div>
            {errors.typeOfWeaving && (
              <div className="text-danger">{errors.typeOfWeaving}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="manufacturer" className="form-label label-text">
              Manufacturer
            </label>
            <select
              id="manufacturer"
              className="form-select mb-3"
              aria-label="Select Manufacturer"
              name="manufacturer"
              value={thirdOrderInfo.manufacturer}
              onChange={handleInputChange}
            >
              <option value="">Select Manufacturer</option>
              <option value="Arvind Limited">Arvind Limited</option>
              <option value="Siyaram's Silk Mills Ltd.">
                Siyaram's Silk Mills Ltd.
              </option>
              <option value="Bombay Dyeing & Manufacturing Company Limited">
                Bombay Dyeing & Manufacturing Company Limited
              </option>
              <option value="Welspun India Ltd.">Welspun India Ltd.</option>
              <option value="Raymond Group">Raymond Group</option>
              <option value="Loyal Textile Mills Ltd.">
                Loyal Textile Mills Ltd.
              </option>
              <option value="Grasim Industries Ltd.">
                Grasim Industries Ltd.
              </option>
              <option value="Himatsingka Seide Ltd.">
                Himatsingka Seide Ltd.
              </option>
              <option value="Sutlej Textiles and Industries Ltd.">
                Sutlej Textiles and Industries Ltd.
              </option>
              <option value="Vardhman Textiles Limited">
                Vardhman Textiles Limited
              </option>
            </select>
            {errors.manufacturer && (
              <div className="text-danger">{errors.manufacturer}</div>
            )}
          </div>

          <div className="signup-btn text-center">
            <button
              className="btn btn-primary btn-block mb-3"
              type="button"
              onClick={handleSubmit}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
