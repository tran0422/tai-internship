import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewItems from './NewItems';

const APInewItem = () => {
    const [nft, setNft] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAPI = async () => {
        setLoading(true);

        const { data } = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems');

        setNft(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    return (
        <>
            <section id="section-items" className="no-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>New Items</h2>
                                <div className="small-border bg-color-2"></div>
                            </div>
                        </div>

                        {loading ? (
                            <Slider>
                                {new Array(4).fill(4).map((_, index) => (
                                    <div className="nft__item" key={index}>
                                        <div className="author_list_pp" >
                                            <div className="skeleton-newImg skeleton-box"></div>
                                            <i className="fa fa-check"></i>
                                        </div>

                                        <div className="nft__item_wrap">
                                            <div className="skeleton-newAuthorImg skeleton-box"></div>
                                        </div>

                                        <div className="nft__item_info skeleton-newDF">
                                            <a href="">
                                                <div className="skeleton-newName skeleton-box"></div>
                                            </a>
                                            <div className="skeleton-newTitle skeleton-box" ></div>
                                        </div>

                                        <div className="nft__item_like">
                                            <div className="skeleton-newLikes skeleton-box" ></div>
                                        </div>
                                    </div>
                                ))}
                            </Slider >)
                            :
                            (<NewItems nft={nft} />)
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default APInewItem