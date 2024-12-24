import React, { useEffect, useState } from 'react'
import axios from 'axios';
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
            <NewItems nft={nft} loading={loading} />
        </>
    );
}

export default APInewItem