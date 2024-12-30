import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const BrowseByCategory = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="section-category" className="no-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2 data-aos="fade-up">Browse by category</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link to="/explore" className="icon-box style-2 rounded">
              <i className="fa fa-image" data-aos="fade-right"></i>
              <span data-aos="fade-right">Art</span>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link to="/explore" className="icon-box style-2 rounded">
              <i className="fa fa-music" data-aos="fade-right"></i>
              <span data-aos="fade-right">Music</span>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link to="/explore" className="icon-box style-2 rounded">
              <i className="fa fa-search" data-aos="fade-right"></i>
              <span data-aos="fade-right">Domain Names</span>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link to="/explore" className="icon-box style-2 rounded">
              <i className="fa fa-globe" data-aos="fade-right"></i>
              <span data-aos="fade-right">Virtual Worlds</span>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link to="/explore" className="icon-box style-2 rounded">
              <i className="fa fa-vcard" data-aos="fade-right"></i>
              <span data-aos="fade-right">Trading Cards</span>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link to="/explore" className="icon-box style-2 rounded">
              <i className="fa fa-th" data-aos="fade-right"></i>
              <span data-aos="fade-right">Collectibles</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
