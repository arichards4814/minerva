import React from 'react';
import { makeStyles } from '@material-ui/core';
import HandleScheme from '../../assets/schemes/HandleScheme'


const useStyles = makeStyles({
    root: {
        height: props => {
            if (props.size) {
                return props.size * 30
            } else {
                return 30
            }
        }
    },
    st0: {
        fill: props => HandleScheme(props)
    },
    st1: {
        fill: "none"
    }
});

export default function NoteIcon(props) {
    const classes = useStyles(props)

    // needs to go to 155 on component did mount or on click or something.
    // if style.theme === "minerva" theme it like it should be

    return (
        <div className={classes.root} onClick={props.onClick}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 68.89 75.46"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>
                    <polygon class={classes.st0} points="16.99,6.9 7.7,16.19 7.56,16.19 16.85,6.9 	" />
                    <path class={classes.st0} d="M16.99,6.9l-9.43,9.43v52.23h53.77V6.9H16.99z M54.58,61.81H14.31V19.14l5.48-5.48h34.79V61.81z" />

                    <rect x="31.07" y="24.56" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 72.9955 4.1054)" class={classes.st0} width="6.76" height="27.99" />

                    <rect x="31.07" y="13.94" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 62.381 -6.5091)" class={classes.st0} width="6.76" height="27.99" />

                    <rect x="31.07" y="35.17" transform="matrix(-1.836970e-16 1 -1 -1.836970e-16 83.6101 14.72)" class={classes.st0} width="6.76" height="27.99" />
                    <path class={classes.st1} d="M16.84,13.66" />
                </g>
            </svg>
        </div>
    )
}