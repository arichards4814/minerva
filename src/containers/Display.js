import React from 'react'
import { makeStyles } from '@material-ui/core' 
import CustomImage from '../components/CustomImage'
import F3 from '../assets/typing/F3'
import F5 from '../assets/typing/F5'
import F6 from '../assets/typing/F6'
import VideoIcon from '../icons/VideoIcon'
import BlogIcon from '../icons/BlogIcon'
import BookIcon from '../icons/BookIcon'

const useStyles = makeStyles({
    root: {
        height: 800,
    },
    debug:{
        height:800,
        borderStyle: "solid"
    },
    previewInfo: {
        height: 300,
        margin: 10,
        borderStyle: "solid",
        borderRadius: "14px",
        padding: 10
    },
    body: {
        height: "75%"
    }  ,
    footer: {
        textAlign: "center",
        height: 100
    },
    zipText: {
        color: "#ED3466"
    }
})

const Display = props => {
    const classes = useStyles(props)

    return(
        <div className={props.debug ? classes.debug : classes.root}>
            <CustomImage src={props.image_url ? props.image_url : props.curriculum.image_url} height={props.imgHeight} width={props.imgWidth}/>
           
            <div className={classes.previewInfo}>
                <div className={classes.body}>
                    <F3 font="secondary">{props.title ? 'Lesson Preview:' : 'Curriculum Info:'}</F3>
                    <F3>{props.title ? props.title : props.curriculum.title}</F3>
                    <F5>{props.description ? props.description : props.curriculum.description}</F5>
                </div>
                <div className={classes.footer} >
                    <span className={classes.zipText}> Created by: {props.curriculum.user && props.curriculum.user.username}</span>
                    <F6>Subscribe to this Curriculum to view this Lesson</F6>
                    {props.lesson_type && props.lesson_type === "video" || props.lesson_type === "Video" && <VideoIcon />}
                    {props.lesson_type && props.lesson_type === "blog" || props.lesson_type === "Blog" && <BlogIcon />}
                    {props.lesson_type && props.lesson_type === "book" || props.lesson_type === "Book" && <BookIcon />}

                    {props.lesson_type && props.lesson_type === "tweet" || props.lesson_type === "Tweet" && <img src="/twitterIcon.png" style={{ height: 50 }}></img>}

                </div>
            </div>
        </div>
    )
}


export default Display