import { Header, Footer } from "../../assets/Layout/Navbar";

const Features = () => {
  return (
    <>
      <Header />
      <div className="container mt-5 vh-100 bg-light">
        <h2 className="text-center my-4">Features in the Textile Industry</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Real-time Inventory Management</h3>
                <p className="card-text">
                  Track inventory levels, manage stock, and receive
                  notifications for low stock levels in real-time.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Customized Product Visualization</h3>
                <p className="card-text">
                  Allow customers to customize fabric designs, colors, and
                  patterns in real-time for a personalized experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">AI-Powered Quality Control</h3>
                <p className="card-text">
                  Implement AI algorithms for automated quality assessment,
                  analyzing fabric defects, patterns, and textures.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Supply Chain Transparency</h3>
                <p className="card-text">
                  Create platforms for customers to trace the origin and journey
                  of textile products using blockchain technology.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Virtual Showrooms and AR</h3>
                <p className="card-text">
                  Develop virtual showrooms and AR experiences for customers to
                  visualize textile products in their living spaces.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Smart Textiles</h3>
                <p className="card-text">
                  Integrate technology into textiles for functionalities such as
                  moisture-wicking, temperature regulation, and UV protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Features;
