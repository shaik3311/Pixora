import axios from 'axios'

// API KEYS 
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;


// function for fetching Photos from unsplash api 
export const fetchPhotos = async(query,page=1,per_page=20)=>{
    // console.log(query);
    
    let response = await axios.get('https://api.unsplash.com/search/photos',{
        params:{query,page,per_page},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    });

    // normalizing data 
    let data = response.data.results.map((item)=>{
        return {
            id:item.id,
            title : item.alt_description,
            src : item.urls.full,
        }
    })
    // console.log(response.data.results);
    // console.log(data); 

    // return normalized data 
    return data;   
}

// function for fetching videos from pexels api 
export const fetchVideos = async(query,page=1,per_page=20)=>{
    let response = await axios.get('https://api.pexels.com/videos/search',{
        params:{query,page,per_page},
        headers:{Authorization:PEXELS_KEY}
    });
    
    // normalizing data 
    let data = response.data.videos.map((item)=>{
        return {
            id:item.id,
            video_link:item.video_files[0].link,
            src:item.url
        }
    })
    // console.log(response.data.videos);
    // console.log(data);
    
    // return normalized data 
    return data;
}