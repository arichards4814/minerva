import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Tooltip from '../components/Tooltip'

const useStyles = makeStyles({
    st0: {
        fill: "#EE3166",
        stroke: "none",
        strokeWidth: 4,
        strokeMiterlimit: 10
    }
});

export default function HomeIcon(props) {
    const classes = useStyles(props)

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
        <div className={selected ? "icon-hover selected"  : "icon-hover"} onClick={() => props.clickAction(props.index)} onMouseOver={handleHover} onMouseOut={handleMouseOut} >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 350"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <polygon className={classes.st0} points="322.78,185.07 322.78,329.72 233.48,329.72 233.48,264.8 168.57,264.8 168.57,329.72 77.22,329.72 
	77.22,185.06 199.97,62.3 "/>
                <g>
                    <polygon className={classes.st0} points="357.89,181.68 344.17,195.4 340.19,195.4 322.78,178 199.97,55.23 77.22,177.99 59.81,195.4 
		55.83,195.4 42.11,181.68 199.97,23.82 	"/>
                </g>
            </svg>

            <Tooltip content="Home" showing={hovered ? "visible" : "hidden"} />
        </div>
    )
}