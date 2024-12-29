import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Author from '../../pages/Author';
import Skeleton from '../UI/Skeleton';

const APIauthorbios = () => {
    const [nft, setNft] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const fetchAPI = async () => {
        setLoading(true);
        const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${id}`);

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
                <div>
                    <section id="profile_banner" ></section>
                    <section aria-label='section'>
                        <div className='container'>
                            <div className='row'>
                                <div className="col-md-12">
                                    <div className='d_profile de-flex'>
                                        <div className='de-flex-col'>
                                            <div className='profile_avatar'>
                                                <Skeleton width={'150px'} height={'150px'} borderRadius={'50%'} />
                                                <i className="fa fa-check"></i>
                                                <div className="profile_name">
                                                    <h4>
                                                        <Skeleton width="200px" />
                                                        <span className="profile_username">
                                                            <Skeleton width="100px" />
                                                        </span>
                                                        <span id="wallet" className="profile_wallet">
                                                            <Skeleton width="350px" />
                                                        </span>
                                                        <span id='btn_copy'>
                                                            <Skeleton width="50px" />
                                                        </span>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='profile_follow de-flex'>
                                            <div className='de-flex-col'>
                                                <div className='profile_follower'>
                                                    <Skeleton width="250px" />
                                                </div>
                                                <span><Skeleton width="125px" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {new Array(8).fill(8).map((_, index) => (
                                    <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                        <Skeleton width={"100%"} height={"400px"} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            ) : (<Author nft={nft} />)}
        </>
    )
}

export default APIauthorbios