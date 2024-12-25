import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";

const TopSellers = ({ nft }) => {
  return (
    <div className="col-md-12">
      <ol className="author_list">
        {nft.map((collection, index) => (
          <li key={collection.id}>
            <div className="author_list_pp">
              <Link to={`/author/${collection.authorId}`}>
                <img
                  className="lazy pp-author"
                  src={collection.authorImage}
                  alt=""
                />
                <i className="fa fa-check"></i>
              </Link>
            </div>
            <div className="author_list_info">
              <Link to={`/author/${collection.authorId}`}>{collection.authorName}</Link>
              <span>{collection.price} ETH</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TopSellers;
