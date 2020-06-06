import React from 'react'
import { makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    root:{
        width: props => { return `${props.width * 8.3}%`},
        textAlign: props => {
            if(props.align){
                switch (props.align) {
                    case "left":
                        return "left"
                        break;
                    case "center" || "middle":
                        return "center"
                        break;
                    case "right":
                        return "right"
                        break;
                    default:
                        return "left"
                    // code block
                }
            } else {
                return "left"
            }},
        marginLeft: props => {
            if (props.marginLeft){
                return props.marginLeft
            } else {
                return 0
            }
        },
        // backgroundColor: "blue" ,
        display: "inline-block",
        wordWrap: "break-word",
        verticalAlign: "top"
    }
});

export default function Layout(props){
    const classes = useStyles(props)


return(
    <div className={classes.root}>
        {props.children}
    </div>
)

}