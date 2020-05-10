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
        <div className={classes.root} onMouseOver={handleHover} onMouseOut={handleMouseOut}>
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
                        {/* <path d="M197.4,91.4l6.9,16.6l-101.3,41.6L96.1,133L197.4,91.4 M199.5,86.2L90.8,130.8l9.9,24l108.7-44.6L199.5,86.2L199.5,86.2z"
                        /> */}
                    </g>
                    <g>
                        <polygon className={classes.st1} points="87.8,174.9 97.6,155.2 199.5,205 189.8,224.7 		" />
                        {/* <path d="M98.5,157.9l98.4,48l-7.9,16.1l-98.4-48L98.5,157.9 M96.6,152.6l-11.5,23.3l105.6,51.6l11.5-23.3L96.6,152.6L96.6,152.6z"
                        /> */}
                    </g>
                    <g>
                        <path class={classes.st2} d="M210.8,133.2c-22.1,0-40.1-17.9-40.1-39.9c0-22,18-39.9,40.1-39.9c22.1,0,40.1,17.9,40.1,39.9
			C250.9,115.3,232.9,133.2,210.8,133.2z"/>
                        {/* <path d="M210.8,55.4c21,0,38.1,17,38.1,37.9s-17.1,37.9-38.1,37.9s-38.1-17-38.1-37.9S189.8,55.4,210.8,55.4 M210.8,51.4
			c-23.3,0-42.1,18.8-42.1,41.9s18.9,41.9,42.1,41.9s42.1-18.8,42.1-41.9S234.1,51.4,210.8,51.4L210.8,51.4z"/> */}
                    </g>
                    <g>
                        <path class={classes.st2} d="M210.8,257.6c-22.1,0-40.1-17.9-40.1-39.9s18-39.9,40.1-39.9c22.1,0,40.1,17.9,40.1,39.9
			S232.9,257.6,210.8,257.6z"/>
                        {/* <path d="M210.8,179.8c21,0,38.1,17,38.1,37.9s-17.1,37.9-38.1,37.9s-38.1-17-38.1-37.9S189.8,179.8,210.8,179.8 M210.8,175.8
			c-23.3,0-42.1,18.8-42.1,41.9s18.9,41.9,42.1,41.9s42.1-18.8,42.1-41.9S234.1,175.8,210.8,175.8L210.8,175.8z"/> */}
                    </g>
                    <g>
                        <path class={classes.st2} d="M78.2,190.4c-22.1,0-40.1-17.9-40.1-39.9c0-22,18-39.9,40.1-39.9s40.1,17.9,40.1,39.9
			C118.3,172.5,100.3,190.4,78.2,190.4z"/>
                        {/* <path d="M78.2,112.6c21,0,38.1,17,38.1,37.9s-17.1,37.9-38.1,37.9s-38.1-17-38.1-37.9S57.2,112.6,78.2,112.6 M78.2,108.6
			c-23.3,0-42.1,18.8-42.1,41.9c0,23.1,18.9,41.9,42.1,41.9s42.1-18.8,42.1-41.9C120.3,127.4,101.5,108.6,78.2,108.6L78.2,108.6z"/> */}
                    </g>
                </g>
            </svg>
        </div>
    )
}