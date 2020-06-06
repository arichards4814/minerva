import React from 'react'
import { makeStyles } from '@material-ui/core'
import HandleScheme from '../assets/schemes/HandleScheme'

const useStyles = makeStyles({
    root: {
        width: 500,
        borderColor: props => HandleScheme(props),
        borderStyle: "solid",
        borderWidth: 6,
        paddingLeft: 10
    },
    rounded: {
        width: 500,
        borderColor: props => HandleScheme(props),
        borderStyle: "solid",
        borderWidth: 6,
        borderRadius: "40px",
        height: 50,
        paddingLeft:10
    }
})

export default function TitleBox(props){
    const classes = useStyles(props)
    //class name will be determined 
    //by what props this guy got handed down
    //style= square or rounded required. 
    
    return(
        <div className={props.style === "rounded" ? classes.rounded : classes.root}>
            {props.children}
        </div>
    )
}