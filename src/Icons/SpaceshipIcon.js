import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Tooltip from '../components/Tooltip'

const useStyles = makeStyles({
    st0: {
        fill: "#FFD000"
    },
    st1: {
        fill:"#EE3166"
    },
    st2: {
        fill: "#FFD000",
        stroke: "#EE3166",
        strokeMiterLimit: 10
    },
    st3: {
        fill: "#04B89F"
    },
    st4: {
        fill: "#00AC62"
    }
});

export default function SpaceshipIcon(props) {
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


return(
    <div className={selected ? "icon-hover selected" : "icon-hover"} onClick={() => props.clickAction(props.index)} onMouseOver={handleHover} onMouseOut={handleMouseOut}>

        <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 350"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path className={classes.st0} d="M239.27,234.97h-78.52v-78.74c0-21.68,17.58-133.51,39.26-133.51h0c21.68,0,39.26,111.83,39.26,133.51V234.97z"
            />
            <path className={classes.st1} d="M202.08,255.75h-4.16c-0.42,0-0.77-0.34-0.77-0.77V145.62c0-0.42,0.34-0.77,0.77-0.77h4.16
	c0.42,0,0.77,0.34,0.77,0.77v109.37C202.84,255.41,202.5,255.75,202.08,255.75z"/>
            <path className={classes.st1} d="M124.37,256.13l36.38-21.16v-85.26l-27.76,14.53c-9.51,4.98-15.46,14.82-15.46,25.55v62.4
	C117.52,255.71,121.33,257.9,124.37,256.13z"/>
            <path className={classes.st1} d="M275.63,256.13l-36.38-21.16v-85.26l27.76,14.53c9.51,4.98,15.46,14.82,15.46,25.55v62.4
	C282.48,255.71,278.67,257.9,275.63,256.13z"/>
            <circle className={classes.st2} cx="200.18" cy="100.81" r="15.51" />
            <path className={classes.st1} d="M175.55,314.97L175.55,314.97c-1.89,0-3.42-1.53-3.42-3.42v-56.11c0-1.89,1.53-3.42,3.42-3.42h0
	c1.89,0,3.42,1.53,3.42,3.42v56.11C178.97,313.44,177.44,314.97,175.55,314.97z"/>
            <path className={classes.st1} d="M200.18,327.28L200.18,327.28c-1.89,0-3.42-1.53-3.42-3.42v-56.11c0-1.89,1.53-3.42,3.42-3.42l0,0
	c1.89,0,3.42,1.53,3.42,3.42v56.11C203.6,325.75,202.07,327.28,200.18,327.28z"/>
            <path className={classes.st1} d="M223.44,295.81L223.44,295.81c-1.89,0-3.42-1.53-3.42-3.42v-36.95c0-1.89,1.53-3.42,3.42-3.42h0
	c1.89,0,3.42,1.53,3.42,3.42v36.95C226.86,294.28,225.33,295.81,223.44,295.81z"/>
            <circle className={classes.st3} cx="200.18" cy="100.81" r="13.68" />
            <path className={classes.st4} d="M213.86,100.81c0,7.55-6.13,13.68-13.68,13.68c-5.04,0-9.44-2.72-11.81-6.79l22.35-15.64
	C212.67,94.43,213.86,97.48,213.86,100.81z"/>
            <path className={classes.st3} d="M210.13,91.43" />
</svg>

        <Tooltip content="Explore" showing={hovered ? "visible" : "hidden"} />
    </div>
)
}