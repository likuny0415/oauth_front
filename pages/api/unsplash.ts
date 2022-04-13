import getUnsplash from "../../lib/api/unsplash";

export default async function handler(req, res) {
    const { page, query } = req.query;
    
    const response = await getUnsplash(page, query);
    
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');

    return res.status(200).json(response)
}