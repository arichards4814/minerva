import React, { useState } from 'react'
import "../assets/scss/Button.scss"

import { makeStyles } from '@material-ui/core'
import HandleScheme from '../assets/schemes/HandleScheme'
import { HandleSchemeTextColor } from '../assets/schemes/HandleScheme'


const useStyles = makeStyles({
    root: {
        position: "inline-block",
        height: props =>{
            if(props.height){
                return props.height
            } else {
                return 40
            }
        },
        backgroundColor: props => HandleScheme(props),
        color: props => HandleSchemeTextColor(props),
        margin: props => {
            if(props.margin){
                return props.margin
            } else {
                return 0
            }
        }
    }
})

export default function Button(props){
    const classes = useStyles(props)

    const [rippling, setRippling] = useState(false)


    const clickHandler = (e) => {
        e.preventDefault()
        if (props.onClick){
            props.onClick()
        }
            
        console.log(rippling)
        setRippling(true)
        setTimeout(function () { setRippling(false) }, 1000);
    }
    
    
    return(
        <div>
            <button className={classes.root + " minerva-button js-ripple"} onClick={props.onClick}>
                <div className={rippling ? "c-ripple js-ripple  is-active" : "c-ripple js-ripple"}>
                    <span className="c-ripple__circle" ></span>
                </div>{props.children}</button>
        </div>
    )
}