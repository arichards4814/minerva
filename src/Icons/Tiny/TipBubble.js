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
        bottom: 45
    },
    st0: {
        fill: props => HandleScheme(props)
    }
});

export default function TipBubble(props) {
    const classes = useStyles(props)

    // needs to go to 155 on component did mount or on click or something.
    // if style.theme === "minerva" theme it like it should be

    return (
        <div className={classes.root + " fade-in"} onClick={props.onClick}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 999.1 146.3"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <path className={classes.st0} d="M994.5,44.6v37.6c0,21.8-17.7,39.5-39.5,39.5H514.7l-20.5,20.5l-20.5-20.5H40.9c-21.8,0-39.5-17.7-39.5-39.5V44.6
	c0-21.8,17.7-39.5,39.5-39.5H955C976.8,5.1,994.5,22.8,994.5,44.6z"/>
            
            </svg>
            
        </div>
    )
}