import React from 'react';
import { makeStyles } from '@material-ui/core';
import HandleScheme from '../../Schemes/HandleScheme'


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
        fill: props => HandleScheme(props)
    },
    st1: {
        fill: "none",
        stroke: props => HandleScheme(props),
        strokeWidth: 4,
        strokeMiterLimit: 10
    }
});

export default function TinyEdit(props) {
    const classes = useStyles(props)

    // needs to go to 155 on component did mount or on click or something.
    // if style.theme === "minerva" theme it like it should be

    return (
        <div className={classes.root} onClick={props.onClick}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 58.28 58.56"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>
                    <g>
                        <polygon className={classes.st0} points="41.22,11.04 47.58,17.4 21.23,43.75 14.87,45.01 14.87,37.39 		" />
                        <rect x="44.53" y="5.34" transform="matrix(0.7071 -0.7071 0.7071 0.7071 7.3256 37.3718)" className={classes.st0} width="8.48" height="9" />
                    </g>
                    <path className={classes.st1} d="M51.39,25.43v24.21c0,2.9-2.35,5.26-5.26,5.26H8.59c-2.9,0-5.26-2.35-5.26-5.26V12.1
		c0-2.9,2.35-5.26,5.26-5.26h25.34"/>
                </g>
            </svg>
        </div>
    )
}