import React from "react";
import "./style/footer.css";
const Footer = () => {
  return (
    <footer className="footerBody">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xs-12 col">
            <h4>Top Products</h4>
            <ul>
              <li>
                <a href="#">Managed Website</a>
              </li>
              <li>
                <a href="#">Manage Reputation</a>
              </li>
              <li>
                <a href="#">Power Tools</a>
              </li>
              <li>
                <a href="#">Marketing Service</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xs-12 col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Brand Assets</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xs-12 col">
            <h4>Features</h4>
            <ul>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Brand Assets</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xs-12 col">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Guides</a>
              </li>
              <li>
                <a href="#">Research</a>
              </li>
              <li>
                <a href="#">Experts</a>
              </li>
              <li>
                <a href="#">Agencies</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-4 col-lg-12 col">
            <h4>Newsletter</h4>
            <p>You can trust us. we only send promo offers,</p>
            <form>
                <input className="footerForm" type="text" placeholder="Your Email Address" />
                <button>Submit</button>
            </form>
          </div>
          <div className="social col-xl-12">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-dribbble"></i></a>
          <a href="#"><i className="fab fa-behance"></i></a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
