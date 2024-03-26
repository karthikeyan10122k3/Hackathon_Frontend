import React from "react";
import "../../assets/Style/HomeScreen/testimonials.css";
import { Header, Footer } from "../../assets/Layout/Navbar";

const Testimonials = () => {
  return (
    <>
      <Header />
      <div>
        <section className="mt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="testimonial testimonial-bg mb-2 p-4">
                  <p className="mb-0">
                    "The quality of textiles provided by this company is
                    exceptional. I am truly impressed with their dedication to
                    excellence."
                  </p>
                  <h4 className="mt-3">John Doe</h4>
                  <p>Textile Designer</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="testimonial testimonial-bg mb-2 p-4">
                  <p className="mb-0">
                    "I have been consistently amazed by the variety and quality
                    of textiles offered by this company. Highly recommended!"
                  </p>
                  <h4 className="mt-3">Jane Smith</h4>
                  <p>Textile Buyer</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="testimonial testimonial-bg mb-2 p-4">
                  <p className="mb-0">
                    "The textiles provided by this company have greatly improved
                    the appeal and durability of our products. Excellent
                    service!"
                  </p>
                  <h4 className="mt-3">David Johnson</h4>
                  <p>Textile Manufacturer</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="testimonial testimonial-bg mb-2 p-4">
                  <p className="mb-0">
                    "We have been sourcing textiles from this company for years,
                    and they consistently exceed our expectations. Top-notch
                    quality!"
                  </p>
                  <h4 className="mt-3">Emily Brown</h4>
                  <p>Textile Retailer</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="testimonial testimonial-bg mb-2 p-4">
                  <p className="mb-0">
                    "The textiles supplied by this company have significantly
                    enhanced the appeal and comfort of our clothing line. Truly
                    remarkable!"
                  </p>
                  <h4 className="mt-3">Michael White</h4>
                  <p>Textile Fashion Designer</p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="testimonial testimonial-bg mb-2 p-4">
                  <p className="mb-0">
                    "I am impressed with the professionalism and quality of
                    textiles provided by this company. They have become our
                    go-to supplier."
                  </p>
                  <h4 className="mt-3">Sarah Green</h4>
                  <p>Textile Wholesaler</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
