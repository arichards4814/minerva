import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        height: props => props.height,
        width: props => props.width,
        marginLeft: 10
    },
    hovered: {
        opacity: .8,
        cursor: "pointer",
        height: props => props.height,
        width: props => props.width,
        marginLeft: 10
    },
    overlay: {
        position: "relative",
        top: 100,
        left: 10
    }
})

export default function CustomImage(props) {
    const classes = useStyles(props)
    const [hovered, setHovered] = useState(false)


    const handleHover = () => {
        setHovered(true)
    }
    const unHover = () => {
        setHovered(false)
    }



    return (
        <div className={hovered ? classes.hovered : classes.root} onMouseOver={handleHover} onMouseOut={unHover}>
            {props.src ? <img className={classes.root} src={props.src}></img> : <div className={classes.root} style={{backgroundColor: "gray"}}>
                <img style={{height: "100%"}}src={'/ChooseLessonHeader.png'}></img></div>}
        </div>
    )
}