import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ItemDetails from '../../pages/ItemDetails';
import Skeleton from '../UI/Skeleton';

const APIitemDetails = () => {
    const [nft, setNft] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const fetchAPI = async () => {
        setLoading(true);
        const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${id}`);

        setNft([data]);
        setLoading(false);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchAPI();
    }, [id]);

    return (
        <>
            {loading ? (
                <>
                    <section className='mt90' aria-label='section' >
                        <div className='container'>
                            <div className='row'>
                                <div className="col-md-6 text-center">
                                    <Skeleton width="100%" height="506px" />
                                </div>
                                <div className="col-md-6">
                                    <div className="item_info">
                                        <Skeleton width="300px" height="40px" />
                                        <div className="item_info_counts">
                                            <Skeleton width="80px" height="30px" />
                                            <Skeleton width="80px" height="30px" />
                                        </div>
                                        <Skeleton width="100%" height="80px" />
                                        <div className="d-flex flex-row">
                                            <div className="mr40">
                                                <h6>Owner</h6>
                                                <div className="item_author">
                                                    <div className="author_list_pp">
                                                        <Skeleton
                                                            width="50px"
                                                            height="50px"
                                                            borderRadius="50%"
                                                        />
                                                        <i className="fa fa-check"></i>
                                                    </div>
                                                    <div className="author_list_info">
                                                        <Skeleton width="125px" height="20px" />
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
                                                        <Skeleton
                                                            width="50px"
                                                            height="50px"
                                                            borderRadius="50%"
                                                        />
                                                        <i className="fa fa-check"></i>
                                                    </div>
                                                    <div className="author_list_info">
                                                        <Skeleton width="125px" height="20px" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="spacer-40"></div>
                                            <h6>Price</h6>
                                            <div className="nft-item-price">
                                                <Skeleton width="75px" height="20px" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ) : (<ItemDetails nft={nft} />)}
        </>
    )
}

export default APIitemDetails