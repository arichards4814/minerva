import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


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
                    {/* <path d="M211.8,69.2l8.9,21.5L97.7,141.4l-8.9-21.5L211.8,69.2 M214,63.9L83.7,117.7l11.9,28.9l130.3-53.8L214,63.9L214,63.9z" /> */}
                </g>
                <g>

                    <rect x="133.4" y="120.5" transform="matrix(0.4406 -0.8977 0.8977 0.4406 -87.4632 237.7323)" className={classes.st0} width="27.2" height="137" />
                    {/* <path d="M92.4,149.3l119.4,58.6l-10.2,20.9L82.2,170.2L92.4,149.3 M90.6,144l-13.8,28l126.6,62.1l13.8-28L90.6,144L90.6,144z" /> */}
                </g>
                <g>
                    <circle className={classes.st1} cx="227.5" cy="72.5" r="48.5" />
                    {/* <path d="M227.5,26c25.6,0,46.5,20.9,46.5,46.5S253.1,119,227.5,119S181,98.1,181,72.5S201.9,26,227.5,26 M227.5,22 */}
		C199.6,22,177,44.6,177,72.5s22.6,50.5,50.5,50.5S278,100.4,278,72.5S255.4,22,227.5,22L227.5,22z"/>
                </g>
                <g>
                    <circle className={classes.st1} cx="227.5" cy="222.5" r="48.5" />
                    {/* <path d="M227.5,176c25.6,0,46.5,20.9,46.5,46.5S253.1,269,227.5,269S181,248.1,181,222.5S201.9,176,227.5,176 M227.5,172
		c-27.9,0-50.5,22.6-50.5,50.5s22.6,50.5,50.5,50.5s50.5-22.6,50.5-50.5S255.4,172,227.5,172L227.5,172z"/> */}
                </g>
                <g>
                    <circle className={classes.st1} cx="68.5" cy="141.5" r="48.5" />
                    {/* <path d="M68.5,95c25.6,0,46.5,20.9,46.5,46.5S94.1,188,68.5,188S22,167.1,22,141.5S42.9,95,68.5,95 M68.5,91
		C40.6,91,18,113.6,18,141.5S40.6,192,68.5,192s50.5-22.6,50.5-50.5S96.4,91,68.5,91L68.5,91z"/> */}
                </g>
            </svg>
        </div>
    )
}