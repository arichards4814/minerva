import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    st0: {
        fill: "none",
        stroke: "#010101",
        strokeMiterlimit: 10
    },
    st1: {
        fill: "#FFFFFF",
    },
    st2: {
        stroke: "#010101",
    }
});

export default function DetailedNoteIcon(props) {
    const classes = useStyles(props)


    return (
        <div>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 240 200"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <rect x="47.27" y="68.56" className={classes.st0} width="159.59" height="105.84" />
                <g>
                    <line className={classes.st1} x1="61.64" y1="88.77" x2="93.73" y2="88.77" />
                    <rect x="61.64" y="87.84" className={classes.st2} width="32.08" height="1.86" />
                </g>
                <g>
                    <line className={classes.st1} x1="62.06" y1="102.94" x2="188.52" y2="102.94" />
                    <rect x="62.06" y="102.01" className={classes.st2} width="126.46" height="1.86" />
                </g>
                <g>
                    <line className={classes.st1} x1="62.06" y1="110.44" x2="188.52" y2="110.44" />
                    <rect x="62.06" y="109.51" className={classes.st2} width="126.46" height="1.86" />
                </g>
                <g>
                    <line className={classes.st1} x1="62.06" y1="117.94" x2="188.52" y2="117.94" />
                    <rect x="62.06" y="117.01" className={classes.st2} width="126.46" height="1.86" />
                </g>
                <g>
                    <line className={classes.st1} x1="62.06" y1="128.98" x2="188.52" y2="128.98" />
                    <rect x="62.06" y="128.05" className={classes.st2} width="126.46" height="1.86" />
                </g>
                <g>
                    <line className={classes.st1} x1="62.06" y1="136.48" x2="188.52" y2="136.48" />
                    <rect x="62.06" y="135.55" className={classes.st2} width="126.46" height="1.86" />
                </g>
                <g>
                    <line className={classes.st1} x1="62.06" y1="143.98" x2="188.52" y2="143.98" />
                    <rect x="62.06" y="143.06" className={classes.st2} width="126.46" height="1.86" />
                </g>
                <g>
                    <rect x="155.19" y="78.68" className={classes.st2} width="34.38" height="1.86" />
                </g>
            </svg>

        </div>
    )
}