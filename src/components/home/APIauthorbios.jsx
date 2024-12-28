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
        fetchAPI();
    }, [id]);

    return (
        <>
            {true ? (
                <div className="no-bottom no-top">
                    <div id="top"></div>
                            <section
                              id="profile_banner"
                              aria-label="section"
                              className="text-light"
                              data-bgimage="url(images/author_banner.jpg) top"
                              style={{ background: `url("") top` }}
                            ></section>
                    <div className='row'>
                        {new Array(8).fill(8).map((_, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <Skeleton width={"100%"} height={"400px"} />
                            </div>
                        ))}
                    </div>
                </div>

            ) : (<Author nft={nft} />)}
        </>
    )
}

export default APIauthorbios