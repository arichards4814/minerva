import React from 'react'
import { makeStyles} from '@material-ui/core'
import * as Fonts from '../schemes/Fonts'


const useStyles = makeStyles({
    root: {
        fontSize: "50px",
        fontFamily: props => Fonts.handleFonts(props),
        color: props => props.color
    }

});

export default function F1(props){
    const classes = useStyles(props)


    return(
        <div className={classes.root}>
            {props.children}
        </div>
    )
}