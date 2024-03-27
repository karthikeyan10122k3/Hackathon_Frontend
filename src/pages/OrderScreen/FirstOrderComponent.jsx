import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../assets/Style/Order/order.css";

export default function FirstOrderComponent() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [firstOrderInfo, setFirstOrderInfo] = useState({
    productId,
    color: "",
    quantity: 0,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFirstOrderInfo({ ...firstOrderInfo, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!firstOrderInfo.color) {
      newErrors.color = "Color is required";
    }
    if (!firstOrderInfo.quantity) {
      newErrors.quantity = "Quantity is required";
    }
    if (!firstOrderInfo.productId) {
      newErrors.productId = "Invalid ProductId";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      localStorage.setItem('firstOrderInfo', JSON.stringify(firstOrderInfo));
      
      navigate("/second-order");
    }
  };

  return (
    <>
     <div className="firstOrder-backgroung-imagee"></div>

    <div className="form-container d-flex align-items-center justify-content-center vh-100">
      <div className="form bg-white p-4 rounded border border-primary">
        <header className="mb-4 text-center heading-text">
          Your Preferred Color and Quantity
        </header>
        <form>
          <div className="mb-3">
            <label htmlFor="color" className="form-label label-text">
              Model Id
            </label>
            <input
              type="text"
              className="form-control"
              id="color"
              name="color"
              value={firstOrderInfo.productId}
              onChange={handleInputChange}
            />
            {errors.productId && (
              <div className="text-danger">{errors.productId}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="colorPicker" className="form-label label-text">
              Choose your preferred Color
            </label>
            <input
              type="color"
              className="form-control form-control-sm"
              id="colorPicker"
              name="color"
              onChange={handleInputChange}
              />
            {errors.color && <div className="text-danger">{errors.color}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label label-text">
              Enter your required quantity
            </label>
            <input
              type="number"
              step={1}
              min={1}
              className="form-control"
              id="quantity"
              name="quantity"
              onChange={handleInputChange}
              />
            {errors.quantity && (
              <div className="text-danger">{errors.quantity}</div>
            )}
          </div>

          <div className="text-center signup-btn">
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
