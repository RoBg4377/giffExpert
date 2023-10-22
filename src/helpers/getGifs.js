export const getGifs = async(cat) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?limit=12&q=${encodeURI(cat)}&api_key=3eodLsLetZAuB3nHhw0uz8SS6RF67n7z`;
    
    const peticion = await fetch (url);
    
    const {data} = await peticion.json()
    
    const gifs = data.map( ({id, title, images}) => {
        return {
            id: id,
            title: title,
            images: images.downsized.url 
        }
    })
    return gifs
    
}