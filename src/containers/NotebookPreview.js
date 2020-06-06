import React from 'react'
import { makeStyles } from '@material-ui/core' 
import CustomImage from '../components/CustomImage'
import F3 from '../Typing/F3'
import F4 from '../Typing/F4'
import Button from '../components/Button'

const useStyles = makeStyles({
    root: {
        height: 800,
    },
    debug:{
        height:800,
        borderStyle: "solid"
    },
    previewInfo: {
        height: 300,
        margin: 10,
        borderStyle: "solid",
        borderRadius: "14px",
        padding: 10
    },
    body: {
        height: "80%"
    }  ,
    footer: {
        textAlign: "center"
    }    
})

const NotebookPreview = props => {
    const classes = useStyles(props)

    console.log("in notebook preview", props)
    return(
        <div className={props.debug ? classes.debug : classes.root}>
           
            {/* button */}
            <div className={classes.previewInfo}>
                <div className={classes.body}>
                    <F3 font="secondary">Notebook Preview:</F3>
                    <F3>{props.title}</F3>
                    <F4>{props.description}</F4>
                </div>
                <div className={classes.footer} >
                    <Button onClick={props.onClick}>Open Notebook</Button>
                </div>
            </div>
        </div>
    )
}


export default NotebookPreview