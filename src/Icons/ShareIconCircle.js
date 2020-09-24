import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';


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
                    <circle className={hovered ? classes.st0Hovered : classes.st0} cx="150" cy="150" r="147.3" />
                </g>
                <g>
                    <g>
                        <polygon className={classes.st1} points="93.4,131.9 198.5,88.8 206.9,109 101.9,152.1 		" />
                    </g>
                    <g>
                        <polygon className={classes.st1} points="87.8,174.9 97.6,155.2 199.5,205 189.8,224.7 		" />
                    </g>
                    <g>
                        <path class={classes.st2} d="M210.8,133.2c-22.1,0-40.1-17.9-40.1-39.9c0-22,18-39.9,40.1-39.9c22.1,0,40.1,17.9,40.1,39.9
			C250.9,115.3,232.9,133.2,210.8,133.2z"/>
            </g>
                    <g>
                        <path class={classes.st2} d="M210.8,257.6c-22.1,0-40.1-17.9-40.1-39.9s18-39.9,40.1-39.9c22.1,0,40.1,17.9,40.1,39.9
			S232.9,257.6,210.8,257.6z"/>
                    </g>
                    <g>
                        <path class={classes.st2} d="M78.2,190.4c-22.1,0-40.1-17.9-40.1-39.9c0-22,18-39.9,40.1-39.9s40.1,17.9,40.1,39.9
			C118.3,172.5,100.3,190.4,78.2,190.4z"/>
                    </g>
                </g>
            </svg>
        </div>
    )
}