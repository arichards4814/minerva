import React from 'react'
import { makeStyles } from '@material-ui/core'
import F3 from '../assets/typing/F3'
import LongCard from '../components/LongCard'

const useStyles = makeStyles({
    root: {
        height: props => {
            if (props.height){
                return props.height
            } else {
                return 800
            }
        },
        alignContent: "top",
        overflowX: "auto"
    },
    debug: {
        height: props => {
            if (props.height) {
                return props.height
            } else {
                return 800
            }
        },
        borderStyle: "solid",
        verticalAlign: "top"
    }
})

const LongCardScroller = props => {
    const classes = useStyles(props)

    const renderCards = () => {
        return props.info.map(lesson => <LongCard key={lesson.id} lesson={lesson} editLessonOnClick={props.editLessonOnClick} deleteLessonOnClick={props.deleteLessonOnClick} style={props.style}/>)
    }

    return (
        <div className={props.debug ? classes.debug : classes.root}>
            <F3 font="secondary"> {props.headerTitle} </F3>
            {props.info ? renderCards() : <F3> {props.placeholder} </F3>}
        </div>
    )
}


export default LongCardScroller