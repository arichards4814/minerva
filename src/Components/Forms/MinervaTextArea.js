import React from 'react'
import { makeStyles } from '@material-ui/core'
import HandleScheme from '../../Schemes/HandleScheme'

const useStyles = makeStyles({
    root: {
        borderWidth: 8,
        borderColor: props => HandleScheme(props),
        borderStyle: "solid",
        borderRadius: "40px",
        paddingLeft: 20,
        width: props => {
            if(props.width){
                return props.width
            } else {
                return 300
            }
        },
        height: props => {
            if (props.height) {
                return props.height
            } else {
                return 150
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
    }
})

export default function MinervaTextArea(props){
    const classes = useStyles(props)

    return(
        <input className={classes.root} name="textarea" cols={70} rows={50} type={props.type} onChange={props.onChange} value={props.value} placeholder={props.placeholder}></input>
    )
}