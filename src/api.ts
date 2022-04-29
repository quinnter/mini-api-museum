const axios = require('axios')

export const getAllArtworkWithImages = async () => {
    const { data } = await axios.get("https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&isHighlight=true&q=painting")
    return data
}

export const getArtworkById = async (id: number) => {
    const { data } = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
    return data 
}