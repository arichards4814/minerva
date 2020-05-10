import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    root: {
        width: 45,
        display: "inline-block",
        cursor: "pointer"
    },
    st0: {
        fill: "white"
    },
    st0Hovered: {
        fill: "rgb(220,220,220, .8)"
    },
    st1: {
        fill: "#ED3466"
    },
    st2: {
        fill: "#22B573"
    }
});

export default function ShareIconCircle(props) {
    const classes = useStyles(props)

    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        setHovered(true)
    }
    const handleMouseOut = () => {
        setHovered(false)
    }


    return (
        <div className={classes.root} onClick={props.onClick} onMouseOver={handleHover} onMouseOut={handleMouseOut}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            ><g>
                    <ellipse className={hovered ? classes.st0Hovered : classes.st0} cx="149.5" cy="150" rx="146.5" ry="145" />
                </g>
                <g>
                    <g>
                        <path className={classes.st1} d="M114.4,81.8L114.4,81.8c5.5,5.5,5.5,14.4,0,19.9l-36.7,36.7c-5.2,5.2-5.2,13.5,0,18.7l36.7,36.7
			c5.5,5.5,5.5,14.4,0,19.9l0,0c-5.5,5.5-14.4,5.5-19.9,0L44,162.9c-8.4-8.4-8.4-22.1,0-30.5l50.6-50.6
			C100.1,76.3,109,76.3,114.4,81.8z"/>
                    </g>
                    <g>
                        <path className={classes.st1} d="M193.8,219.3L193.8,219.3c-6.1-4.8-7.2-13.6-2.4-19.7l32.1-40.8c4.5-5.7,3.5-14-2.2-18.5l-40.8-32.1
			c-6.1-4.8-7.2-13.6-2.4-19.7l0,0c4.8-6.1,13.6-7.2,19.7-2.4l56.3,44.2c9.4,7.4,11,20.9,3.6,30.3L213.5,217
			C208.7,223.1,199.9,224.1,193.8,219.3z"/>
                    </g>
                </g>
            </svg>
        </div>
    )
}