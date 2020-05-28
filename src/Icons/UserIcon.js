import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '../Components/Tooltip'


const useStyles = makeStyles({
    root: {
        position: "relative",
        top: 10,
        left: 4 
    }, 
    st0: {
        fill: "#FFD000",
        stroke: "#ED3466",
        strokeWidth: 7,
        strokeMiterLimit: 100
    },
    st1: {
        fill: "#00B79D"
    }
});

export default function AppleIcon(props) {
    const classes = useStyles()

    const [hovered, setHovered] = useState(false)

    const [selected, setSelected] = useState(false)

    const handleHover = () => {
        setHovered(true)
    }   
    const handleMouseOut = () => {
        setHovered(false)
    }           
    useEffect(() => {
        if (props.selected === props.index) {
            setSelected(true)
            setHovered(false)
        } else {
            setSelected(false)
        }
    });

    return (
        <div className={selected ? "icon-hover selected " + classes.root : "icon-hover " + classes.root} onClick={() => props.clickAction(props.index)} onMouseOver={handleHover} onMouseOut={handleMouseOut}>

            <svg
                width="80%"
                height="80%"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <circle className={classes.st0} cx="150" cy="150" r="137.7" />
                <g>
                    <circle className={classes.st1} cx="150" cy="82.8" r="41.7" />
                    <path className={classes.st1} d="M201.5,258.8h-103v-76.5c0-28.4,23.1-51.5,51.5-51.5h0c28.4,0,51.5,23.1,51.5,51.5V258.8z" />
                </g>
            </svg>
            <Tooltip content="Profile" showing={hovered ? "visible" : "hidden"} />
        </div>
    )
}