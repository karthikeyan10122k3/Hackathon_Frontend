import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/Style/Order/order.css";

export default function SecondOrderComponent() {
  const navigate = useNavigate();
  const [secondOrderInfo, setSecondOrderInfo] = useState({
    cocoon: "",
    reeler: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSecondOrderInfo({ ...secondOrderInfo, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!secondOrderInfo.cocoon) {
      newErrors.cocoon = "Cocoon type is required";
    }
    if (!secondOrderInfo.reeler) {
      newErrors.reeler = "Reeler is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      navigate("/third-order");
    }
  };

  return (
    <>
    <div className="secondOrder-backgroung-image"></div>

    <div className="form-container d-flex align-items-center justify-content-center vh-100"  >
  <div className="form bg-white p-4 rounded border border-primary">
    <header className="mb-4 text-center heading-text">
      Your Preferred Cocoon and Reelers
    </header>
    <form>
      <div className="mb-3">
        <label htmlFor="cocoon" className="form-label label-text">
          Cocoon Type
        </label>
        <select
          className="form-control"
          id="cocoon"
          name="cocoon"
          value={secondOrderInfo.cocoon}
          onChange={handleInputChange}
        >
          <option value="">Select Cocoon</option>
          <option value="Karnataka - Mulberry Cocoon">
            Karnataka - Mulberry Cocoon
          </option>
          <option value="Tamil Nadu - Mulberry Cocoon">
            Tamil Nadu - Mulberry Cocoon
          </option>
          <option value="Andhra Pradesh - Mulberry Cocoon">
            Andhra Pradesh - Mulberry Cocoon
          </option>
          <option value="West Bengal - Tussar Cocoon, Mulberry Cocoon">
            West Bengal - Tussar Cocoon, Mulberry Cocoon
          </option>
          <option value="Jammu and Kashmir - Eri Cocoon, Mulberry Cocoon">
            Jammu and Kashmir - Eri Cocoon, Mulberry Cocoon
          </option>
          <option value="Assam - Muga Cocoon">Assam - Muga Cocoon</option>
        </select>
        {errors.cocoon && (
          <div className="text-danger">{errors.cocoon}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="reeler" className="form-label label-text">
          Reeler Type
        </label>
        <select
          className="form-control"
          id="reeler"
          name="reeler"
          value={secondOrderInfo.reeler}
          onChange={handleInputChange}
        >
          <option value="">Select Reeler</option>
          <option value="Karnataka - Silk Reeling Industry">
            Karnataka - Silk Reeling Industry
          </option>
          <option value="Tamil Nadu - Silk Reeling Industry">
            Tamil Nadu - Silk Reeling Industry
          </option>
          <option value="West Bengal - Silk Reeling Industry">
            West Bengal - Silk Reeling Industry
          </option>
          <option value="Assam - Silk Reeling Industry">
            Assam - Silk Reeling Industry
          </option>
          <option value="Andhra Pradesh - Silk Reeling Industry">
            Andhra Pradesh - Silk Reeling Industry
          </option>
          <option value="Jammu and Kashmir - Pashmina Wool Industry">
            Jammu and Kashmir - Pashmina Wool Industry
          </option>
        </select>
        {errors.reeler && (
          <div className="text-danger">{errors.reeler}</div>
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
