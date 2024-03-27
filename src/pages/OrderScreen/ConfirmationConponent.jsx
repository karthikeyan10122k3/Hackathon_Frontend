import { useEffect, useState } from "react";
import { SHA256 } from "crypto-js";
import { useNavigate } from "react-router-dom";

export default function ConfirmationComponent() {
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("firstOrderInfo");
    console.log(storedData);
    if (storedData) {
      const hash = SHA256(storedData).toString();
      setOrderId(hash);
    }
  }, []);

  return (
    <div className="form-container d-flex align-items-center justify-content-center vh-100">
      <div className="confirmation-messsage">
        <h2 className="mb-4 text-center text-success">
          Your Order has been Successfully placed <br></br>
          Order ID :<h5 className="mb-4 text-center text-dark">{orderId}</h5>
        </h2>
      </div>
    </div>
  );
}
