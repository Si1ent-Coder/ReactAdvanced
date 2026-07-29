import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const useGif = (tag) => {
    const [gif, setGif] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true);

        try {
            const url = tag
                ? `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
                : `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

            const { data } = await axios.get(url);

            const imageSource = data.data.images.downsized_large.url;

            setGif(imageSource);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { gif, loading, fetchData };
};

export default useGif;