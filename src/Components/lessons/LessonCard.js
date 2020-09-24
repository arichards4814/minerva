import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import F5 from '../../assets/typing/F5'
import SearchCircle from '../../icons/SearchCircle'


const useStyles = makeStyles({
    root2: {
        position: "relative",
        display: "inline-block"
    },
    root: {
        // borderStyle: "solid",
        width: 350,
        height: 400,
        borderRadius: 2,
        // borderWidth: 2,
        boxShadow: "2px 4px 6px #888888",
        display: "inline-block",
        overflowX: 'hidden',

        wordBreak: 'ellipsis',
        margin: props => {
            if (props.margin) {
                return props.margin
            } else {
                return 10
            }
        },
        backgroundColor: "white",

        position: "relative",
    },
    hovered: {
        width: 350,
        height: 400,
        borderRadius: 8,
        // borderWidth: 2,
        boxShadow: "10px 10px 6px #888888",
        display: "inline-block",
        overflowX: 'hidden',
        margin: props => {
            if (props.margin) {
                return props.margin
            } else {
                return 10
            }
        },
        position: "relative",
        transform: 'translateX(10px)',
        transform: 'translateY(-10px)',
        cursor: 'pointer',
        backgroundColor: "white"
    },
    cardHeader: {
        height: "8%",
        paddingTop: 5,
        textAlign: "center"
    },
    cardImage: {
        height: "45%",
        backgroundColor: "#FFD000"
    },
    cardTitle: {
        paddingTop: 8,
        paddingLeft: 10,
        height: "12%",
        backgroundColor: "#ED3466",
        color: "white"
    },
    cardBody: {
        padding: 10,
        height: "28%",
        backgroundColor: "#FFD000"
    },
    bodyText: {
        whiteSpace: "pre-wrap",
        width: "100%",
        height: "75%",
        overflowY: "hidden"
    },
    cardFooter: {
        textAlign: "center",
        height: "2%",
        fontSize: 12
    },
    searchIcon: {
        position: "relative",
        bottom: 30,
        left: 130
    },
    usertag: {
        position: "relative",
        bottom: 47,
        right: 60
    }
});

export default function Card(props) {
    const classes = useStyles()
    //hmm, how big should a card be? Should I have sm, md, lg? 
    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        // setHovered(true)
    }
    const unHover = () => {
        // setHovered(false)
    }


    return (
        <div className={classes.root2} onMouseOver={handleHover} onMouseOut={unHover}>
            <div className={hovered ? classes.hovered : classes.root} >
                <div className={classes.cardHeader}>
                    Lesson from <b>{props.ccTitle}</b>
                </div>
                <div className={classes.cardImage}>
                    {props.image_url && <img src={props.image_url} style={{ height: "100%", width: "100%" }}></img>}
                </div>
                <div className={classes.cardTitle}>
                    <F5>{props.title}</F5>
                </div>
                <div className={classes.cardBody}>
                    <div className={classes.bodyText}>{props.description}</div>
                </div>
                <div className={classes.cardFooter}>
                    <div className={classes.searchIcon}>
                        <SearchCircle onClick={props.onClick} />
                    </div>
                    <div className={classes.usertag}>
                        Created by: {props.user.username}
                    </div>
                </div>
            </div>
        </div>
    )
}