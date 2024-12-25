import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const calcTimeLeft = (expiryDate) => {
    const now = new Date().getTime();
    const timeLeft = expiryDate - now;

    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { hours, minutes, seconds }
  }

  const [timeLeft, setTimeLeft] = useState([]);

  useEffect(() => {
    const initialTimeLeft = nft.map((item) => calcTimeLeft(item.expiryDate));
    setTimeLeft(initialTimeLeft);

    const intervalnumber = setInterval(() => {
      const updateTimes = nft.map((item) => calcTimeLeft(item.expiryDate))
      setTimeLeft(updateTimes);
    }, 1000);

    return () => clearInterval(intervalnumber);
  }, [nft]);

  const renderNft = nft.map((collection, index) => {
    const { hours, minutes, seconds } = timeLeft[index] || { hours: 0, minutes: 0, seconds: 0 }

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
          <div className="de_countdown">{collection.expiryDate ? `${hours}H ${minutes}M ${seconds}S` : 'Expired'}</div>

          <div className="nft__item_wrap">
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
