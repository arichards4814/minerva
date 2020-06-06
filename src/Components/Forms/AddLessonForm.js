import React, { useState } from 'react'
import MinervaInput from './MinervaInput'
import { makeStyles } from '@material-ui/core'
import F4 from '../../Typing/F4'
import ContentCard from '../ContentCard'
import MajesticButton from '../MajesticButton'
import Tweet from '../../containers/content/Tweet'

import Toggler from './Toggler'

const useStyles = makeStyles({
    root: {
        backgroundColor: "gray"
    }
})
export default function AddLessonForm(props) {
    const classes = useStyles(props)
    const [videoURL, setVideoURL] = useState("")

    const [selectedToggle1, setSelectedToggle1] = useState(0)
    const [selectedToggle2, setSelectedToggle2] = useState(0)
    
    const urlListener = (e) => {
        props.onChange(e)
        console.log(e.target.value)
        setVideoURL(e.target.value)
    }

    const setSelected1 = (value, index) => {
        props.handleToggles1(value)
        setSelectedToggle1(index)
    }

    const setSelected2 = (value, index) => {
        props.handleToggles2(value)
        setSelectedToggle2(index)
    }

    const submitAndClear = () => {
        props.onSubmit()
        setVideoURL(" ")
        setVideoURL("")
    }


    return(
        <div>
            <F4>Add Lesson</F4>
            <F4 font="secondary">Lesson Title:</F4><MinervaInput value={props.formInfo.title} name="title" theme="secondary" onChange={props.onChange}/>
            <br></br>
            <F4 font="secondary">Type:</F4>
            <Toggler value="Video" selected={selectedToggle1} name="lesson_type" index={0} onClick={setSelected1} onChange={props.onChange} /> <Toggler value="Book" selected={selectedToggle1} name="lesson_type" index={1} onClick={setSelected1} onChange={props.onChange} /> <Toggler value="Blog" selected={selectedToggle1} name="lesson_type" index={2} onClick={setSelected1} onChange={props.onChange} /> <Toggler value="Tweet" selected={selectedToggle1} name="lesson_type" index={3} onClick={setSelected1} onChange={props.onChange}/> 
            <F4 font="secondary">Media Url:</F4><MinervaInput value={props.formInfo.material_url} name="material_url" theme="secondary" width={400} onChange={urlListener}/>
            <F4 font="secondary">Content Preview:</F4>
            {selectedToggle1 === 0 && <ContentCard videoURL={videoURL} getNewLessonImage={props.getNewLessonImage} type={props.formInfo.lesson_type} />}
            {selectedToggle1 === 3 && <Tweet tweet_url={videoURL} getNewLessonImage={props.getNewLessonImage}/>}
            <br></br>
            <F4 font="secondary">Price:</F4>
            <Toggler value="free" name="cost" selected={selectedToggle2} onClick={setSelected2} index={0} /> <Toggler value="$" selected={selectedToggle2} name="cost" onClick={setSelected2} index={1} /> <Toggler value="$$" selected={selectedToggle2} name="cost" onClick={setSelected2} index={2} /> <Toggler value="$$$" selected={selectedToggle2} name="cost" onClick={setSelected2} index={3}/> 
            <F4 font="secondary">Description:</F4><MinervaInput value={props.formInfo.description} name="description" theme="secondary" width={400} onChange={props.onChange}/>
            <MajesticButton color="third" onClick={submitAndClear}>Create</MajesticButton>
        </div>
    )
}