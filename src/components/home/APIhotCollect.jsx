import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HotCollections from './HotCollections';
import AOS from "aos";
import "aos/dist/aos.css";
import Skeleton from '../UI/Skeleton';

const APIhotCollect = () => {
    const [nft, setNft] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init();
    }, []);

    const fetchAPI = async () => {
        setLoading(true);

        const { data } = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections');

        setNft(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    return (
        <>
            <section id="section-collections" className="no-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2 data-aos="fade-up">Hot Collections</h2>
                                <div className="small-border bg-color-2"></div>
                            </div>
                        </div>

                        {loading ? (
                            <Slider>
                                {new Array(4).fill(4).map((_, index) => (
                                    <div className="nft_coll" key={index}>
                                        <div className="nft_wrap">
                                            <Skeleton width={'100%'} height={'200px'} />
                                        </div>
                                        <div className="nft_coll_pp margintop0">
                                            <Skeleton width={'50px'} height={'50px'} borderRadius={'50%'} />
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <div className="nft_coll_info">
                                            <Skeleton width={'100px'} height={'20px'} />
                                            <br />
                                            <Skeleton width={'50px'} height={'20px'} />
                                        </div>
                                    </div>
                                ))}
                            </Slider >)
                            :
                            (<HotCollections nft={nft} />)}
                    </div>
                </div>
            </section>
        </>
    );
}

export default APIhotCollect