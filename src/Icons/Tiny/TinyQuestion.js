import React from 'react';
import { makeStyles } from '@material-ui/core';
import * as Colors from '../../assets/schemes/ColorScheme'
import HandleScheme from '../../assets/schemes/HandleScheme'

const { primary, secondary, third, fourth } = Colors

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
        <div className={classes.root}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 68.89 75.46"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>
                    <path className={classes.st0} d="M16.99,6.9l-9.43,9.43v52.23h53.77V6.9H16.99z M54.58,61.81H14.31V19.14l5.48-5.48h34.79V61.81z" />
                    <g>
                        <path className={classes.st0} d="M36.93,43.7h-7.98v-0.8c0-1.36,0.15-2.46,0.46-3.31c0.31-0.85,0.77-1.62,1.38-2.32
			            c0.61-0.7,1.98-1.93,4.1-3.7c1.13-0.92,1.7-1.77,1.7-2.54c0-0.77-0.23-1.37-0.68-1.8c-0.46-0.43-1.14-0.64-2.07-0.64
			            c-0.99,0-1.82,0.33-2.47,0.99c-0.65,0.66-1.07,1.81-1.25,3.44l-8.15-1.01c0.28-3,1.37-5.41,3.27-7.23c1.9-1.83,4.8-2.74,8.72-2.74
			            c3.05,0,5.51,0.64,7.39,1.91c2.55,1.72,3.82,4.02,3.82,6.89c0,1.19-0.33,2.34-0.99,3.44c-0.66,1.11-2,2.46-4.03,4.05
			            c-1.41,1.12-2.31,2.02-2.68,2.7C37.12,41.73,36.93,42.61,36.93,43.7z M28.68,45.82h8.54v7.54h-8.54V45.82z"/>
                    </g>
                </g>
            </svg>
        </div>
    )
}