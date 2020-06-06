import React from 'react';
import { makeStyles } from '@material-ui/core';
import HandleScheme from '../../Schemes/HandleScheme'


const useStyles = makeStyles({
    root: {
        height: props => {
            if (props.size) {
                return props.size * 30
            } else {
                return 30
            }
        },
        cursor: "pointer",
        marginBottom: props => {
            if (props.marginBottom){
                return props.marginBottom
            }
        }
    },
    st0: {
        fill: props => HandleScheme(props)
    },
    st1: {
        fill: "none",
        stroke: props => HandleScheme(props),
        strokeWidth: 4,
        strokeMiterLimit: 10
    }
});

export default function TinyTrash(props) {
    const classes = useStyles(props)

    // needs to go to 155 on component did mount or on click or something.
    // if style.theme === "minerva" theme it like it should be

    return (
        <div className={classes.root} onClick={props.onClick}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 58.28 58.56"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>
                    <g>
                        <path className={classes.st0} d="M45.66,56.15H13.51L7.28,13.97h42.69L45.66,56.15z M16.85,52.28h25.32l3.52-34.45H11.76L16.85,52.28z" />
                    </g>
                    <rect x="20.72" y="23.47" className={classes.st0} width="2.18" height="22.86" />
                    <rect x="28.23" y="23.47" className={classes.st0} width="2.18" height="22.86" />
                    <rect x="36.07" y="23.47" className={classes.st0} width="2.18" height="22.86" />
                    <path className={classes.st0} d="M53.12,10.79l-0.22,2.45L5.15,8.91l0.22-2.45c0.13-1.45,1.41-2.51,2.86-2.38l14.61,1.33L22.9,4.8
		                c0.12-1.45,1.4-2.51,2.86-2.38l7.68,0.7c1.45,0.12,2.52,1.4,2.38,2.85l-0.06,0.61l14.98,1.35C52.18,8.07,53.25,9.35,53.12,10.79z"
                    />
                </g>
            </svg>
        </div>
    )
}