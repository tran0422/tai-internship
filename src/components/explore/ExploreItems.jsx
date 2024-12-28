import React, { useState } from "react";
import { Link } from "react-router-dom";
// import AuthorImage from "../../images/author_thumbnail.jpg";
// import nftImage from "../../images/nftImage.jpg";
import Countdown from '../home/Countdown';

const ExploreItems = ({ nft }) => {
  const [visibleItems, setVisibleItems] = useState(8);

  const loadmore = () => {
    setVisibleItems((preVisibleItems) => preVisibleItems + 4);
  }

  const ifLoadMore = visibleItems < nft.length;

  const renderNft = nft.slice(0, visibleItems).map((collection, index) => {

    return (

      // {<div>
      //   <select id="filter-items" defaultValue="">
      //     <option value="">Default</option>
      //     <option value="price_low_to_high">Price, Low to High</option>
      //     <option value="price_high_to_low">Price, High to Low</option>
      //     <option value="likes_high_to_low">Most liked</option>
      //   </select>
      // </div>}

      <div key={collection.id} className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
        style={{ display: "block", backgroundSize: "cover" }}>
        <div className="nft__item">
          <div className="author_list_pp">
            <Link
              to={`/author/${collection.authorId}`}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
            >
              <img className="lazy" src={collection.authorImage} alt="" />
              <i className="fa fa-check"></i>
            </Link>
          </div>

          <div className="de_countdown">
            <Countdown expiryDate={collection.expiryDate} />
          </div>

          <div className="nft__item_wrap">
            <div className="nft__item_extra">
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
            </div>

            <Link to="/item-details">
              <img src={collection.nftImage} className="lazy nft__item_preview" alt="" />
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
      </div>
    );
  });

  // {
  //   {
      // new Array(8).fill(0).map((_, index) => (
      // ))
  //   }
  // }


  return (
    <>
      {renderNft}

      {ifLoadMore && (
        <div className="col-md-12 text-center">
          <Link to="" id="loadmore" className="btn-main lead" onClick={loadmore}>
            Load more
          </Link>
        </div>
      )}
    </>
  );

};

export default ExploreItems;
