import React from 'react'
import { makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        height: 20,
        width: props => {
            if (props.width){
                return props.width
            } else {
                return 60
            }
        },
        backgroundColor: "#04B89F",
        position: "relative",
        bottom: 20,
        right: props => {
            if(props.right){
                return props.right
            } else {
                return 0
            }
        },
        paddingLeft: 4,
        paddingRight: 4,
        textAlign: "center",
        visibility: props => props.showing,
        borderRadius: "2px",
        fontSize: "14px"
    }
})

export default function Tooltip(props){ 
    const classes = useStyles(props)

    const handleClasses = () => {
        if (props.showing === "visible"){
            return classes.root + " tooltip"
        } else {
            return classes.root
        }
    }
return(
    <div className={handleClasses()}>
        {props.content}
    </div>
)
}