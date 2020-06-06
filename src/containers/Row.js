import React from 'react'
import { makeStyles} from '@material-ui/core'


const handleProps = (marginProps) => {
    if (marginProps){
        return marginProps
    } else {
        return 0
    }
}

const useStyles = makeStyles({
    root:{
        marginTop: props => handleProps(props.marginTop),
        marginLeft: props => handleProps(props.marginLeft),
        marginRight: props => handleProps(props.marginRight),
        marginBottom: props => handleProps(props.marginBottom),
    }
})
export default function Row(props){
    const classes = useStyles(props)
    

    return(
        <div className={classes.root}>
            {props.children}
        </div>
    )
}