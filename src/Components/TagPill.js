import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import HandleScheme from '../assets/schemes/HandleScheme'
import { HandleSchemeTextColor } from '../assets/schemes/HandleScheme'
import { useHistory } from 'react-router-dom'
import Ex from '../icons/Tiny/Ex'

const useStyles = makeStyles({
    root:{
        borderRadius: 18,
        borderStyle: "solid",
        maxWidth: 110,
        padding: 5,
        borderWidth: 4,
        textAlign: "center",
        color: props => HandleSchemeTextColor(props),
        borderColor: props => HandleScheme(props),
        cursor: "pointer",
        display: "inline-block",
        margin: 2
    },
    exIcon: {
        display: "inline-block",
        width: "100%"
    },
    rootHovered: {
        borderRadius: 18,
        borderStyle: "solid",
        maxWidth: 110,
        padding: 5,
        borderWidth: 4,
        textAlign: "center",
        color: props => HandleSchemeTextColor(props),
        borderColor: props => HandleScheme(props),
        cursor: "pointer",
        display: "inline-block",
        margin: 2,
        backgroundColor: "rgb(220,220,220, .8)"
    },
})
const TagPill = props => {
    const classes = useStyles(props)
    const history = useHistory()


    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        setHovered(true)
    }
    const handleMouseOut = () => {
        setHovered(false)
    }     

    const handleClick = () => {
        if(!props.exClick){
            history.push(`/explore?tag=${props.name}`)
        }
    }
    // console.log(props)
    return (
        <div className={hovered ? classes.rootHovered : classes.root} onClick={handleClick} onMouseOver={handleHover} onMouseOut={handleMouseOut}>
            <div className={classes.exIcon}>{props.name ? props.name : "None"} </div> {props.exClick && <div className={classes.exIcon}><Ex onClick={() => props.exClick(props.name)} /></div> }
        </div>
    )
}


export default TagPill


