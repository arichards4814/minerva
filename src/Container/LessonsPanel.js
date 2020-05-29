import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        width: 300,
        minHeight: 400,
        boxShadow: "2px 2px 8px 2px",
        padding: 2

    },
    lessonCard: {
        margin: 15,
        height: 40,
        backgroundColor: "white",
        boxShadow: "1px 1px 2px 1px",
        cursor: "grab"
    }
})
const LessonsPanel = props => {
    const classes = useStyles(props)
    const [lessons, setLessons] = useState(
        [
            {id: 0,
            title: "test1"},
            {
                id: 1,
                title: "test2"
            },
            {
                id: 2,
                title: "test3"
            },
            {
                id: 3,
                title: "test4"
            },
            {
                id: 4,
                title: "test5"
            }
        ]
    )
    const [currentlyDragging, setCurrentlyDragging] = useState(null)

    const dragStart = (e) => {
        console.log(e.target.id, e.target.title)
        setCurrentlyDragging({
            index: parseInt(e.target.dataset.index),
            id: e.target.id,
            title: e.target.title})
    }

    const dragEnd = (e) => {
    }

    const dragOver = (e) => {
        e.preventDefault()
        // console.log(e.target.id)
    }

    const drop = (e) => {
        // console.log(e.target.id)
        let lessonsCopy  = [...lessons]
        // the id shouldnt be the index
        let newCurrent = { 
            id: currentlyDragging.id,
            title: currentlyDragging.title}
        let splicedOut = lessonsCopy.splice(currentlyDragging.index, 1)
        debugger
        lessonsCopy.splice(e.target.dataset.index, 0, newCurrent)
        setLessons(lessonsCopy)
    }

    const renderLessons = () => {
        if (lessons) {
            return lessons.map((lesson, ind) => <div className={classes.lessonCard} data-index={ind} id={lesson.id} title={lesson.title}draggable={true} onDragStart={dragStart} onDragEnd={dragEnd} onDragOver={dragOver} onDrop={drop}>{lesson.title}</div>)
        }
    }


    return(
        <div className={classes.root}>
            {renderLessons()}
        </div>
    )
}
export default LessonsPanel