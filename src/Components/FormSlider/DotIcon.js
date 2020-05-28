import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


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
        display: "inline-block",
        cursor: "pointer"
    },
    st0: {
        fill: props => {
            if(props.filled){
                return "#FFD000"
            } else {
                return "none"
            }
        },
        stroke: "#ED3466",
        strokeWidth: 7,
        strokeMiterLimit: 10
    }
});

export default function DotIcon(props) {
    const classes = useStyles(props)

    return (
        <div className={classes.root} onClick={props.onClick}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <circle className={classes.st0} cx="25" cy="25" r="18.7" />
            </svg>
        </div>
    )
}