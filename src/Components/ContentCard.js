import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import AxiosSearch from '../requests/youtube/AxiosSearch'
import LoadingAnimation from './LoadingAnimation'
import F5 from '../assets/typing/F5'
import F6 from '../assets/typing/F6'
import { getYoutubeIDFromURL } from '../requests/requests'

//////This is only for previews. When it's actually in there it will
///the purpose of this content card is to load up information
///from a passed in youtube url
/// or if there is no youtube url poplulate it with something else
const useStyles = makeStyles({
    root: {
        width: 550,
        height: 200,
        borderRadius: 20,
        borderStyle: "solid"
    },
    row:{
        display: "table",
        width: "100%"
    },
    image:{
        display: "table-cell",
        paddingLeft: 10
    },
    leftMargin:{
        paddingTop: 10,
        display: "table-cell",
        verticalAlign: "top",
        paddingLeft: 10
        
    },
    body:{
        height: 100,
        paddingLeft: 10,
        maxWidth: 330
    }
})

export default function ContentCard(props){
    const classes = useStyles(props)
    const [videoInfo, setVideoInfo] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() =>{
        if(props.videoURL){
            if(checkIfYoutube(props.videoURL)){
                handleSearch(getYoutubeIDFromURL(props.videoURL))
            } else {
                handleAllOtherURLs(props.videoURL)
            }
        }
    },[props.videoURL])

    const checkIfYoutube = (videoURL) => {
        if(videoURL.includes("youtube")){
            return true
        } else {
            return false
        }
    }

    const handleSearch = async (youtubeid) => {
        console.log(process.env.REACT_APP_API_KEY)
        const response = await AxiosSearch.get('/search', {
            params: {
                q: youtubeid,
                part: "snippet",
                key: process.env.REACT_APP_API_KEY
            }
        })

        // 
        if (response.data.items.length > 0){
            setError("")
            setLoading(false)
            setVideoInfo(response.data.items[0].snippet)
            props.getNewLessonImage(response.data.items[0].snippet.thumbnails.high.url)
            console.log(response.data.items[0].snippet)
        } else if (props.videoUrl){
            if(props.videoUrl.length > 0){
                setVideoInfo("")
            }

            setLoading(true)
            setError("Cannot retrieve details for this url.")
        } else {

            setLoading(true)
            setError("Cannot retrieve details for this url.")
        }
        //handle the search response here :)
    }

    const handleAllOtherURLs = (videoURL) => {
        // if not youtube check if theres any others
        // otherwise just add a placeholder... 
        // dont use switch because it is an abuse of case

        if (videoURL.includes("medium")){
            props.getNewLessonImage("https://miro.medium.com/max/390/1*emiGsBgJu2KHWyjluhKXQw.png")
            setVideoInfo({
                alternative: "https://miro.medium.com/max/390/1*emiGsBgJu2KHWyjluhKXQw.png"
            })
            setLoading(false)
        } else if (videoURL.includes("twitter")) {
            props.getNewLessonImage("/twitterIcon.png")
            setVideoInfo({
                alternative: "/twitterIcon.png"
            })
            setLoading(false)
        } else if (videoURL.includes("tiktok")) {
            props.getNewLessonImage("/tiktok.png")
            setVideoInfo({
                alternative: "/tiktok.png"
            })
            setLoading(false)
        } else if (videoURL.includes("udemy")){
            props.getNewLessonImage("https://www.pipelinersales.com/wp-content/uploads/2019/06/large-udemy.jpg")
            setVideoInfo({
                alternative: "https://www.pipelinersales.com/wp-content/uploads/2019/06/large-udemy.jpg"
            })

            setLoading(false)
        } else if (videoURL.includes("khan")){
            props.getNewLessonImage("https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/f7/53/cd/f753cd8a-4139-f1b4-ef71-a2661690fa22/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png")
            setVideoInfo({
                alternative: "https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/f7/53/cd/f753cd8a-4139-f1b4-ef71-a2661690fa22/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png"
            })
            setLoading(false)
        } else if (props.type && props.type === 'Blog'){
            props.getNewLessonImage("/blogPlaceholder.png")
            setVideoInfo({
                alternative: "/blogPlaceholder.png"
            })
            setLoading(false)
        } else if (props.type && props.type === 'Book') {
            props.getNewLessonImage("/bookPlaceholder.png")
            setVideoInfo({
                alternative: "/bookPlaceholder.png"
            })
            setLoading(false)
        } else {
            props.getNewLessonImage("/blogPlaceholder.png")
            setVideoInfo({
                alternative: "/blogPlaceholder.png"
            })
            setLoading(false)
        }
            
        
    } 


return(
    <div className={classes.root}> 
        <div className={classes.row}>
            <div className={classes.image}>
                {videoInfo.thumbnails && <img style={{ width: 190, paddingTop: 20 }} src={videoInfo.thumbnails.high.url}></img>}
                {videoInfo.alternative && <img style={{ width: 190, paddingTop: 2 }} src={videoInfo.alternative}></img>}
            </div>
            <div className={classes.leftMargin}>
                        {videoInfo.title && <F5>{videoInfo.title}</F5>}
                  
                    <div className={classes.body}>
                        {videoInfo.description && <F6>{videoInfo.description}</F6>}
                            {loading && <LoadingAnimation />}
                        {error != "" && <F5>{error}</F5>}
                    </div>
            </div>
        </div>
    </div>
)

}