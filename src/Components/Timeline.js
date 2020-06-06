//this timeline component will take many notes from the redux

import React from 'react'
import { makeStyles } from '@material-ui/core'
import Notetag from './Notetag'


// redux
import { connect } from 'react-redux';
import { setSelectedNoteIndex } from '../actionCreators'



const useStyles = makeStyles({
    root: {
        width: 840,
        position: 'relative'
    },
    st0: {
        fill: "#FFD000",
    }
});

const  Timeline = props => {
    const classes = useStyles(props)


    const renderTags = () => {
        console.log(props.notes)
        if(props.notes){
            return props.currentNotebook.notes.map(note => <Notetag note={note} selected={false} totalTime={props.totalTime} position={note.material_time_stamp} goToSpecifiedTime={props.goToSpecifiedTime}/>)
        }
    }

    return(
        <div className={classes.root}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 829.99 20.67"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <rect x="9.5" y="3.34" class={classes.st0} width="811" height="14" />
            </svg>

            {renderTags()}
            {/* <Notetag selected={true} totalTime={1000} position={50} goToSpecifiedTime={props.goToSpecifiedTime}/>
            <Notetag selected={false} totalTime={1000} position={150} goToSpecifiedTime={props.goToSpecifiedTime}/>
            <Notetag selected={false} totalTime={props.totalTime} position={89} goToSpecifiedTime={props.goToSpecifiedTime}/> */}
            {/* //need to pass down total time in video
            //need to pass down the timestamp
            //need to divide to get the real number (could be a percentage or something or pixels
            //will figure it out.) */}
        </div>
    )
}




const mapStateToProps = (state) => {
    return {
        selectedNoteIndex: state.selectedNoteIndex,
        currentNotebook: state.currentNotebook
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedNoteIndex: (index) => dispatch(setSelectedNoteIndex(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);