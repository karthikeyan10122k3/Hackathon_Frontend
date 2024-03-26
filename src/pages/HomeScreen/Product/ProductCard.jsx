import { Link } from "react-router-dom";
import "../../../assets/Style/Products/product.css";

export default function ProductCard({ productInfo }) {
  return (
    <div className="card text-decoration-none" style={{ width: "18rem" }}>
      <Link to={`/order-page/${productInfo.productId}`}>
        <div className="card-image-individual">
          <img src={productInfo.imageUrl} className="card-img-top" />
        </div>
      </Link>
      <div className="card-body">
        <h5 className="card-title ">{productInfo.model}</h5>
        <button className="btn btn-success btn-block mb-3">Add to Cart</button>
      </div>
    </div>
  );
}
