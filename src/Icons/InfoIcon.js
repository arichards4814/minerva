import React from 'react';
import { makeStyles } from '@material-ui/core';


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
        display: "inline-block",
        cursor: "pointer"
    },
    st0: {
        fill: "#00AA62",
    },
    st1: {
        fill: "#FFFFFF"
    }
});

export default function InfoIcon(props) {
    const classes = useStyles(props)


    return ( 
        <div className={classes.root} onClick={props.onClick}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 242.29 242.04"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <circle className={classes.st0} cx="121" cy="121" r="116" />
                <g>
                    <path class={classes.st1} d="M133.6,172.9c-0.2,5.6,5.1,8.4,16.2,8.4v10.6H92.2v-10.6c10.7,0,16-2.8,16-8.4v-56.5c0-5.7-5.3-8.6-16-8.6
		V97.2h41.5V172.9z M135.9,65.9c0,4.3-1.5,8.1-4.6,11.3c-3,3.2-6.8,4.7-11.3,4.7c-2.2,0-4.3-0.4-6.2-1.3c-1.9-0.9-3.6-2-5-3.4
		c-1.4-1.4-2.6-3.1-3.4-5c-0.9-1.9-1.3-4-1.3-6.2c0-4.5,1.6-8.2,4.7-11.3c3.2-3,6.9-4.6,11.3-4.6c4.3,0,8.1,1.6,11.2,4.7
		C134.3,57.9,135.9,61.6,135.9,65.9z"/>
                </g>
            </svg>
        </div>
    )
}