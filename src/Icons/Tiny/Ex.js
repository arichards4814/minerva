import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import HandleScheme from '../../assets/schemes/HandleScheme'

const useStyles = makeStyles({
    root: {
        height: props => {
            if (props.size) {
                return props.size * 30
            } else {
                return 30
            }
        }
    },
    st0: {
        fill: props => HandleScheme(props)
    },
    st1: {
        fill: "none"
    },
    st1hovered: {
        fill: "gray"
    }
});

export default function NoteIcon(props) {
    const classes = useStyles(props)
    const [hovered, setHovered] = useState(false)

    // needs to go to 155 on component did mount or on click or something.
    // if style.theme === "minerva" theme it like it should be

    const handleHover = () => {
        setHovered(true)
    }
    const handleMouseOut = () => {
        setHovered(false)
    }  

    return (
        <div className={classes.root + " ex"} onClick={props.onClick ? props.onClick : props.close} onMouseOver={handleHover} onMouseOut={handleMouseOut}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 68.89 75.46"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <circle class={hovered ? classes.st1hovered : classes.st1} cx="34.44" cy="37.73" r="26.19" />
                <path class={classes.st0} d="M45.58,46.39l-2.2,2.19c-0.71,0.72-1.87,0.72-2.58,0l-6.21-6.21l-6.5,6.49c-0.71,0.72-1.87,0.72-2.58,0
                    l-2.2-2.19c-0.71-0.71-0.71-1.87,0-2.58l6.5-6.5l-6.22-6.21c-0.71-0.72-0.71-1.87,0-2.59l2.2-2.19c0.71-0.71,1.87-0.71,2.58,0
                    l6.22,6.21l5.93-5.93c0.71-0.71,1.87-0.71,2.58,0l2.2,2.19c0.71,0.72,0.71,1.88,0,2.59l-5.93,5.93l6.21,6.21
                    C46.29,44.52,46.29,45.68,45.58,46.39z"/>
            </svg>
        </div>
    )
}