import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TopSellers from './TopSellers';

const APItopSell = () => {
    const [nft, setNft] = useState([]);
    const [loading, setLoading] = useState(true);

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
                                <h2>Top Sellers</h2>
                                <div className="small-border bg-color-2"></div>
                            </div>
                        </div>

                        {loading ? (
                            <ol className="author_list">
                                {new Array(12).fill(12).map((_, index) => (
                                    <li key={index}>
                                        <div className="author_list_pp">
                                            <div className='skeleton-topAuthorImg skeleton-box'></div>
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <div className="author_list_info">
                                            <div className="skeleton-topTitle skeleton-box"></div>
                                        </div>
                                        <div className="skeleton-topPrice skeleton-box">
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