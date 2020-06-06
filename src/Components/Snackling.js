import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import F5 from '../Typing/F5'
import TinyPlus from '../icons/Tiny/TinyPlus'
import TinyNote from '../icons/Tiny/TinyNote'
import TinyQuestion from '../icons/Tiny/TinyQuestion'
import TinyMinus from '../icons/Tiny/TinyMinus'
import Ex from '../icons/Tiny/Ex'
import HandleScheme from '../Schemes/HandleScheme'

const useStyles = makeStyles({
    root: {
        width: props => {
            if (props.width) {
                return props.width
            } else {
                return 420
            }},
        height: 40,
        borderRadius: 10,
        backgroundColor: props => HandleScheme(props),
        position: "fixed",
        bottom: 20,
        left: "45%",
        color: "white",
        align: "middle",
        // textAlign: "center",
        // paddingTop: 5,
        boxShadow: "2px 4px 6px #888888",
        
    },
    leftContainer: {
        padding: 5,
        width: "20%",
        display: "inline-block"
    },
    middleContainer: {
        width: "60%",
        display: "inline-block",
        verticalAlign: "middle",
        paddingBottom: 20
        },
    rightContainer:{
        width: "20%",
        display: "inline-block",
    }

})
export default function Snackling(props){
    const classes = useStyles(props)
    

    // wherever the snackling is present there must be a function
    // and a state that handles whether the snackling is open or not
    // a clickToClose function must be passed down to the Ex that will
    // close the snackling

    console.log(props.icon)
    return(
        <div className={classes.root + " snackling"} onClick={props.onClick}>
            <div className={classes.leftContainer}>
                {props.icon && props.icon === "plus" && <TinyPlus size={1} theme="white"></TinyPlus>}
                {props.icon && props.icon === "minus" && <TinyMinus size={1} theme="white"></TinyMinus>}
                {props.icon && props.icon === "note" && <TinyNote size={1} theme="white"></TinyNote>}
                {props.icon && props.icon === "question" && <TinyQuestion size={1} theme="white"></TinyQuestion>}
            </div>
            <div className={classes.middleContainer}>
                <F5>{props.value}</F5>
            </div>
            <div className={classes.rightContainer}>
                {props.close && <Ex size={1} theme="none" close={props.close}></Ex>}
            </div>
        </div>
    )
}