import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import Ex from '../icons/Tiny/Ex'
import F5 from '../assets/typing/F5'
import TinyEdit from '../icons/Tiny/TinyEdit'


// redux
import { connect } from 'react-redux';
import { toggleOverlay, patchNotebooks } from '../actionCreators'


const useStyles = makeStyles({
    root: {
        position: "fixed",
        height: "100%",
        width: "100%",
        opacity: .7,
        backgroundColor: "black",
        zIndex: 100
    },
    menu: {
        position: "fixed",
        left: "20%",
        height: 400,
        width: 850,
        top: 30,
        backgroundColor: "white",
        zIndex: 105,
        borderRadius: "2px",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "gray",
        paddingLeft: 40,
        paddingTop: 40
        
        // boxShadow: "2px 2px 10px 10px #FFFFFF"
    },
    ex: {
        position: "absolute",
        right: -100,
        top: 20
    },
    input: {
        width: 200,
        borderStyle: "solid",
        borderRadius: "4px",
        height: 20,
        fontSize: 14
    },
    button: {
        backgroundColor: "#00B79D",
        color: "white",
        fontSize: 14,
        outline: "none"

    }
})
const Overlay = props => {
    const classes = useStyles(props)
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState("")

    const updateNotebook = () => {

        let notebookCopy = props.currentNotebook
        notebookCopy.title = newTitle
        console.log(notebookCopy)
        props.patchNotebooks(notebookCopy, props.currentNotebook.id)
        setEditing(false)
    }

    const handleChange = (e) => {
        setNewTitle(e.target.value)
    }


    return (
        <React.Fragment>
            <div className={classes.root}>
                
            </div>
            <div className={classes.menu}>
                <div className={classes.ex}>
                    <Ex onClick={props.toggleOverlay}/>
                </div>
                
                {console.log(props.currentNotebook)}
                <F5>Current Notebook Information</F5>
                {editing ?
                <div><p>
                    Notebook Title: <input className={classes.input} value={newTitle} onChange={handleChange}></input>
                    <button className={classes.button} onClick={updateNotebook}>Change Notebook Title</button> 
                    </p>
                </div>
                    :
                    <p><div style={{ width: 20 }}><TinyEdit size={2} onClick={() => setEditing(!editing)}/></div> Notebook: {props.currentNotebook.title}</p>
                }
                <p>Lesson: {props.currentNotebook.lessons.length > 0 ? props.currentNotebook.lessons[0].title : "No lesson associated with this notebook."}</p>
                <p>Lesson Type: {props.currentNotebook.lessons.length > 0 ? props.currentNotebook.lessons[0].lesson_type : "No lesson associated with this notebook."}</p>
                <p>Material: {props.currentNotebook.lessons.length > 0 ? <a href={props.currentNotebook.material_url}>{props.currentNotebook.lessons[0].material_url}</a> : <a href="props.currentNotebook.material_url">{props.currentNotebook.material_url}</a>}</p>
                <p># of Notes: {props.currentNotebook.notes.length}</p>
              </div>
        </React.Fragment>)
}


const mapStateToProps = (state) => {
    return {
        overlay: state.overlay,
        currentNotebook: state.currentNotebook
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleOverlay: () => dispatch(toggleOverlay()),
        patchNotebooks: (data, id) => dispatch(patchNotebooks(data, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
