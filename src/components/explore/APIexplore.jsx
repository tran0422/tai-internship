import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { Link } from "react-router-dom";
import ExploreItems from "./ExploreItems";
import Skeleton from "../UI/Skeleton";

const APIexplore = () => {
    const [nft, setNft] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('likes_high_to_low')

    const fetchAPI = async (filter) => {
        setLoading(true);

        const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${filter}`);

        setNft(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchAPI(filter);
    }, [filter]);

    return (
        <>
            <div>
                <select id="filter-items" defaultValue="likes_high_to_low" onChange={(e) => setFilter(e.target.value)} >
                    <option value="price_low_to_high">Price, Low to High</option>
                    <option value="price_high_to_low">Price, High to Low</option>
                    <option value="likes_high_to_low">Most liked</option>
                </select>
            </div>

            {loading ? (
                new Array(8).fill(8).map((_, index) => (
                    <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <Skeleton width={"100%"} height={"400px" }/>
                    </div>
                ))
            ) : (<ExploreItems nft={nft} />)}
        </>
    )
}

export default APIexplore