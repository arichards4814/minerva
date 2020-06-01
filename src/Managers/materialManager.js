import AxiosSearch from '../Youtube/AxiosSearch';
// from the url, the material manager will
// 1. Figure out the type of material.
// 2. Figure out the image that should be the main image of the lesson
// 3. Return an object with this information.

// example return {
// origin: 
// material_image:
// material_type: 
// }

const materialManager = async function (url, callback) {
if(!url) return null

    let returnObject = {url: url}

    if (isYoutubeUrl(url)) {
        try {
            let response = await handleSearchAsync(getYoutubeIDFromURL(url))
            returnObject.video_info = response.data.items[0].snippet
            returnObject.image_url = response.data.items[0].snippet.thumbnails.high.url
            returnObject.material_type = "video"
            return callback(returnObject, null)
        } catch(e){
            return callback(null, e)
        }
    } else {
        let materialInfo = handleAllOtherURLs(url)
        return callback({...returnObject, ...materialInfo}, null)
    }
}

const isYoutubeUrl = (videoURL) => {
    if (videoURL.includes("youtube")) {
        console.log("is youtube")
        return true
    } else {
        return false
    }
}

const handleSearchAsync = async (youtubeid) =>{
    if(!youtubeid) return null
    try {
        const response = await AxiosSearch.get('/search', {
            params: {
                q: youtubeid,
                part: "snippet",
                key: process.env.REACT_APP_API_KEY
            }
            //
        })
        console.log("Response", response)
        return response
    } catch(e){
        console.log(e)
    }
}

const getYoutubeIDFromURL = (url) => {
    let video_id = url.split('v=')[1]

    if (!video_id) {
        console.log("There is a problem with this URL")
        return false
    } else {
        let ampersandPosition = video_id.indexOf('&');
        if (ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
        }
        console.log(`The video ID is ${video_id}`)
        return video_id
    }
}

const handleAllOtherURLs = (url) => {
    let generatedObject = {} 

    if (url.includes("medium")) {
        generatedObject.image_url = "https://miro.medium.com/max/390/1*emiGsBgJu2KHWyjluhKXQw.png"
        generatedObject.material_type = "blog"
    } else if (url.includes("twitter")) {
        generatedObject.image_url = "/twitterIcon.png"
        generatedObject.material_type = "tweet"
    } else if (url.includes("tiktok")) {
        generatedObject.image_url = "/tiktok.png"
        generatedObject.material_type = "tiktok"
    } else if (url.includes("udemy")) {
        generatedObject.image_url = "/tiktok.png"
        generatedObject.material_type = "video"
    } else if (url.includes("khan")) {
        generatedObject.image_url = "https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/f7/53/cd/f753cd8a-4139-f1b4-ef71-a2661690fa22/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png"
        generatedObject.material_type = "video"
    } else {
        generatedObject.image_url = "/blogPlaceholder.png"
        generatedObject.material_type = "blog"
    }

    return generatedObject
} 

export default materialManager