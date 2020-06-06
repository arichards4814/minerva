import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Tooltip from '../components/Tooltip'


const useStyles = makeStyles({
    root: {
        height: props => {
            if(props.height){
                return props.height
            } else {
                return 50
            }
        },
        width: props => {
            if (props.width) {
                return props.width
            } else {
                return 50
            }
        },
        display: "inline-block"
    },
    st0: {
        fill: "#FFCF00",
    },
    st1: {
        fill: "#FFFFFF"
    },
    st2: {
        fill: "none",
        stroke: "#FFFFFF",
        strokeWidth: 6,
        strokeMiterLimit: 10
    }
});

export default function EditImage(props) {
    const classes = useStyles()

    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        setHovered(true)
    }
    const handleMouseOut = () => {
        setHovered(false)

    }

    return ( 
        <div className={classes.root + " selected icon-hover"} onMouseOver={handleHover} onMouseOut={handleMouseOut} onClick={props.onClick}>
            {props.tooltip === "top" && <Tooltip width={100} content={props.content} showing={hovered ? "visible" : "hidden"} />}
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 242.29 242.04"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>
                    <g>
                        <circle className={classes.st0} cx="121.15" cy="121.02" r="116" />
                    </g>
                    <g>
                        <polygon className={classes.st1} points="47.93,175.16 79.99,118.44 115.27,157.9 160.16,87.44 194.37,175.16 		" />
                        <circle className={classes.st1} cx="91.63" cy="94.46" r="14.09" />
                        <rect x="47.93" y="66.88" className={classes.st2} width="146.44" height="105.29" />
                    </g>
                </g>
            </svg>
            {props.tooltip === "bottom" && <Tooltip width={120} content={props.content} showing={hovered ? "visible" : "hidden"} />}
        </div>
    )
}