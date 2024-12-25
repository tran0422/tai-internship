import React from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HotCollections = ({ nft }) => {
  const slideSetting = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    arrow: true,
    centerMode: false,
    focusOnSelect: false,
    responsive: [{
      breakpoint: 1024,
      slideSetting: { slideToShow: 3, slideToScroll: 1 }
    },
    {
      breakpoint: 768,
      slideSetting: { slideToShow: 1, slideToScroll: 1 }
    }]
  };

  return (
    <Slider {...slideSetting}>
      {nft.map((collection, index) => (
        <div key={collection.id}>
          <div className="nft_coll">
            <div className="nft_wrap">
              <Link to={`/item-details/${collection.nftId}`}>
                <img src={collection.nftImage} className="lazy img-fluid" alt="" />
              </Link>
            </div>
            <div className="nft_coll_pp">
              <Link to={`/author/${collection.authorId}`}>
                <img className="lazy pp-coll" src={collection.authorImage} alt="" />
              </Link>
              <i className="fa fa-check"></i>
            </div>
            <div className="nft_coll_info">
              <Link to="/explore">
                <h4>{collection.title}</h4>
              </Link>
              <span>ERC-{collection.code}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HotCollections;
