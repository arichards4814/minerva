import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import F5 from '../Typing/F5'
import SearchCircle from '../Icons/SearchCircle'
import LoadingAnimation from './LoadingAnimation'

import '../App.css';


const useStyles = makeStyles({
    root2: {
        position: "relative",
        display: "inline-block"
    },
    root: {
        // borderStyle: "solid",
        width: 280,
        height: 325,
        borderRadius: 2,
        // borderWidth: 2,
        boxShadow: "2px 4px 6px #888888",
        display: "inline-block",
        overflowX: 'hidden',

        wordBreak: 'ellipsis',
        margin: props => {
            if(props.margin){
                return props.margin
            } else {
                return 10
            }
        },
        backgroundColor: "white",

        position: "relative",
    },
    hovered: {
        width: 280,
        height: 325,
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
        height: "2%"
    },
    cardImage: {
        height: "50%",
        backgroundColor: "#ED3466"
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
        left: 90
    },
    usertag: {
        position: "relative",
        bottom: 47,
        right: 60
    }
});

export default function Card(props){
    const classes = useStyles(props)
    //hmm, how big should a card be? Should I have sm, md, lg? 
    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        setHovered(true)
    }
    const unHover = () => {
        setHovered(false)
    }


    return(
        <div className={classes.root2} onMouseOver={handleHover} onMouseOut={unHover}>
            <div className={hovered ? classes.hovered : classes.root} >
                <div className={classes.cardHeader}>

                </div>
                <div className={classes.cardImage}>
                    <img src={props.image_url} style={{height: "100%", width: "100%"}}></img>
                    {!props.image_url && <LoadingAnimation />}
                </div>
                <div className={classes.cardTitle}>
                    <F5>{props.title}</F5>
                </div>
                <div className={classes.cardBody}>
                    <div className={classes.bodyText}>{props.description}</div>
                </div>
                <div className={classes.cardFooter}>
                    {/* <Button value="View" onClick={props.onClick}><F4 color="black" >View</F4></Button> */}
                    <div className={classes.searchIcon}>
                        <SearchCircle onClick={props.onClick}/>
                    </div>
                    <div className={classes.usertag}>
                        Created by: {props.user.username}
                    </div>
                </div>
            </div>
        </div>
    )
}