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
        display: "inline-block",
        position: "absolute",
        bottom: 5,
        left: 180
    },
    st0: {
        fill: props => HandleScheme(props)
    }
});

export default function TipBubbleLeft(props) {
    const classes = useStyles(props)

    // needs to go to 155 on component did mount or on click or something.
    // if style.theme === "minerva" theme it like it should be

    return (
        <div className={classes.root + " fade-in"} onClick={props.onClick}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1023.9 127.2"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <path className={classes.st0} d="M1019.2,44.6v37.6c0,21.8-17.7,39.5-39.5,39.5H65.7c-21.8,0-39.5-17.7-39.5-39.5v-2.1L8.6,62.6L26.2,45v-0.4
	c0-21.8,17.7-39.5,39.5-39.5h914.1C1001.6,5.1,1019.2,22.8,1019.2,44.6z"/>
            
            </svg>
            
        </div>
    )
}