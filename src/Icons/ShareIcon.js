import React from 'react'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        width: 35,
        display: "inline-block"
    },
    st0: {
        fill: "#ED3466"
    },
    st1: {
        fill: "#22B573"
    }
});

export default function Share(props) {
    const classes = useStyles(props)
    

    return (
        <div className={classes.root} >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            ><g>
                    <rect x="86.3" y="91.7" transform="matrix(0.9244 -0.3814 0.3814 0.9244 -28.4497 66.9826)" className={classes.st0} width="137" height="27.2" />
                </g>
                <g>

                    <rect x="133.4" y="120.5" transform="matrix(0.4406 -0.8977 0.8977 0.4406 -87.4632 237.7323)" className={classes.st0} width="27.2" height="137" />
                </g>
                <g>
                    <circle className={classes.st1} cx="227.5" cy="72.5" r="48.5" />
                </g>
                <g>
                    <circle className={classes.st1} cx="227.5" cy="222.5" r="48.5" />
                </g>
                <g>
                    <circle className={classes.st1} cx="68.5" cy="141.5" r="48.5" />
                  </g>
            </svg>
        </div>
    )
}