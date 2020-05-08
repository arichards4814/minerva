import React from 'react'
import  { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        height: 50,
        width: "96%",
        padding: 10,
        margin: 1,
        borderStyle: "solid",
        cursor: "pointer",
        borderColor: props => {
            if(props.selection === props.value){
                return "#ED3466"
            } else {
                return "#00B79D"
            }
        }
    }
})

const Shelf = props =>{
    const classes = useStyles(props)
    console.log("selection" , props.selection)
    console.log("title", props.title)
    return(
        <div className={classes.root} value={props.value} onClick={() => props.setSelection(props.value)}>
            {props.title}
        </div>
    )
}

export default Shelf