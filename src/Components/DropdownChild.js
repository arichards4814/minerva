import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import TinyPlus from '../Icons/Tiny/TinyPlus'
import TinyNotebook from '../Icons/Tiny/TinyNotebook'
import { useHistory } from 'react-router-dom'
import SearchCircle from '../Icons/SearchCircle'
import Pin from '../Icons/Pin'


// redux
import { connect } from 'react-redux';
import { postNotebooksWLessonJoiner, pinNotebook, unpinNotebook } from '../actionCreators'
import DropdownTile from './DropdownTile'
import TipBubble from '../Icons/Tiny/TipBubble'

const useStyles = makeStyles({
    root: {
        width: props => {
            if (props.width) {
                return props.width
            } else {
                return 150
            }
        },
        height: props => {
            if (props.height) {
                return props.height
            } else {
                return 50
            }
        },
        borderStyle: 'solid',
        borderRadius: '8px',
        position: "relative",
        display: "inline-block",
        marginTop: 3,
        marginBottom: 3,
        padding: 10
    },
    icon: {
        position: "absolute",
        right: 0,
        width: 30,
        top: "15%"
    },
    notebook: {
        width: props => {
            if (props.secondwidth) {
                return props.secondwidth
            } else {
                return 150
            }
        },
        height: props => {
            if (props.secondheight) {
                return props.secondheight
            } else {
                return 50
            }
        },
        borderStyle: 'solid',
        borderRadius: '8px',
        position: "relative",
        display: "inline-block",
        marginLeft: 3,
        verticalAlign: "top",
        marginTop: 3,
        marginBottom: 3,
        padding: 10
    },
    input:{
        width: "80%",
        display: "inline-block"
    },
    tipbubbleText: {
        position: "absolute",
        bottom: 53,
        color: "white",
        left: 80
    }
})

const DropdownChild = props => {
    const classes = useStyles(props)
    const history = useHistory()
    const [editing, setEditing] = useState(false)
    const [notebookName, setNotebookName] = useState("")

    console.log("in dropdown child", props)

    const openEdit = () => {
        setEditing(true)
    }

    const createNotebook = () => {
        console.log(notebookName)
        console.log("here are the props", props)

        let data = {
            title: notebookName,
            material_url: props.material_url,
            user_id: localStorage.user_id
        }

        props.postNotebooksWLessonJoiner(props.id, data)
        setEditing(false)
        console.log('this components props', props)

        // the data for the notebook itself will just be a title, user_id, //is material_id necessary here?
        //here will make a post & create the lessonnotebooks joiner
        //lesson_id: props.id
        //notebook_id: (get from the return of posting the notebook)
        //do this all in one special request probably
    }

    const handleChange = (e) => {
        setNotebookName(e.target.value)
    }

    const pinNotebook1 = () => {
        console.log(props)
        if(props.pinned && props.pinned.id){
            props.unpinNotebook(props.pinned.id, props.pinned)
        }
        if(props.notebooks){
            props.pinNotebook(props.notebooks[0].id, props.notebooks[0])
        } else {
            props.pinNotebook(props.id, props)
        }
    }


    //onclick of the tiny plus it will show an input with a plus icon.
    //onclick of that plus icon a new notebook will be created.

    return (
        <div className={classes.all}>
            <div className={classes.root}>
                {props.title}
                <div className={classes.icon}>
                    {props.icon && props.icon === "notebook" && <div style={{ position: "relative", right: 40 }}><Pin onClick={pinNotebook1}/></div>}
                    {props.icon && props.icon === "notebook" && <div style={{ position: "relative", bottom: 40 }}><TinyNotebook size={1.5} onClick={() => history.push(`/notebooks/${props.id}`)} /></div> }
                    {props.notebooks && props.notebooks.length < 1 && !editing && <TinyPlus theme="minerva" onClick={openEdit} cursor={"pointer"}/>}
                </div>
            </div>
            {editing && <div className={classes.notebook}>
                    <TipBubble theme="minerva" />
                <div className={classes.tipbubbleText}>Name Your Notebook</div>
                    <input className={classes.input} value={notebookName} onChange={handleChange}></input>
                        <div className={classes.icon}>
                            <TinyPlus theme="minerva" onClick={createNotebook} cursor={"pointer"} />
                        </div>
            </div>}
            {props.notebooks && props.notebooks.length > 0 &&
            <div className={classes.notebook}>
                {props.notebooks[0].title}
                <div className={classes.icon} style={{marginBottom: 10}}>
                    <div style={{ position: "relative", right: 40 }}><Pin onClick={pinNotebook1}/></div>
                    <div style={{ position: "relative", bottom: 40 }}><TinyNotebook size={1.5} onClick={() => history.push(`/notebooks/${props.notebooks[0].id}`)}/></div>
                </div>
            </div>}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        currentCurriculum: state.currentCurriculum,
        subscriptions: state.subscriptions,
        pinned: state.pinned
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postNotebooksWLessonJoiner: (lesson_id, notebook_data) => dispatch(postNotebooksWLessonJoiner(lesson_id, notebook_data)),
        pinNotebook: (id, data) => dispatch(pinNotebook(id,data)),
        unpinNotebook: (id, data) => dispatch(unpinNotebook(id, data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownChild);
