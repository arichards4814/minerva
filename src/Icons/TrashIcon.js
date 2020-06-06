import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Tooltip from '../components/Tooltip'


const useStyles = makeStyles({
    root: {
        height: props => {
            if (props.height) {
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
        fill: "#FFD009",
    }
});

export default function TrashIcon(props) {
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
            {props.tooltip === "top" && <div style={{ marginLeft: "32%" }}>
                <Tooltip width={100} content={props.content} showing={hovered ? "visible" : "hidden"} />
            </div>}
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 242.29 242.04"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>
                    <circle className={classes.st0} cx="121.15" cy="121.02" r="116" />
                </g>
                <g>
                    <g>
                        <path d="M171.5,202.92H73.49l-19-128.58h130.15L171.5,202.92z M83.66,191.13h77.19L171.6,86.12H68.15L83.66,191.13z" />
                    </g>
                    <rect x="95.47" y="103.29" width="6.64" height="69.68" />
                    <rect x="118.38" y="103.29" width="6.64" height="69.68" />
                    <rect x="142.27" y="103.29" width="6.64" height="69.68" />
                    <path d="M194.25,64.66l-0.68,7.47L48.01,58.91l0.68-7.47c0.41-4.41,4.3-7.65,8.71-7.24l44.54,4.05l0.18-1.85
		c0.38-4.41,4.28-7.65,8.71-7.24l23.4,2.13c4.43,0.38,7.67,4.28,7.27,8.69l-0.18,1.85l45.66,4.13
		C191.39,56.35,194.63,60.25,194.25,64.66z"/>
                </g>
            </svg>
            {props.tooltip === "bottom" && <Tooltip width={100} content={props.content} showing={hovered ? "visible" : "hidden"} />}
        </div>
    )
}