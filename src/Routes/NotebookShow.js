import React, { useState, useEffect } from 'react'
import Row from '../Container/Row'
import Layout from '../Container/Layout'
import F2 from '../Typing/F2'
import { useLocation, useHistory } from "react-router-dom";
import NotesScroller from '../Container/NotesScroller'
import Youtube from '../Components/Youtube'
import { makeStyles} from '@material-ui/core'
import LeftBackIcon from '../Icons/leftBackIcon'
import NotebooksDock from '../Components/NotebooksDock'
import Button from '../Components/Button'
import Tweet from '../ContentContainers/Tweet'
import TikTok from '../ContentContainers/TikTok'
import MaterialFrame from '../ContentContainers/MaterialFrame'
import QuillEditorV2 from '../Components/QuillEditorV2'


// redux
import { connect } from 'react-redux';
import { patchNotebooks, hideNavling, showNavling, fetchNotebook, setCurrentNotepadContent, setCurrentNotepadDetails, postNotes } from '../actionCreators'
import Material from '../Container/Material';
import MinervaInput from '../Components/Forms/MinervaInput';
import SpotifyFrame from '../ContentContainers/SpotifyFrame';

const useStyles = makeStyles({
    backIcon: {
        position: "absolute",
        left: -160,
        transform: "translateX(-15px)",
        transform: "translateY(10px)"
    },
    text_editor: {
        position: "relative"
    },
    add_note_button: {
        position: "absolute",
        top: 0,
        right: 60,
        zIndex: 1
    }
})

