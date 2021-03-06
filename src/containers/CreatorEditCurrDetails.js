import React, { useState } from 'react';
import MinervaInput from '../components/forms/MinervaInput'
import MinervaTextArea from '../components/forms/MinervaTextArea'
import SearchButton from '../components/forms/SeachButton'
import TagsList from '../components/TagsList'
import UploaderV2 from '../components/UploaderV2'

const CreatorAddLessons = props => {
    const [tags, setTags] = useState([])
    const [formTitle, setFormTitle] = useState("")

    const addTag = () => {
        setTags([...tags, { name: formTitle }])
        setFormTitle("")
    }

    const removeTag = (name) => {
        let tagsCopy = [...tags]
        let index = tagsCopy.findIndex(tag => tag.name === name)
        console.log(index)
        tagsCopy.splice(index, 1)
        setTags(tagsCopy)
    }

    return(
        <div>
            <UploaderV2 />
            <p>Curriculum Title:</p>
            <div>
                <MinervaInput 
                    type="text" 
                    name="title" 
                    theme="secondary" 
                    onChange={props.handleChange} 
                    value={props.formInfo.title} 
                    width={500} 
                    placeholder="Create Title..." 
                />
            </div>
            <p>Curriculum Description:</p>
            <div>
                <MinervaTextArea 
                    type="text" 
                    name="description" 
                    theme="secondary" 
                    onChange={props.handleChange} 
                    height={130}  
                    width={500} 
                    placeholder="Create description..." 
                />
            </div>
            <p>Tags:</p>
                <MinervaInput 
                    width={500} 
                    height={75} 
                    fontSize={14} 
                    type="text" 
                    theme="secondary" 
                    placeholder="Choose tags for your curriculum..." 
                />
                <SearchButton 
                    theme="secondary" 
                    onClick={addTag} 
                    value="Add"
                />
                <TagsList 
                    tags={tags} 
                    exClick={removeTag} 
                />
                <SearchButton 
                    theme="secondary" 
                    onClick={props.save} 
                    value="Save" 
                />
        </div>
    )

}

export default CreatorAddLessons