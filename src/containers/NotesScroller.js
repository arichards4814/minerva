import React from 'react'
import { makeStyles } from '@material-ui/core'
import F3 from '../assets/typing/F3'
import NotesLongcard from '../components/NotesLongcard'

const useStyles = makeStyles({
    root: {
        height: props => {
            if (props.height){
                return props.height
            } else {
                return 900
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
                return 900
            }
        },
        borderStyle: "solid",
        verticalAlign: "top"
    }
})

const NotesScroller = props => {
    const classes = useStyles(props)

    const renderCards = () => {
        const sortedNotes = props.info.sort((a, b) => (a.material_time_stamp > b.material_time_stamp) ? 1 : -1)
        return sortedNotes.map(note => <NotesLongcard key={note.id} note={note} />)
    }

    return (
        <div className={props.debug ? classes.debug : classes.root}>
            <F3 font="secondary"> {props.headerTitle} </F3>
            {props.info ? renderCards() : <F3> {props.placeholder} </F3>}
        </div>
    )
}


export default NotesScroller