import { useEffect, useState } from "react";
import { SHA256 } from "crypto-js";
import { useNavigate } from "react-router-dom";

export default function ConfirmationComponent() {
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const firstOrderInfo = localStorage.getItem("firstOrderInfo");
    const secondOrderInfo = localStorage.getItem("secondOrderInfo");
    const thirdOrderInfo = localStorage.getItem("thirdOrderInfo" );
    const storedData = firstOrderInfo + secondOrderInfo + thirdOrderInfo
    if (storedData) {
      const hash = SHA256(storedData).toString();
      setOrderId(hash);
    }
  }, []);

  return (
    <>
      <div className="form-container d-flex align-items-center justify-content-center vh-100">
        <div className="confirmation-messsage">
          <h2 className="mb-4 text-center text-success">
            Your Order has been Successfully placed <br></br>
            Order ID :<h5 className="mb-4 text-center text-dark">{orderId}</h5>
          </h2>
          <div className="text-center">
            <button
              onClick={() =>
                navigate("/products", { state: { loggedIn: true } })
              }
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Go to Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
