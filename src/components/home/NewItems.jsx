import React from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Countdown from "./Countdown";

const NewItems = ({ nft }) => {
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

  const renderNft = nft.map((collection, index) => {
    // const { hours, minutes, seconds } = timeLeft[index] || { hours: 0, minutes: 0, seconds: 0 };

    return (
      <div className="newItem__wrap" key={collection.id}>
        <div className="nft__item">
          <div className="author_list_pp">
            <Link
              to={`/author/${collection.authorId}`}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Creator: Monica Lucas"
            >
              <img className="lazy" src={collection.authorImage} alt="" />
              <i className="fa fa-check"></i>
            </Link>
          </div>

          <div className="de_countdown">
            <Countdown expiryDate={collection.expiryDate} />
          </div>

          <div className="nft__item_wrap">
            {/* <div className="nft__item_extra">
              <div className="nft__item_buttons">
                <button>Buy Now</button>
                <div className="nft__item_share">
                  <h4>Share</h4>
                  <a href="" target="_blank" rel="noreferrer">
                    <i className="fa fa-facebook fa-lg"></i>
                  </a>
                  <a href="" target="_blank" rel="noreferrer">
                    <i className="fa fa-twitter fa-lg"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope fa-lg"></i>
                  </a>
                </div>
              </div>
            </div> */}

            <Link to={`/item-details/${collection.nftId}`}>
              <img
                src={collection.nftImage}
                className="lazy nft__item_preview"
                alt=""
              />
            </Link>
          </div>

          <div className="nft__item_info">
            <Link to={`/item-details/${collection.nftId}`}>
              <h4>{collection.title}</h4>
            </Link>
            <div className="nft__item_price">{collection.price} ETH</div>
            <div className="nft__item_like">
              <i className="fa fa-heart"></i>
              <span>{collection.likes}</span>
            </div>
          </div>

        </div>
      </div>);
  });

  return (
    <Slider {...slideSetting}>
      {renderNft}
    </Slider>
  )
};

export default NewItems;
