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
        boxShadow: "1px 1px 2px 1px"
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
            }
        ]
    )
    const [currentlyDragging, setCurrentlyDragging] = useState(null)

    const dragStart = (e) => {
        console.log(e.target.id, e.target.title)
        setCurrentlyDragging({
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
        console.log(e.target.id)
        let lessonsCopy  = [...lessons]
        lessonsCopy.splice(e.target.id, 0, currentlyDragging)
        setLessons(lessonsCopy)
    }

    const renderLessons = () => {
        if (lessons) {
            return lessons.map(lesson => <div className={classes.lessonCard} id={lesson.id} draggable={true} onDragStart={dragStart} onDragEnd={dragEnd} onDragOver={dragOver} onDrop={drop}>{lesson.title}</div>)
        }
    }


    return(
        <div className={classes.root}>
            {renderLessons()}
        </div>
    )
}
export default LessonsPanel