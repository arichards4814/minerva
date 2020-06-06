import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import Button from '../components/Button'
import F4 from '../Typing/F4'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';


// redux
import { connect } from 'react-redux';
import { patchMultipleLessons } from '../actionCreators'


const useStyles = makeStyles({
    root: {
        width: 300,
        minHeight: 400,
        boxShadow: "2px 2px 8px 2px",
        padding: 4,
        position: "relative"
    },
    lessonCard: {
        margin: 15,
        height: 40,
        backgroundColor: "white",
        boxShadow: "1px 1px 2px 1px",
        cursor: "grab",
        paddingLeft: 5,
        verticalAlign: "top"
    },
    lcText: {
        display: "inline-block",
        paddingTop: 12,
        paddingLeft: 3,
        verticalAlign: "top"
    },
    footer: {
        position: "absolute",
        bottom: 10,
        left: 75
    },
    header: {
        paddingLeft: 12
    },
    dragIndicator: {
        display: "inline-block",
        paddingTop: 9
    }
})
const LessonsPanel = props => {
    const classes = useStyles(props)
    const [lessons, setLessons] = useState([])
    const [currentlyDragging, setCurrentlyDragging] = useState(null)
    const [reordered, setReordered] = useState(false)

    useEffect(() => {
        if(props.lessons){
            let sortedLessons = props.lessons.sort((a,b) => a.lesson_index - b.lesson_index)
            setLessons(sortedLessons)
        }
    }, [props.lessons])

    const dragStart = (e) => {
        console.log(lessons)
        console.log(e.target.id, e.target.title)

        //find it by its index first then set the currently dragging
        //need all info 
        setCurrentlyDragging(lessons[e.target.dataset.index])
    }

    const dragEnd = (e) => {
    }

    const dragOver = (e) => {
        e.preventDefault()
        // console.log(e.target.id)
    }

    const drop = async (e) => {
        // console.log(e.target.id)
        let lessonsCopy  = [...lessons]
        // the id shouldnt be the index
        let newCurrent = {...currentlyDragging}
        let splicedOut = lessonsCopy.splice(currentlyDragging.lesson_index, 1)
        lessonsCopy.splice(e.target.dataset.index, 0, newCurrent)
        lessonsCopy.forEach((lesson, ind) => {
            lesson.lesson_index = ind
        })
        setLessons(lessonsCopy)
        setReordered(true)
    }

    const renderLessons = () => {
        if (props.lessons) {
            return lessons.map((lesson, ind) => <div className={classes.lessonCard} data-index={ind} id={lesson.id} title={lesson.title}draggable={true} onDragStart={dragStart} onDragEnd={dragEnd} onDragOver={dragOver} onDrop={drop}>
                <div className={classes.dragIndicator}><DragIndicatorIcon /></div><div className={classes.lcText}>{lesson.title}</div></div>)
        } else {
        }
    }

 
    const saveOrder = async () => {
        console.log("Saving Lessons")
        await props.patchMultipleLessons(lessons)
        setTimeout(function () { setReordered(false) }, 800);
    }


    return(
        <div className={classes.root}>
            <div className={classes.header}>
                <F4>Lessons:</F4>
            </div>
            {renderLessons()}
            <div className={classes.footer}>
                {reordered && <Button onClick={saveOrder} theme="secondary">Save Order</Button> }
            </div>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        patchMultipleLessons: (arrayOfLessons) => dispatch(patchMultipleLessons(arrayOfLessons))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonsPanel);