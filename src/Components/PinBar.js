import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Pin from '../icons/Pin';
import TinyNotebook from '../icons/Tiny/TinyNotebook';
import { useHistory } from "react-router-dom";

// redux
import { connect } from 'react-redux';
import { fetchUsersNotebooks, unpinNotebook} from '../actionCreators';

const useStyles = makeStyles({
    root: {
        height: 100,
    },
    card: {
        height: 50,
        width: 300,
        // borderStyle: "solid",
        boxShadow: "2px 2px 2px 2px #888888",
        display: "inline-block",
        borderRadius: "4px",
        padding: 15,
        position: 'relative'
    },
    icon: {
        padding: 15,
        paddingTop: 30,
        display: "inline-block"
    },
    secondIcon: {
        position: "absolute",
        top: 10,
        right: -120,
        display: "inline-block"
    }
})
const PinBar = props => {
    const classes = useStyles(props)
    const [pinned, setPinned] = useState({})
    const history = useHistory()

    useEffect(() => {
        findPinnedNotebook()
    })

    const findPinnedNotebook = () => {
        setPinned(props.notebooks.find(notebook => notebook.pinned === true))
    }

    const unPin = () => {
        if (pinned && pinned.id){
            props.unpinNotebook(pinned.id, pinned)
        }
    }

    const goToNotebook = () =>{
        if (pinned && pinned.id){
            history.push(`/notebooks/${pinned.id}`)
        } else {
            console.log("No Pinned Notebook")
        }
    }

    return(
        <div className={classes.root}>
            <div className={classes.icon}>
                <Pin onClick={unPin} /> 
            </div> 
            <div className={classes.card}>
                {pinned && pinned.title ? pinned.title :  "No Pinned Notebook"}
                <div className={classes.secondIcon}>
                    <TinyNotebook onClick={goToNotebook}/>
                </div>
            </div>
        </div>
    )
}




const mapStateToProps = (state) => {
    return {
        notebooks: state.notebooks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsersNotebooks: (id) => dispatch(fetchUsersNotebooks(id)),
        unpinNotebook: (id, data) => dispatch(unpinNotebook(id, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinBar);