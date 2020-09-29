import React from 'react'
import { render } from '@testing-library/react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    st0: {
        fill: "#ED3466"
    },
    st1: {
        fill: "#00B79D"
    },
    st2: {
        fill: "#FFD009"
    },
    st3: {
        fill: "#00AC62"
    },
});

export default function LoadingAnimation(props){
    const classes = useStyles(props)

    return(
        <div className="loading-animation">
            <svg
                width="20%"
                // height="100%"
                viewBox="0 0 400 200"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <circle id="first-circle" className={classes.st0 + " load1"} cx="57" cy="166" r="34" />
                <circle id="second-circle" className={classes.st1} cx="151.98" cy="166" r="34" />
                <circle id="third-circle" className={classes.st2} cx="246.97" cy="166" r="34" />
                <circle id="fourth-circle" className={classes.st3} cx="343" cy="166" r="34" />

                <animate 
                    xlinkHref="#first-circle"
                    attributeName="cy"
                    from="166"
                    to="140" 
                    dur="1s"
                    begin="0s"
                    fill="freeze"
                    repeatCount="indefinite"
                        id="circ-anim" />

                <animate
                    xlinkHref="#second-circle"
                    attributeName="cy"
                    from="166"
                    to="140"
                    dur="1s"
                    begin="circ-anim.begin + .1s"
                    repeatCount="indefinite"
                    fill="freeze"
                    id="circ1-anim" />

                <animate
                    xlinkHref="#third-circle"
                    attributeName="cy"
                    from="166"
                    to="140"
                    dur="1s"
                    begin="circ1-anim.begin + .1s"
                    repeatCount="indefinite"
                    fill="freeze"
                    id="circ2-anim" />

                <animate
                    xlinkHref="#fourth-circle"
                    attributeName="cy"
                    from="166"
                    to="140"
                    dur="1s"
                    repeatCount="indefinite"
                    begin="circ2-anim.begin + .1s"
                    fill="freeze"/>
            </svg>
        </div>
    )
}