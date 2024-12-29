import React, { useEffect } from "react";
import EthImage from "../images/ethereum.svg";
import { Link } from "react-router-dom";
// import AuthorImage from "../images/author_thumbnail.jpg";
// import nftImage from "../images/nftImage.jpg";

const ItemDetails = ({ nft }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderNft = nft.map((collection, index) => (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
                <img
                  src={collection.nftImage}
                  className="img-fluid img-rounded mb-sm-30 nft-image"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <h2>{collection.title} #{collection.tag}</h2>

                  <div className="item_info_counts">
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>
                      {collection.views}
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                      {collection.likes}
                    </div>
                  </div>
                  <p>
                    {collection.description}
                  </p>

                  <div className="d-flex flex-row">
                    <div className="mr40">
                      <h6>Owner</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${collection.ownerId}`}>
                            <img className="lazy" src={collection.ownerImage} alt="" />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${collection.ownerId}`}>{collection.ownerName}</Link>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  
                  <div className="de_tab tab_simple">
                    <div className="de_tab_content">
                      <h6>Creator</h6>
                      <div className="item_author">
                        <div className="author_list_pp">
                          <Link to={`/author/${collection.creatorId}`}>
                            <img className="lazy" src={collection.creatorImage} alt="" />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={`/author/${collection.creatorId}`}>{collection.creatorId}</Link>
                        </div>
                      </div>
                    </div>
                    <div className="spacer-40"></div>
                    <h6>Price</h6>
                    <div className="nft-item-price">
                      <img src={EthImage} alt="" />
                      <span>{collection.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  ));

  return (
    <>
      {renderNft}
    </>
  )
};

export default ItemDetails;
