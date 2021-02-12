export const getGifs = async (category) =>{
    try {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=3lOHuu6lTIc2iq7QRu3dPDPISudpIxS9`
        const res = await fetch(url)
        const {data} = await res.json()
        const gifs = data.map(img=>{
            return {
                id: img.id,
                title: img.title,
                url: img.images.original.url
            }
        })
        
        return gifs
       
    } catch (error) {
        console.log(error)
    }
}