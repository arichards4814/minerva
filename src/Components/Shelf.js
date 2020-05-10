import React, { useState } from 'react'
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
    },
    hovered: {
        height: 50,
        width: "96%",
        padding: 10,
        margin: 1,
        backgroundColor: "rgb(220,220,220, .8)",
        borderStyle: "solid",
        cursor: "pointer",
        borderColor: props => {
            if (props.selection === props.value) {
                return "#ED3466"
            } else {
                return "#00B79D"
            }
        }
    }
})

const Shelf = props =>{
    const classes = useStyles(props)
   
    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        setHovered(true)
    }
    const handleMouseOut = () => {
        setHovered(false)
    }


    return(
        <div className={hovered ? classes.hovered : classes.root} value={props.value} onClick={() => props.setSelection(props.value)} onMouseOver={handleHover} onMouseOut={handleMouseOut}>
            {props.title}
        </div>
    )
}

export default Shelf