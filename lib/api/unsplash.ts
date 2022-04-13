const access_token = process.env.UNSPLASH_ACCESS_KEY;

const UNSPLASH_ENDPOINT = `https://api.unsplash.com/search/photos`;

const getUnsplash = async (page, query) => {
    
    const response = await fetch(
        `${UNSPLASH_ENDPOINT}?page=${page}&query=${query}&client_id=${access_token}`
    )
    const data = await response.json();
    return data
}

export default getUnsplash