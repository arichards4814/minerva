import React from 'react';
import { makeStyles } from '@material-ui/core';
import '../../assets/scss/HeaderAnimations.scss';



const useStyles = makeStyles({
    st0: {
        fill: "#04B89F"
    },
    st1: {
        fillOpacity: .2
    },
    st2: {
        fill: "#FFD009"
    },
    st3: {
        fill: "#754E2A"
    },
    st4: {
        fill: "#00AC62"
    },
    st5: {
        fill: "#603A17"
    },
    st6: {
        fill: "#563419"
    },
    st7: {
        fill: "#ED3466"
    },
    st8: {
        fill: "#00B79D"
    }
});

export default function ExploreHeader(props) {
    const classes = useStyles(props)

    // needs to go to 155 on component did mount or on click or something.
    // if style.theme === "minerva" theme it like it should be

    return (
        <div >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 732.85 196.81"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>
                    <g>
                        <path className={classes.st0} d="M2,189.71c0,0,403.05-90.73,716.42,0" />
                    </g>
                    <g>
                        <path className={classes.st1 } d="M214.25,172.3c0,0,197.65-35.09,366.59,3.77" />
                        <path className={classes.st2 + " apple_fall"} d="M449.73,161.43c0,0-1.82,5.91-7.14,7.22C442.58,168.65,444.06,161.34,449.73,161.43z" />
                        <path className={classes.st3} d="M407.87,172.3h-51.81c11.1-29.9,13.81-66.87,12.69-107.06h22.22C388.54,105.43,396.26,142.4,407.87,172.3z" />
                        <path className={classes.st4 + " tree_shake"} d="M453.05,57.25c0,23.67-19.19,42.86-42.86,42.86c-11.77,0-22.43-4.75-30.18-12.44
			c-5.36,12.03-17.41,20.42-31.43,20.42c-19,0-34.39-15.4-34.39-34.4c0-6.33,1.71-12.26,4.69-17.35
			c-11.98-5.37-20.33-17.41-20.33-31.39c0-19,15.4-34.39,34.39-34.39c0.33,0,0.65,0,0.98,0.01c7.31-13.19,21.37-22.11,37.51-22.11
			c12.54,0,23.81,5.38,31.66,13.96c21.13,2.65,37.48,20.68,37.48,42.53c0,0.68-0.02,1.35-0.05,2.02
			C448.26,34.72,453.05,45.42,453.05,57.25z"/>
                        <circle className={classes.st5} cx="380.09" cy="125.15" r="9.34" />
                        <path className={classes.st6} d="M389.43,125.15c0,5.16-4.18,9.34-9.34,9.34c-3.03,0-5.72-1.44-7.43-3.68l14.95-11.19
			C388.76,121.17,389.43,123.08,389.43,125.15z"/>
                        <circle className={classes.st7} cx="344.7" cy="81.13" r="5.49" />
                        <circle className={classes.st7} cx="322.18" cy="38.27" r="5.49" />
                        <circle className={classes.st7} cx="343" cy="7.04" r="5.49" />
                        <circle className={classes.st7} cx="359.67" cy="51.52" r="5.49" />
                        <circle className={classes.st7} cx="408.09" cy="66.13" r="5.49" />
                        <circle className={classes.st7} cx="408.09" cy="25.39" r="5.49" />
                        <circle className={classes.st7} cx="427.63" cy="51.52" r="5.49" />
                        <circle className={classes.st7 + " apple_fall"} cx="449.73" cy="166.92" r="5.49" />
                        <path className={classes.st2 } d="M422.69,157.02c0,0-1.09,3.54-4.27,4.32C418.42,161.34,419.3,156.96,422.69,157.02z" />
                        <circle className={classes.st7} cx="422.69" cy="160.3" r="3.28" />
                        <circle className={classes.st7} cx="349.08" cy="164.18" r="3.88" />
                        <path className={classes.st2 } d="M320.76,32.24c0,0,3.56,5.66,9.49,5.53C330.24,37.76,326.65,30.55,320.76,32.24z" />
                        <path className={classes.st2 } d="M343.83,0.6c0,0-1.82,5.91-7.14,7.22C336.69,7.82,338.17,0.51,343.83,0.6z" />
                        <path className={classes.st2 } d="M408.92,18.95c0,0-1.82,5.91-7.14,7.22C401.78,26.17,403.26,18.86,408.92,18.95z" />
                        <path className={classes.st2 } d="M408.5,60.64c0,0-1.82,5.91-7.14,7.22C401.36,67.86,402.83,60.55,408.5,60.64z" />
                        <path className={classes.st8} d="M389.43,75.64c0,0,21.92,10.8,38.2,2.91" />
                        <path className={classes.st8} d="M333.91,18.95c0,0,23.28,13.82,35.29,11.93" />
                    </g>
                </g>
            </svg>
        </div>
    )
}