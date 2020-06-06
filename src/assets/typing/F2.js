import React from 'react'
import { makeStyles} from '@material-ui/core'
import * as Fonts from '../schemes/Fonts'

const useStyles = makeStyles({
    root: {
        fontSize: "40px",
        fontFamily: props => Fonts.handleFonts(props),
        color: props => props.color
    }

});

export default function F2(props){
    const classes = useStyles(props)


    return(
        <div className={classes.root}>
            {props.children}
        </div>
    )
}