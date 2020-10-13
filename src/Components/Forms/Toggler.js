import React from 'react'
import { makeStyles } from '@material-ui/core'
import F4 from '../../assets/typing/F4'
import "../../assets/scss/Button.scss";
import * as color from '../../assets/schemes/ColorScheme'

const useStyles = makeStyles({
    root: {
        borderWidth: 8,
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
        cursor: "pointer",
        borderColor: props => { 
            if (props.selected === props.index){
                return color.secondary
            } else {
                return color.secondary
            }
        },
        backgroundColor: props => {
            if (props.selected === props.index){
                return color.third
            } else {
                return "white"
            }    
        },
        color: props => {
            if (props.selected === props.index){
                return color.primary
            } else {
                return color.secondary
            }
        },
    }
})

export default function Toggler(props) {
    const classes = useStyles(props)

    return (
        <button 
            className={classes.root} 
            onClick={() => props.onClick(props.value, props.index)}
        >
            <F4 font="secondary">
                {props.value ? props.value : "Search"}
            </F4>
        </button>
    )
}