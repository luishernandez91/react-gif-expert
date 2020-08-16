export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=XHMIpKaJLfl7urV8qI0o2UuhaMQsczhu`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    return  data.map(img => {
        return {
            id: img.id,
            title: img.title, url:
            img.images.downsized_medium.url
        }
    });
};
