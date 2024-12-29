import React, { useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link } from "react-router-dom";
// import AuthorImage from "../images/author_thumbnail.jpg";

const Author = ({ nft }) => {
  const [isFollowing, setIsFollowing] = useState({});

  const toggleFollow = (toggleId) => {
    setIsFollowing((prevStat) => ({
      ...prevStat, [toggleId]: !prevStat[toggleId],
    }));
  };

  const renderNft = nft.map((collection, index) => {
    const clickedFollower = isFollowing[collection.toggleId] || false;
    const newFollower = collection.followers + (clickedFollower ? 1 : 0);

    return (
      <div key={collection.id} id="wrapper">
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>

          <section
            id="profile_banner"
            aria-label="section"
            className="text-light"
            data-bgimage="url(images/author_banner.jpg) top"
            style={{ background: `url(${AuthorBanner}) top` }}
          ></section>

          <section aria-label="section">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="d_profile de-flex">
                    <div className="de-flex-col">
                      <div className="profile_avatar">
                        <img src={collection.authorImage} alt="" />

                        <i className="fa fa-check"></i>
                        <div className="profile_name">
                          <h4>
                            {collection.authorName}
                            <span className="profile_username">@{collection.tag}</span>
                            <span id="wallet" className="profile_wallet">
                              {collection.address}
                            </span>
                            <button id="btn_copy" title="Copy Text">
                              Copy
                            </button>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="profile_follow de-flex">
                      <div className="de-flex-col">
                        <div className="profile_follower">{newFollower} followers</div>
                        <Link to="#" className="btn-main" onClick={() => toggleFollow(collection.toggleId)}>
                          {clickedFollower ? 'Unfollow' : 'Follow'}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="de_tab tab_simple">
                    <AuthorItems collection={collection} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  });

  return (
    <>
      {renderNft}
    </>
  )
};

export default Author;
