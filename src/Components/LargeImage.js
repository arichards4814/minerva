import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import F1 from '../assets/typing/F1'

const useStyles = makeStyles({
    root: {
        height: 450,
        width: 670,
        display: 'inline-block',
        margin: 5
    },
    hovered: {
        opacity: .8,
        cursor: "pointer",
        height: 450,
        width: 670,
        display: 'inline-block',
        margin: 5
    },
    overlay: {
        position: "relative",
        top: 100,
        left: 10
    }
})
export default function LargeImage(props){
    const classes = useStyles(props)
    const [hovered, setHovered] = useState(false)


    const handleHover = () => {
        setHovered(true)
    }
    const unHover = () => {
        setHovered(false)
    }


    return(
        <div className={hovered ? classes.hovered : classes.root} onMouseOver={handleHover} onMouseOut={unHover}>
            <div className={classes.overlay} >
                <F1 color="#00B79D" font="secondary">{props.title}</F1>
            </div>
            <img className={classes.root} src={props.src}></img>
        </div>
    )
}