const NotebookShow = props => {
    const history = useHistory()
    const classes = useStyles(props)
    const location = useLocation().pathname.split("/")[2]
    const [totalTime, setTotalTime] = useState(1)
    const [editedName, setEditedName] = useState(props.currentNotebook.title)
    const [editing, setEditing] = useState(false)

    useEffect(() => {
        props.fetchNotebook(location)
        props.setCurrentNotepadDetails({notebook_id: parseInt(location)})

    }, [])

    const getYoutubeIDFromURL = (url) => {
        let video_id = url.split('v=')[1]

        if (!video_id) {
            console.log("There is a problem with this URL")
        } else {
            let ampersandPosition = video_id.indexOf('&');
            if (ampersandPosition != -1) {
                video_id = video_id.substring(0, ampersandPosition);
            }
            // console.log(`The video ID is ${video_id}`)
            return video_id
        }
    }

    // onclick of a button I need to grab the current location of the video, 
    // grab the {notebook_id: , content: , material_time_stamp: }
    const test = (video_time) => {
        props.setCurrentNotepadDetails({ ...props.currentNotepadDetails, material_time_stamp: video_time })
        console.log("details", props.currentNotepadDetails)
        console.log("content", props.currentNotepadContent)
        // can I get the quill editor info here?
        // can I get the youtube info here?
    }

    const getInfo = () => {
        console.log("current notepad content", props.currentNotepadContent)
        console.log("current notepad details", props.currentNotepadDetails)
    }

    const getTotalTime = (time) => {
        setTotalTime(time)
    }

    const postNewNote = (video_time) => {

        console.log("time", video_time)
        console.log("current notepad details", props.currentNotepadDetails)
        console.log("content", props.currentNotepadContent)

        //how can I clear a note here. 
        
        props.setCurrentNotepadDetails({ ...props.currentNotepadDetails, material_time_stamp: video_time })
        
        let data = { ...props.currentNotepadContent, ...props.currentNotepadDetails, material_time_stamp: video_time }
        console.log("data", data)
        
        if(!data.content){
            console.log("No content.")
        } else if (!data.notebook_id){
            console.log("Issue with ID")
        } else if (data.material_time_stamp >= 0){
            console.log("posting...", props.currentNotepadDetails)
            //post to notes=
            props.postNotes(data) 

        }
    }
    

    const materialHandler = () => {
        //this will check if there's a lesson attached to this notebook
        if ( props.currentNotebook.lessons && props.currentNotebook.lessons[0]){
            console.log("this notebook has a lesson attached to it this url will be used", props.currentNotebook.lessons[0].material_url)
            return props.currentNotebook.lessons[0].material_url
        } else {
            console.log("there is no lesson associated with this notebook this will be the url used", props.currentNotebook.material_url)
            return props.currentNotebook.material_url
        }
    }


    const submitNameChange = () => {
        let data = {
            ...props.currentNotebook, 
            title: editedName
        }
        props.patchNotebooks(data, props.currentNotebook.id)
        setEditing(false)
    }

    const handleEditChange = (e) => {
        setEditedName(e.target.value)
    }

    const postNoteNonVideo = () => {
        postNewNote(0)
    }


    return (
        <div className="fade-in">
            <Row marginLeft={80}>
                <div className={classes.backIcon}><LeftBackIcon onClick={() => history.push("/notebooks")}/></div>
                <Layout width={8} >

                    <F2 font="secondary">  {props.currentNotebook.lessons && props.currentNotebook.lessons[0] ? "Lesson: " + props.currentNotebook.lessons[0].title : "Notebook: " + props.currentNotebook.title}
                        {editing && props.currentNotebook.lessons && <div><MinervaInput onChange={handleEditChange} theme="secondary" placeholder="New Notebook Title" /><Button theme="secondary" color="white" onClick={submitNameChange}>Change</Button></div>}</F2>
                    {props.currentNotebook.material_url && props.currentNotebook.material_url.includes("youtube") && <Youtube id={getYoutubeIDFromURL(materialHandler())} onClick={postNewNote} notes={props.currentNotebook.notes} getTotalTime={getTotalTime}/> }
                    {props.currentNotebook.material_url && props.currentNotebook.material_url.includes("twitter") && <div style={{marginLeft: "10%", marginTop: "10%", marginBottom: "10%"}}><Tweet tweet_url={props.currentNotebook.material_url} /></div>}
                    {props.currentNotebook.material_url && props.currentNotebook.material_url.includes("tiktok") && <div style={{ marginLeft: "10%", marginTop: "10%", marginBottom: "10%" }}><TikTok tiktok_url={props.currentNotebook.material_url} /></div>}
                    {props.currentNotebook.material_url && props.currentNotebook.material_url.includes("docs.google") && <MaterialFrame material_url={props.currentNotebook.material_url} />}
                    {props.currentNotebook.material_url && props.currentNotebook.material_url.includes("spotify") && <SpotifyFrame material_url={props.currentNotebook.material_url} />}
                    {!props.currentNotebook.material_url && <Material setEditing={setEditing} />}

                    {/* <Timeline notes={props.currentNotebook.notes} totalTime={totalTime}/> */}
                    <div className={classes.text_editor}>
                        {props.currentNotebook.material_url && !props.currentNotebook.material_url.includes("youtube") &&
                            <div className={classes.add_note_button}>
                                <Button theme="secondary" onClick={postNoteNonVideo}>Create</Button>
                            </div>}
                        <QuillEditorV2 />
                    </div>
                </Layout>
                <Layout width={4}>
                    <NotebooksDock notebook={props.currentNotebook}/>
                        <F2 font="secondary"> Notes: </F2>
                    <NotesScroller info={props.currentNotebook.notes} height={600} style={"show"} placeholder="No notes currently." headerTitle="" />
                    
                </Layout>
            </Row>
            <Row marginTop={30} marginLeft={3} >
                <Layout width={6}>
                    
                </Layout>
                <Layout width={6}>
                    
                </Layout>
            </Row>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        notebooks: state.notebooks,
        currentNotebook: state.currentNotebook,
        navlingHidden: state.navlingHidden,
        currentNotepadContent: state.currentNotepadContent,
        currentNotepadDetails: state.currentNotepadDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotebook: (id) => dispatch(fetchNotebook(id)),
        hideNavling: () => dispatch(hideNavling()),
        showNavling: () => dispatch(showNavling()),
        setCurrentNotepadContent: (content) => dispatch(setCurrentNotepadContent(content)),
        setCurrentNotepadDetails: (content) => dispatch(setCurrentNotepadDetails(content)),
        postNotes: (data) => dispatch(postNotes(data)),
        patchNotebooks: (data, id) => dispatch(patchNotebooks(data, id))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow);