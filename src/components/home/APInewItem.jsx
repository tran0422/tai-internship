import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewItems from './NewItems';
import AOS from "aos";
import "aos/dist/aos.css";
import Skeleton from '../UI/Skeleton';

const APInewItem = () => {
    const [nft, setNft] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init();
    }, []);

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
                                <h2 data-aos="fade-up">New Items</h2>
                                <div className="small-border bg-color-2"></div>
                            </div>
                        </div>

                        {loading ? (
                            <Slider>
                                {new Array(4).fill(4).map((_, index) => (
                                    <div className="nft__item" key={index}>
                                        <div className="author_list_pp" >
                                            <Skeleton width={'50px'} height={'50px'} borderRadius={'50%'} />
                                            <i className="fa fa-check"></i>
                                        </div>

                                        <div className='de_countdown nocountdownborder'>
                                            <Skeleton width={'114px'} height={'32px'} />
                                        </div>

                                        <div className="nft__item_wrap">
                                            <Skeleton width={'268px'} height={'268px'} />
                                        </div>

                                        <div className="nft__item_info">
                                            <div>
                                                <Skeleton width={'268px'} height={'18px'} />
                                            </div>
                                            <div className='nft__item_price'>
                                                <Skeleton width={'150px'} height={'16px'} />
                                            </div>
                                        </div>

                                        <div className="nft__item_like">
                                            <Skeleton width={'30px'} height={'16px'} />
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