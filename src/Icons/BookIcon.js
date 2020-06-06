import React from 'react';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        height: props => {
            if (props.height) {
                return props.height
            } else {
                return 50
            }
        },
        width: props => {
            if (props.width) {
                return props.width
            } else {
                return 50
            }
        },
        display: "inline-block"
    },
    st0: {
        fill: "#85D2E0"
    },
    st1: {
        fill: "#E9E8CD",
    },
    st2: {
        fill: "#FFFFFF",
    },
    st3: {
        fill: "#99999A",
    },
    st4: {
        fill: "#EC3366",
    },
    st5: {
        fill: "#00B69C",
    },
    st6: {
        fill: "#FFCF06",
    },
    st7: {
        fill: "#76AFB7",
        fillOpacity: 0.1
    }
});


export default function BookIcon(props) {
    const classes = useStyles()


    return (
        <div className={classes.root} onClick={props.onClick}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 225.3 225.06"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >

                <path className={classes.st0} d="M197.47,160.86H15.69c-1.14,0-2.07-0.93-2.07-2.07V53c0-1.14,0.93-2.07,2.07-2.07h181.77
	c1.14,0,2.07,0.93,2.07,2.07v105.8C199.53,159.94,198.61,160.86,197.47,160.86z"/>
                <g>
                    <path className={classes.st1} d="M106.09,68.68v74.42c0,6.06-1.8,11.36-4.49,14.22c-0.7,0.75-1.45,1.33-2.25,1.72
		c-0.76,0.37-1.55,0.56-2.37,0.56h-71c-5.03,0-9.11-7.39-9.11-16.51V68.68c0-9.11,4.08-16.51,9.11-16.51h71
		C102.01,52.18,106.09,59.57,106.09,68.68z"/>
                </g>
                <rect x="24.97" y="66.09" className={classes.st2} width="78" height="4.01" />
                <rect x="25.4" y="97.45" className={classes.st2} width="77.22" height="4.24" />
                <rect x="24.55" y="85.26" className={classes.st2} width="77.22" height="4.24" />
                <rect x="24.55" y="76.24" className={classes.st2} width="77.22" height="4.24" />
                <rect x="25.4" y="109.05" className={classes.st2} width="77.24" height="4.38" />
                <rect x="25.4" y="121.24" className={classes.st2} width="77.24" height="4.38" />
                <rect x="25.4" y="132.52" className={classes.st2} width="77.24" height="4.38" />
                <rect x="25.4" y="142.33" className={classes.st2} width="77.24" height="4.38" />
                <g>
                    <path className={classes.st1} d="M106.98,68.68v74.42c0,6.06,1.8,11.36,4.49,14.22c0.7,0.75,1.45,1.33,2.25,1.72c0.76,0.37,1.55,0.56,2.37,0.56
		h71c5.03,0,9.11-7.39,9.11-16.51V68.68c0-9.11-4.08-16.51-9.11-16.51h-71C111.06,52.18,106.98,59.57,106.98,68.68z"/>
                </g>
                <rect x="110.09" y="66.09" transform="matrix(-1 4.556787e-11 -4.556787e-11 -1 298.1818 136.1915)" className={classes.st2} width="78" height="4.01" />
                <rect x="110.45" y="97.45" transform="matrix(-1 4.553545e-11 -4.553545e-11 -1 298.1141 199.1402)" className={classes.st2} width="77.22" height="4.24" />
                <rect x="111.3" y="85.26" transform="matrix(-1 4.558253e-11 -4.558253e-11 -1 299.8152 174.768)" className={classes.st2} width="77.22" height="4.24" />
                <rect x="111.3" y="76.24" transform="matrix(-1 4.558253e-11 -4.558253e-11 -1 299.8152 156.7146)" className={classes.st2} width="77.22" height="4.24" />
                <rect x="110.43" y="109.05" transform="matrix(-1 4.554522e-11 -4.554522e-11 -1 298.0909 222.4757)" className={classes.st2} width="77.24" height="4.38" />
                <rect x="110.43" y="121.24" transform="matrix(-1 4.556876e-11 -4.556876e-11 -1 298.0909 246.8478)" className={classes.st2} width="77.24" height="4.38" />
                <rect x="110.43" y="132.52" transform="matrix(-1 4.556876e-11 -4.556876e-11 -1 298.0909 269.4146)" className={classes.st2} width="77.24" height="4.38" />
                <rect x="110.43" y="142.33" transform="matrix(-1 4.556876e-11 -4.556876e-11 -1 298.0909 289.0478)" className={classes.st2} width="77.24" height="4.38" />
                <g>
                    <path className={classes.st3} d="M211.1,145.98c0,9.76-5.39,18.25-13.32,22.57c-2.49,0.84-5.14,1.29-7.9,1.29c-9.21,0-17.26-5.01-21.66-12.5
		c-1.24,0.75-2.59,1.33-4.02,1.72c-1.86-3.16-3.07-6.78-3.42-10.64c-1.24,0.46-2.52,0.85-3.86,1.19c0,0,4.32-21.74,19.32-30.27v1.03
		c1.39-1.14,2.88-2.18,4.5-3.05c0.01,0,0.04-0.01,0.05-0.02c2.69-0.9,5.66-1.39,8.93-1.35c0,0-0.32,1.03-1,2.75
		c-0.21,0.53-0.46,1.13-0.75,1.79c1.02,0.08,2.03,0.23,3,0.43C202.46,123.3,211.1,133.62,211.1,145.98z"/>
                </g>
                <g>
                    <path className={classes.st4} d="M215.1,144.23c0,11.34-7.26,20.94-17.32,24.31c-2.49,0.84-5.14,1.29-7.9,1.29c-9.21,0-17.26-5.01-21.66-12.5
		c-1.87-3.17-3.08-6.79-3.44-10.65c-0.08-0.81-0.12-1.62-0.12-2.44c0-9.03,4.61-16.96,11.57-21.52c3.63-2.37,7.9-3.82,12.49-4.03
		c0.38-0.02,0.76-0.04,1.15-0.04c0.71,0,1.41,0.02,2.11,0.1C204.94,119.83,215.1,130.83,215.1,144.23z"/>
                    <path className={classes.st5} d="M193.73,114.2c0,0-0.54,1.78-1.74,4.54c-0.3,0.66-0.63,1.39-1.01,2.16c-2.64,5.47-7.33,13.24-14.74,19.22
		c-3.27,2.64-7.07,4.94-11.46,6.54c-1.24,0.46-2.52,0.85-3.86,1.19c0,0,3.54-17.79,15.32-27.51c1.39-1.14,2.88-2.18,4.5-3.05
		c0.01,0,0.04-0.01,0.05-0.02C184.46,115.31,188.74,114.12,193.73,114.2z"/>
                    <path className={classes.st6} d="M200.41,134.15c0,0,7.96,4.72,5.81,19.19C204.92,146.83,202.91,140.45,200.41,134.15z" />
                </g>
                <rect x="81.67" y="50.77" className={classes.st7} width="48.82" height="110.35" />
            </svg>
        </div>
    )
}