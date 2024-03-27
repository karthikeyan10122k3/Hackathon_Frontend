import "../../assets/Style/HomeScreen/home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Content() {
  return (
    <div className="home-content">
      <HeroSectionComponent />
      <CarouselComponent />
      <TrustedComponent />
    </div>
  );
}

function HeroSectionComponent() {
  const navigate = useNavigate();
  return (
    <div className="hero-section">
      <div className="container py-5 vh-100 d-flex align-items-center ">
        <div className="row align-items-center">
          <div className="col-lg-6 ">
            <h3 className="display-5 fw-bold text-body-emphasis lh-1 mb-15">
              Discover Colossus Textile
            </h3>
            <p className="lead">
              Colossus Textile, we are more than just a fabric company – we are
              purveyors of fine craftsmanship and impeccable style. With a
              legacy of excellence spanning decades, we blend tradition with
              innovation to deliver textiles that inspire and enchant.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                onClick={() => navigate("/register", { state: { register: "signup" } })}
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Get Strated
              </button>
              <button
                onClick={() => navigate("/products")}
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                View Products
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="src\assets\Images\HomeScreen\main.avif"
              className="d-block mx-lg-auto img-fluid"
              alt="Hero Image"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CarouselComponent() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide position-relative "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          bg-transparent
          d-inline-block
          border
          border-dark
          p-50
        >
          <img
            src="src\assets\Images\HomeScreen\carousel-image-1.webp"
            className="d-block w-100 carousel-img"
            style={{ maxHeight: "100vh", maxWidth: "100%", objectFit: "cover" }}
            alt="carousel-image-1"
          />
          <div className="carousel-caption text-dark position-absolute top-50 start-50 translate-middle text-center carousel-text">
            <h1 className="carousel-text-header">About Textile</h1>
            <p
              className="carousel-text-paragraph"
              style={{ maxWidth: "100%", margin: "0 auto" }}
            >
              Textile is an umbrella term that includes various fiber-based
              materials, including fibers, yarns, filaments, threads, different
              fabric types, etc. At first, the word "textiles" only referred to
              woven fabrics.However, weaving is not the only manufacturing
              method, and many other methods were later developed to form
              textile structures based on their intended use. Knitting and
              non-woven are other popular types of fabric manufacturing. In the
              contemporary world, textiles satisfy the material needs for
              versatile applications, from simple daily clothing to bulletproof
              jackets, spacesuits, and doctor's gowns
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="src\assets\Images\HomeScreen\carousel-image-2.jpg"
            className="d-block w-100 carousel-img"
            style={{ maxHeight: "100vh", maxWidth: "100%", objectFit: "cover" }}
            alt="carousel-image-2"
          />
          <div className="carousel-caption text-dark position-absolute top-50 start-50 translate-middle text-center carousel-text">
            <h1 className="carousel-text-header">History</h1>
            <p
              className="carousel-text-paragraph"
              style={{ maxWidth: "100%", margin: "0 " }}
            >
              Textiles themselves are too fragile to survive across millennia;
              the tools used for spinning and weaving make up most of the
              prehistoric evidence for textile work. The earliest tool for
              spinning was the spindle, to which a whorl was eventually added.
              The weight of the whorl improved the thickness and twist of the
              spun thread. Later, the spinning wheel was invented. Historians
              are unsure where; some say China, others India. The precursors of
              today's textiles include leaves, barks, fur pelts, and felted
              cloths The Banton Burial Cloth, the oldest existing example of
              warp ikat in Southeast Asia, is displayed at the National Museum
              of the Philippines. The cloth was most likely made by the native
              Asian people of northwest Romblon.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="src\assets\Images\HomeScreen\carousel-image-3.jpg"
            className="d-block w-100 carousel-img"
            style={{ maxHeight: "100vh", maxWidth: "100%", objectFit: "cover" }}
            alt="carousel-image-1"
          />
          <div className="carousel-caption text-dark position-absolute top-50 start-50 translate-middle text-center">
            <h1 className="carousel-text-header">Significance</h1>
            <p
              className="carousel-text-paragraph"
              style={{ minwidth: "100%", margin: "auto" }}
            >
              Textiles are all around us. The textile is a component of basic
              needs like food and shelter. Textiles are everywhere in our lives,
              from bath towels to space suits. Textiles help humans by
              comforting, protecting, and extending their lives. Textiles meet
              our clothing needs, keeping us warm in the winter and cool in the
              summer. There are several applications for textiles, such as
              medical textiles, intelligent textiles, and automotive textiles.
              All of them contribute to the well-being of humans
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

function TrustedComponent() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="trusted-section bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="mb-4">
              Trusted by Thousands of Satisfied Customers Worldwide
            </h2>
            <p className="lead">
              Our commitment to excellence has earned us the trust of thousands
              of customers around the globe.
            </p>
            <p>
              With a proven track record of delivering top-notch products and
              exceptional service, we strive to exceed your expectations at
              every turn.
            </p>
            <div className="trusted-button">
              <Link
                to="/customer"
                className="btn btn-primary mx-4"
                onClick={scrollToTop}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
