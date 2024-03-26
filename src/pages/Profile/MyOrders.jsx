import { Header, Footer } from "../../assets/Layout/Navbar";

export default function MyOrders() {
  return (
    <div>
      <Header loggedIn={true}/>
      <div className="container card-image my-5 ">
        <div class="card" style={{ width: "18rem" }}>
          <img
            src="src\assets\Images\Products\S1.jpg"
            class="card-img-top card-image-individual"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">
              <span style={{ fontWeight: "bold" }}>Model Id:</span> 1
            </h5>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Color:</span> red
            </p>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Quantity:</span> 2
            </p>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Cocoon Type: </span>Tamil
              Nadu - Mulberry Cocoon
            </p>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Reeler Type:</span> Karnataka
              - Silk Reeling Industry
            </p>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Zari Provider:</span> Suraj
              Zari Art
            </p>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Type of Weaving:</span> Hand
              Loomed
            </p>
            <div className="text-center">
              <button className="btn btn-danger btn-block mb-3 text ">
                Remove
              </button>
            </div>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img
            src="src\assets\Images\Products\S2.jpg"
            class="card-img-top card-image-individual"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">
              <span style={{ fontWeight: "bold" }}>Model Id:</span> 3
            </h5>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Color: </span>Yellow
            </p>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Quantity:</span> 3
            </p>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Cocoon Type:</span> Andhra
              Pradesh - Mulberry Cocoon
            </p>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Reeler Type:</span> Andhra
              Pradesh - Silk Reeling Industry
            </p>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Zari Provider: </span>Balaji
              Zari Udyog
            </p>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Type of Weaving:</span>{" "}
              Machine Loomed
            </p>
            <div className="text-center">
              <button className="btn btn-danger btn-block mb-3 text ">
                Remove
              </button>
            </div>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img
            src="src\assets\Images\Products\S3.jpg"
            class="card-img-top card-image-individual"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">
              <span style={{ fontWeight: "bold" }}>Model Id:</span> 7
            </h5>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Color:</span> Violet
            </p>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Quantity:</span> 1
            </p>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Cocoon Type:</span> Jammu and
              Kashmir - Eri Cocoon, Mulberry Cocoon
            </p>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Reeler Type:</span> Tamil
              Nadu - Silk Reeling Industry
            </p>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Zari Provider:</span> Anand
              Zari
            </p>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Type of Weaving:</span> Hand
              Loomed
            </p>
            <div className="text-center">
              <button className="btn btn-danger btn-block mb-3 text ">
                Remove
              </button>
            </div>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img
            src="src\assets\Images\Products\S10.jpg"
            class="card-img-top card-image-individual"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">
              <span style={{ fontWeight: "bold" }}>Model Id:</span> 3
            </h5>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Color: </span>Yellow
            </p>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Quantity:</span> 3
            </p>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Cocoon Type:</span> Andhra
              Pradesh - Mulberry Cocoon
            </p>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Reeler Type:</span> Andhra
              Pradesh - Silk Reeling Industry
            </p>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Zari Provider: </span>Balaji
              Zari Udyog
            </p>
            <p class="card-text">
              <span style={{ fontWeight: "bold" }}>Type of Weaving:</span>{" "}
              Machine Loomed
            </p>
            <div className="text-center">
              <button className="btn btn-danger btn-block mb-3 text ">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
