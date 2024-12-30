import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TopSellers from './TopSellers';
import AOS from "aos";
import "aos/dist/aos.css";
import Skeleton from '../UI/Skeleton';

const APItopSell = () => {
    const [nft, setNft] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init();
    }, []);

    const fetchAPI = async () => {
        setLoading(true);

        const { data } = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers');

        setNft(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    return (
        <>
            <section id="section-popular" className="pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2 data-aos="fade-up">Top Sellers</h2>
                                <div className="small-border bg-color-2"></div>
                            </div>
                        </div>

                        {loading ? (
                            <ol className="author_list">
                                {new Array(12).fill(12).map((_, index) => (
                                    <li key={index}>
                                        <div className="author_list_pp">
                                            <Skeleton width={'50px'} height={'50px'} borderRadius={'50%'} />
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <div className="author_list_info">
                                            <div>
                                                <Skeleton width={'110px'} height={'20px'} />
                                            </div>
                                            <div>
                                                <Skeleton width={'110px'} height={'20px'} />
                                            </div>
                                        </div>
                                    </li>))}
                            </ol>) : (<TopSellers nft={nft} />)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default APItopSell