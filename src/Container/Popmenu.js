import React from 'react'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        width: props => {
            if(props.width){
                return props.width
            } else {
                return 100
            }
        },
        height: props => {
            if (props.height){
                return props.height
            } else {
                return 50
            }
        },
        boxShadow: "2px 2px 4px 1px",
        padding: 3
    }
})

const Popmenu = props => {
    const classes = useStyles(props)

    return(
        <div className={classes.root}>
            {props.children}
        </div>
    )
}
export default Popmenu