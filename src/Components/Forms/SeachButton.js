import React from 'react';
import { makeStyles } from '@material-ui/core';
import HandleScheme from '../../assets/schemes/HandleScheme';
import F4 from '../../assets/typing/F4';
import "../../assets/scss/Button.scss";

const useStyles = makeStyles({
    root: {
        borderWidth: 8,
        borderColor: props => HandleScheme(props),
        borderStyle: "solid",
        borderRadius: "40px",
        width: props => {
            if (props.width) {
                return props.width
            } else {
                return 120
            }
        },
        height: props => {
            if (props.height) {
                return props.height
            } else {
                return 50
            }
        },
        outline: 0,
        fontSize: props => {
            if (props.fontSize) {
                return props.fontSize
            } else {
                return 16
            }
        },
        margin: 1,
        cursor: "pointer"
    }
})

export default function SearchButton(props) {
    const classes = useStyles(props)

    return (
        <button 
            className={classes.root} 
            onClick={props.onClick} 
            type={props.type}
        >
            <F4 font="secondary">
                {props.value ? props.value : "Search"}
            </F4>
        </button>
    )
}