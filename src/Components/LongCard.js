import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import F4 from '../Typing/F4'
import F5 from '../Typing/F5'
import F6 from '../Typing/F6'
import TinyEdit from '../Icons/Tiny/TinyEdit'
import TinyTrash from '../Icons/Tiny/TinyTrash'
import VideoIcon from '../Icons/VideoIcon'
import BlogIcon from '../Icons/BlogIcon'
import BookIcon from '../Icons/BookIcon'



import { connect } from 'react-redux';
import { setCurrentLesson, setCurrentNotebook } from '../actionCreators'


const useStyles = makeStyles({
    root: {
        // borderStyle: "solid",
        position: "relative",
        width: props => {
            if(props.width){
                return props.width
            } else {
                return 500
            }
        },
        height: props => {
            if (props.height) {
                return props.height
            } else {
                return 120
            }
        },
        borderRadius: 10,
        // borderWidth: 2,
        boxShadow: "2px 4px 6px #888888",
        display: "inline-block",
        margin: props => {
            if (props.margin) {
                return props.margin
            } else {
                return 10
            }
        }
    },
    hovered: {
        // borderStyle: "solid",
        width: 500,
        height: 120,
        borderRadius: 10,
        // borderWidth: 2,
        boxShadow: "10px 10px 6px #888888",
        display: "inline-block",
        margin: props => {
            if (props.margin) {
                return props.margin
            } else {
                return 10
            }
        },
        // position: "relative",
        // transform: 'translateX(10px)',
        // transform: 'translateY(-10px)',

        // cursor: 'pointer'
    },
    cardHeader: {
        height: "2%"
    },
    cardImage: {
        height: "90%",
        width: "30%",
        backgroundColor: "white",
        display: "inline-block",
        margin: 2,
        verticalAlign: "top"
    },
    rightSide: {
        display: "inline-block",
        verticalAlign: "top",
        maxWidth: "60%",
        padding: 10
    },
    cardTitle: {
        height: "12%"
    },
    cardBody: {
        height: "30%",
        maxWidth: "100%",
        backgroundColor: "white",
        display: "inline-block"
    },
    cardFooter: {
        position: "absolute",
        bottom: -5,
        right: 5,
        width: "10%",
        display: "inline-block"
    },
});

const LongCard = props => {
    const classes = useStyles()
    //hmm, how big should a card be? Should I have sm, md, lg? 
    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        // setHovered(true)
    }
    const unHover = () => {
        // setHovered(false)
    }

    const notebookOrLesson = (lessonOrNotebook) => {
        console.log("what props.lesson looks like", props.lesson)
        if(props.lesson.notes){
            props.setCurrentNotebook(props.lesson)
            console.log("in")
        } else {
            props.setCurrentLesson(props.lesson)
        }
    }

    return (
        <div className={hovered ? classes.hovered : classes.root} onMouseOver={handleHover} onMouseOut={unHover} onClick={() => notebookOrLesson(props.lesson)}>
            <div className={classes.cardHeader}>

            </div>
            <div className={classes.cardImage}>
                {props.lesson.image_url && <img src={props.lesson.image_url} style={{ height: "100%", width: "100%" }}></img>}
                {props.image_url && <img src={props.image_url} style={{ height: "100%", width: "100%" }}></img>}
            </div>
            <div className={classes.rightSide}>
                <div className={classes.cardTitle}>
                    <F5>{props.lesson.title}</F5>
                </div>
                <div className={classes.cardBody}>
                    {props.lesson.description}
                    {props.lesson.notes && <span> # of Notes: {props.lesson.notes.length}<br></br></span>}
                    {/* <F6>{props.lesson.description}</F6> */}
                </div>
            </div>
            
            <div className={classes.cardFooter}>
                {props.style === "edit" &&
                    <TinyTrash theme="fourth"  onClick={() => props.deleteLessonOnClick(props.lesson.id)} />}
                {props.style === "edit" && <TinyEdit theme="minerva" onClick={() => props.editLessonOnClick(props.lesson)}/>}
                {props.lesson.lesson_type && props.lesson.lesson_type === "video" || props.lesson.lesson_type === "Video" && <VideoIcon />}
                {props.lesson.lesson_type && props.lesson.lesson_type === "blog" || props.lesson.lesson_type === "Blog" && <BlogIcon />}
                {props.lesson.lesson_type && props.lesson.lesson_type === "book" || props.lesson.lesson_type === "Book" && <BookIcon />}

            </div>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        currentLesson: state.currentLesson
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentLesson: (lesson) => dispatch(setCurrentLesson(lesson)),
        setCurrentNotebook: (notebook) => dispatch(setCurrentNotebook(notebook))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LongCard);