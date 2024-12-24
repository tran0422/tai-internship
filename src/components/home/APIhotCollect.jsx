import React, { useEffect, useState } from 'react'
import axios from 'axios';
import HotCollections from './HotCollections';

const APIhotCollect = () => {
    const [nft, setNft] = useState([]);
    const [loading, setLoading] = useState(true);

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
            <HotCollections nft={nft} loading={loading} />
        </>
    );
}

export default APIhotCollect