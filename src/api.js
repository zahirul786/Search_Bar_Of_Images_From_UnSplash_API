import axios from 'axios';
const searchImages = async (term) => {
    const responce = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID v217xyYaCpMM5VOkMuvTrNS7c2hu55RpZmCqDZgvOMs',
        },
        params: {
            query: term,
        }
    });

    return responce.data.results;
};

export default searchImages;