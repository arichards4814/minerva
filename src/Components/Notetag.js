import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

// redux
import { connect } from 'react-redux';
import { setSelectedNoteIndex } from '../actionCreators'


const useStyles = makeStyles({
    root:{
        height: 25,
        width: 13.51,
        position: "absolute",
        left: props => Math.floor((840 * props.position) / props.totalTime),
        bottom: 0
    },
    st0: {
        fill: "#00D1A9",
    },
    selected: {
        fill: "#ED3466"
    }
});

const Notetag = props => {
    const [selected, setSelected] = useState(false)
    const classes = useStyles(props)

    useEffect(() => {
        if(props.note.id === props.selectedNoteIndex){
            setSelected(true)
            console.log("true")
        } else {
            setSelected(false)

            console.log("false")
        }
    })

    const setSelectedPassUp = () => {
        console.log("note id", props.note.id)

        console.log("selected index", props.selectedNoteIndex)
        props.setSelectedNoteIndex(props.note.id)
        setSelected(true)
    }

    return(
        <div className={classes.root + " notetag"} onClick={() => props.goToSpecifiedTime(props.position, setSelectedPassUp)}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 13.51 25"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
            <polygon class={selected ? classes.selected : classes.st0} points="0,25 13.51,25 13.51,7.43 6.76,0 0,7.43 " />
        </svg>

        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        selectedNoteIndex: state.selectedNoteIndex
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedNoteIndex: (index) => dispatch(setSelectedNoteIndex(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notetag);