import React, { useState } from 'react'
import MinervaInput from './MinervaInput'
import { makeStyles } from '@material-ui/core'
import F4 from '../../Typing/F4'
import ContentCard from '../ContentCard'
import MajesticButton from '../MajesticButton'
import TinyEdit from '../../Icons/Tiny/TinyEdit'

import Toggler from './Toggler'

const useStyles = makeStyles({
    root: {
        backgroundColor: "gray"
    }
})
export default function EditLessonForm(props) {
    const classes = useStyles(props)
    const [videoURL, setVideoURL] = useState("")

    const [selectedToggle1, setSelectedToggle1] = useState(0)
    const [selectedToggle2, setSelectedToggle2] = useState(0)
    const {id, title, curriculum_id, material_url, lesson_type, description, image_url, cost} = props.lesson
    
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

    const typeSelector = () => {
        switch (lesson_type) {
            case "Video":
                return 0
            case "Book":
                return 1
            case "Blog":
                return 2
            case "Tweet":
                return 3
            default:
                return 0
        }
    }

    const costSelector = () => {
        switch (cost) {
            case "free":
                return 0
            case "$":
                return 1
            case "$$":
                return 2
            case "$$$":
                return 3
            default:
                return 0
        }
    }

    const getNewLessonImage = (x) => {
        //placeholder
        console.log(x)
    }

    
    return(
        <div>
            <F4>Edit Lesson {props.id}</F4>
             {console.log(props)}
            <F4 font="secondary">Lesson Title:</F4><MinervaInput name="title" theme="secondary" onChange={props.onChange} value={title}/>
            <br></br>
            <F4 font="secondary">Type:</F4>
            <Toggler value="Video" selected={typeSelector()} name="lesson_type" index={0} onClick={setSelected1} onChange={props.onChange} /> <Toggler value="Book" selected={typeSelector()} name="lesson_type" index={1} onClick={setSelected1} onChange={props.onChange} /> <Toggler value="Blog" selected={typeSelector()} name="lesson_type" index={2} onClick={setSelected1} onChange={props.onChange} /> <Toggler value="Tweet" selected={typeSelector()} name="lesson_type" index={3} onClick={setSelected1} onChange={props.onChange}/> 
            <F4 font="secondary">Media Url:</F4><MinervaInput name="material_url" theme="secondary" width={400} onChange={urlListener} value={material_url}/>
            <F4 font="secondary">Content Preview:</F4>
            <ContentCard videoURL={material_url} getNewLessonImage={getNewLessonImage} type={lesson_type}/>
            <br></br>
            <F4 font="secondary">Price:</F4>
            <Toggler value="free" name="cost" selected={costSelector()} onClick={setSelected2} index={0} /> <Toggler value="$" selected={costSelector()} name="cost" onClick={setSelected2} index={1} /> <Toggler value="$$" selected={costSelector()} name="cost" onClick={setSelected2} index={2} /> <Toggler value="$$$" selected={costSelector()} name="cost" onClick={setSelected2} index={3}/> 
            <F4 font="secondary">Description:</F4><MinervaInput name="description" theme="secondary" width={400} onChange={props.onChange} value={description}/>
            {/* This will be the price toggle... */}
            <MajesticButton color="third" onClick={() => props.onSubmit(id)}>Update</MajesticButton>
        </div>
    )
}