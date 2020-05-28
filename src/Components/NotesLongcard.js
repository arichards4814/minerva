import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import F5 from '../Typing/F5'
import TinyNote from '../Icons/Tiny/TinyNote'
import TinyTrash from '../Icons/Tiny/TinyTrash'




import { connect } from 'react-redux';
import { setCurrentLesson, setCurrentNotebook, setSelectedNoteIndex, deleteNote } from '../actionCreators'


const useStyles = makeStyles({
    root: {
        // borderStyle: "solid",
        position: "relative",
        overflow: "hidden",
        width: props => {
            if(props.width){
                return props.width
            } else {
                return 400
            }
        },
        height: props => {
            if (props.height) {
                return props.height
            } else {
                return 80
            }
        },
        borderRadius: 10,
        // borderWidth: 2,
        boxShadow: "2px 4px 6px #888888",
        display: "inline-block",
        margin: props => {
            if (props.margin) {
                return props.margin
            } else {
                return 10
            }
        }
    },
    expanded: {
        // borderStyle: "solid",
        position: "relative",
        overflow: "hidden",
        width: props => {
            if (props.width) {
                return props.width
            } else {
                return 400
            }
        },
        height: props => {
            if (props.height) {
                return props.height
            } else {
                return 140
            }
        },
        borderRadius: 10,
        // borderWidth: 2,
        boxShadow: "2px 4px 6px #888888",
        display: "inline-block",
        margin: props => {
            if (props.margin) {
                return props.margin
            } else {
                return 10
            }
        }
    },
    cardHeader: {
        height: "2%"
    },
    cardImage: {
        height: "90%",
        width: "15%",
        backgroundColor: "white",
        display: "inline-block",
        margin: 2,
        verticalAlign: "top"
    },
    rightSide: {
        display: "inline-block",
        verticalAlign: "top",
        maxWidth: "82%",
    },
    cardTitle: {
        height: "12%"
    },
    cardBody: {
        height: "30%",
        width: 250,
        backgroundColor: "white",
        display: "inline-block"
    },
    cardFooter: {
        position: "absolute",
        bottom: 15,
        right: 25,
        fontSize: 10
    },
    tinyTrash: {
        position: "absolute",
        bottom: 10,
        right: 15,
        fontSize: 10
    },
});

const NotesLongcard = props => {
    const classes = useStyles()
    //hmm, how big should a card be? Should I have sm, md, lg? 
    const [expanded, setExpanded] = useState(false)
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        if (props.note.id === props.selectedNoteIndex) {
            setSelected(true)
        } else {
            setSelected(false)
        }
        parseInfo()
    })

    const handleExpand = () => {
        if (expanded){
            setExpanded(false)
        } else {
            setExpanded(true)
        }
    }

    const calculateTime = () => {
        return props.note.material_time_stamp / 60
    }

    const setSelectedFromIcon = () => {
        props.setSelectedNoteIndex(props.note.id)
        setSelected(true)
    }

    const parseInfo = () => {
        var html = props.note.content;
        var div = document.createElement("div");
        div.innerHTML = html;
        var text = div.textContent || div.innerText || "";
        return text
    }

    const calcTimeStamp = () => {
        
        let minutes = Math.floor(props.note.material_time_stamp / 60)
        let seconds = props.note.material_time_stamp % 60
        if (seconds < 10){
            return `Time - ${minutes}:${seconds}0`
        } else {
            return `Time - ${minutes}:${seconds}`
        }
        
    }

    console.log("These are the props.. take note", props)
    return (
        <div className={expanded ? classes.expanded + " expanded" : classes.root + " not-expanded"} onClick={handleExpand}>
            <div className={classes.cardHeader}>

            </div>
            <div className={classes.cardImage}>
                <TinyNote theme={selected ? "minerva": "secondary"} onClick={setSelectedFromIcon}/>
                {/* <HideIcon height={25} width={25} /> */}
            </div>
            <div className={classes.rightSide}>
                <div className={classes.cardTitle}>
                    <F5>{props.note.title}</F5>
                </div>
                <div className={classes.cardBody}>
                    {parseInfo()}
                    {/* <F6>{props.note.description}</F6> */}
                </div>
            </div>
            
            <div className={classes.cardFooter}>
                {calcTimeStamp()}
                {/* {props.note.material_time_stamp} */}
                <div className={classes.tinyTrash} style={{width: 20}}>
                    {expanded && <TinyTrash onClick={() => props.deleteNote(props.note.id)}/>}
                </div>
            </div>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        currentLesson: state.currentLesson,
        selectedNoteIndex: state.selectedNoteIndex,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentLesson: (lesson) => dispatch(setCurrentLesson(lesson)),
        setCurrentNotebook: (notebook) => dispatch(setCurrentNotebook(notebook)),
        setSelectedNoteIndex: (index) => dispatch(setSelectedNoteIndex(index)),
        deleteNote: (id) => dispatch(deleteNote(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesLongcard);