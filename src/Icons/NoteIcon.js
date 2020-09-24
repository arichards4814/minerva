import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        fill: "#FFFFFF", 
        stroke: "#000000", 
        strokeWidth: 7, 
        strokeMiterlimit: 10
    }
});

export default function NoteIcon(props){
    const classes = useStyles(props)

    return(
        <div >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 240 200"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <polygon className={classes.root} points="81.55,87.26 81.55,182.43 176.16,182.43 176.16,56.85 112.8,56.85 " />
                <line className={classes.root} x1="101.26" y1="101.9" x2="102.26" y2="101.9" />
                <line className={classes.root} x1="101.26" y1="128.37" x2="102.26" y2="128.37" />
                <line className={classes.root} x1="101.26" y1="152.02" x2="102.26" y2="152.02" />
            </svg>
        </div>
    )
}