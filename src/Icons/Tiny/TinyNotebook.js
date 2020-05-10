import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import * as Colors from '../../Schemes/ColorScheme'

const { primary, secondary, third, fourth } = Colors

const useStyles = makeStyles({
    root: {
        height: props => {
            if (props.size) {
                return props.size * 30
            } else {
                return 30
            }
        },
        cursor: "pointer",
        display: "inline-block"
    },
    st0: {
        fill: "#ED2F65"
    },
    st1: {
        fill: "#00B79D"
    },
    st2: {
        fill: "#FFCF00"
    },
    hovered: {
        fill: "rgb(220,220,220, .8)"
    },
    nothovered: {
        fill: "white"
    }
});

export default function NoteIcon(props) {
    const classes = useStyles(props)

    // needs to go to 155 on component did mount or on click or something.
    // if style.theme === "minerva" theme it like it should be
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
                viewBox="0 0 225.3 225.06"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>
                    <g>
                        <circle className={hovered ? classes.hovered : classes.nothovered} cx="110" cy="110" r="120" />
                    </g>
                    <g>
                        <path className={classes.st0} d="M171.2,204.54H62.83c-11.36,0-20.6-9.24-20.6-20.6V38.68c0-11.36,9.24-20.6,20.6-20.6H171.2
			c11.36,0,20.6,9.24,20.6,20.6v145.25C191.8,195.3,182.56,204.54,171.2,204.54z M62.83,24.85c-7.63,0-13.83,6.21-13.83,13.83
			v145.25c0,7.63,6.2,13.83,13.83,13.83H171.2c7.63,0,13.83-6.21,13.83-13.83V38.68c0-7.63-6.2-13.83-13.83-13.83H62.83z"/>
                    </g>
                    <g>
                        <path className={classes.st1} d="M41.19,53.46h-8.58c-2.44,0-4.42-1.96-4.42-4.37v0c0-2.41,1.98-4.37,4.42-4.37h8.58
			c2.44,0,4.42,1.96,4.42,4.37v0C45.61,51.51,43.63,53.46,41.19,53.46z"/>
                    </g>
                    <g>
                        <path className={classes.st1} d="M41.19,68.23h-8.58c-2.44,0-4.42-1.96-4.42-4.37v0c0-2.41,1.98-4.37,4.42-4.37h8.58
			c2.44,0,4.42,1.96,4.42,4.37v0C45.61,66.28,43.63,68.23,41.19,68.23z"/>
                    </g>
                    <g>
                        <path className={classes.st1} d="M41.19,83h-8.58c-2.44,0-4.42-1.96-4.42-4.37v0c0-2.41,1.98-4.37,4.42-4.37h8.58c2.44,0,4.42,1.96,4.42,4.37
			v0C45.61,81.05,43.63,83,41.19,83z"/>
                    </g>
                    <g>
                        <path className={classes.st1} d="M41.19,97.77h-8.58c-2.44,0-4.42-1.96-4.42-4.37v0c0-2.41,1.98-4.37,4.42-4.37h8.58
			c2.44,0,4.42,1.96,4.42,4.37v0C45.61,95.81,43.63,97.77,41.19,97.77z"/>
                    </g>
                    <g>
                        <path className={classes.st1} d="M41.19,112.54h-8.58c-2.44,0-4.42-1.96-4.42-4.37v0c0-2.41,1.98-4.37,4.42-4.37h8.58
			c2.44,0,4.42,1.96,4.42,4.37v0C45.61,110.58,43.63,112.54,41.19,112.54z"/>
                    </g>
                    <g>
                        <path className={classes.st1} d="M41.19,127.31h-8.58c-2.44,0-4.42-1.96-4.42-4.37v0c0-2.41,1.98-4.37,4.42-4.37h8.58
			c2.44,0,4.42,1.96,4.42,4.37v0C45.61,125.35,43.63,127.31,41.19,127.31z"/>
                    </g>
                    <g>
                        <path className={classes.st1} d="M41.19,142.08h-8.58c-2.44,0-4.42-1.96-4.42-4.37l0,0c0-2.41,1.98-4.37,4.42-4.37h8.58
			c2.44,0,4.42,1.96,4.42,4.37l0,0C45.61,140.12,43.63,142.08,41.19,142.08z"/>
                    </g>
                    <g>
                        <path className={classes.st1} d="M41.19,156.85h-8.58c-2.44,0-4.42-1.96-4.42-4.37v0c0-2.41,1.98-4.37,4.42-4.37h8.58
			c2.44,0,4.42,1.96,4.42,4.37v0C45.61,154.89,43.63,156.85,41.19,156.85z"/>
                    </g>
                    <g>
                        <path className={classes.st1} d="M41.19,171.62h-8.58c-2.44,0-4.42-1.96-4.42-4.37l0,0c0-2.41,1.98-4.37,4.42-4.37h8.58
			c2.44,0,4.42,1.96,4.42,4.37l0,0C45.61,169.66,43.63,171.62,41.19,171.62z"/>
                    </g>
                    <g>
                        <path className={classes.st1} d="M41.19,186.39h-8.58c-2.44,0-4.42-1.96-4.42-4.37v0c0-2.41,1.98-4.37,4.42-4.37h8.58
			c2.44,0,4.42,1.96,4.42,4.37v0C45.61,184.43,43.63,186.39,41.19,186.39z"/>
                    </g>
                    <g>
                        <g>
                            <path className={classes.st2} d="M167.23,76.14H69.45c-1.46,0-2.64-1.47-2.64-3.28v0c0-1.81,1.18-3.28,2.64-3.28h97.78
				c1.46,0,2.64,1.47,2.64,3.28v0C169.87,74.67,168.68,76.14,167.23,76.14z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path className={classes.st2} d="M167.23,56.49H69.45c-1.46,0-2.64-1.47-2.64-3.28v0c0-1.81,1.18-3.28,2.64-3.28h97.78
				c1.46,0,2.64,1.47,2.64,3.28v0C169.87,55.02,168.68,56.49,167.23,56.49z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path className={classes.st2} d="M167.23,95.28H69.45c-1.46,0-2.64-1.47-2.64-3.28v0c0-1.81,1.18-3.28,2.64-3.28h97.78
				c1.46,0,2.64,1.47,2.64,3.28v0C169.87,93.81,168.68,95.28,167.23,95.28z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path className={classes.st2} d="M167.23,114.42H69.45c-1.46,0-2.64-1.47-2.64-3.28v0c0-1.81,1.18-3.28,2.64-3.28h97.78
				c1.46,0,2.64,1.47,2.64,3.28v0C169.87,112.95,168.68,114.42,167.23,114.42z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path className={classes.st2} d="M167.23,133.56H69.45c-1.46,0-2.64-1.47-2.64-3.28l0,0c0-1.81,1.18-3.28,2.64-3.28h97.78
				c1.46,0,2.64,1.47,2.64,3.28l0,0C169.87,132.09,168.68,133.56,167.23,133.56z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path className={classes.st2} d="M167.23,152.7H69.45c-1.46,0-2.64-1.47-2.64-3.28l0,0c0-1.81,1.18-3.28,2.64-3.28h97.78
				c1.46,0,2.64,1.47,2.64,3.28l0,0C169.87,151.23,168.68,152.7,167.23,152.7z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path className={classes.st2} d="M167.23,171.84H69.45c-1.46,0-2.64-1.47-2.64-3.28l0,0c0-1.81,1.18-3.28,2.64-3.28h97.78
				c1.46,0,2.64,1.47,2.64,3.28l0,0C169.87,170.37,168.68,171.84,167.23,171.84z"/>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    )
}