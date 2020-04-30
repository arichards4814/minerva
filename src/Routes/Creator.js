import React, { useState, useEffect } from 'react'
import CreatorHeader from '../Icons/Headers/CreatorHeader'
import Row from '../Container/Row'
import Layout from '../Container/Layout'
import F2 from '../Typing/F2'
import F3 from '../Typing/F3'
import F6 from '../Typing/F3'
import { useLocation } from "react-router-dom";
import Display from '../Container/Display'
import LongCardScroller from '../Container/LongCardScroller'
import MinervaInput from '../Components/Forms/MinervaInput'
import Dropdown from '../Components/Forms/Dropdown'
import SearchButton from '../Components/Forms/SeachButton'
import EditExisting from '../Icons/EditExisting'
import BackIcon from '../Icons/BackIcon'
import AddNew from '../Icons/AddNew'
import { makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import TagsList from '../Components/TagsList'

// redux
import { connect } from 'react-redux';
import { fetchCurriculum, setCurrentLesson, fetchUsersCurriculums, postCurriculums, postCurriculumsWImage} from '../actionCreators'
import UploaderV2 from '../Components/UploaderV2'

const useStyles = makeStyles({
    footer: {
        position: "absolute",
        bottom: 60,
        left: "45%",
        textAlign: "center"
    },
    imagePicker: {
        marginLeft: 180
    }
})
const Creator = props => {

    let history = useHistory()

    const classes = useStyles(props)
    const location = useLocation().pathname.split("/")[2]
    const [errors, setErrors] = useState("")

    //for tags
    const [formTitle, setFormTitle] = useState("")

    // form stage
    const [stage, setStage] = useState(0)

    const [newCurriculumTitle, setNewCurriculumTitle] = useState("")
    const [newCurriculumDescription, setNewCurriculumDescription] = useState("")
    const [tags, setTags] = useState([])
    const [newCurriculumImage, setNewCurriculumImage] = useState(null)

    const [selectedToEdit, setSelectedToEdit] = useState("")

    useEffect(() => {
        if (parseInt(location) && props.fetchCurriculum) {
            props.fetchCurriculum(parseInt(location))
        }
        props.fetchUsersCurriculums(localStorage.user_id)
    }, [])


    /////////////
    const handleChangeTitle = (e) => {
        setNewCurriculumTitle(e.target.value)
    }

    const handleChangeDescription = (e) => {
        setNewCurriculumDescription(e.target.value)
    }

    const handleImageDragAndDrop = (image) => {
        setNewCurriculumImage(image)
    }

    const handleChange = (e) => {
        setFormTitle(e.target.value)
    }
    //////////////

    const addStage = (num) => {
        setStage(stage + num)

        console.log(newCurriculumTitle)
        console.log(newCurriculumDescription)
        console.log(tags)
    }

    //////////////
    

    const submitFinalForm = () => {
        let data ={
            curriculum: {
                user_id: localStorage.user_id,
                title: newCurriculumTitle,
                description: newCurriculumDescription,
                image_url: newCurriculumImage
            }
        }
        console.log(data)
        props.postCurriculums(data, tags)
    }

    const goBack = () => {
        setStage(stage - 1)
    }

    const showEditDropdown = () => {
        setStage(-1)
    }

    const setToBeginning = () => {
        setStage(0)
    }

    const handleSelectChange = (e) => {
        setSelectedToEdit(e.target.value)
    }

    const handleSelectSubmit = () => {
        if (selectedToEdit === ""){
            setErrors("You must select a curriculum to edit.")
        } else {
            history.push(`/editcurriculums/${selectedToEdit}`)
        }
    }

    const addTag = () => {
        setTags([...tags, {name: formTitle}])
        setFormTitle("")
    }

    const removeTag = (name) => {
        let tagsCopy = [...tags]
        let index = tagsCopy.findIndex(tag => tag.name === name)
        console.log(index)
        tagsCopy.splice(index, 1)
        setTags(tagsCopy)
    }

    const showDetails = () => {
        console.log(newCurriculumTitle, newCurriculumDescription)
        console.log(newCurriculumImage)

        const formData = new FormData();

        formData.append("curriculum[user_id]", localStorage.user_id);
        formData.append("curriculum[title]", newCurriculumTitle);
        formData.append("curriculum[description]", newCurriculumDescription);
        formData.append("curriculum[image]", newCurriculumImage);

        props.postCurriculumsWImage(formData, tags)
    
    //     fetch(`${baseURL}/curriculums`, {
    //         method: "POST",
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         });
    // }
    }

    return (
        <div className="fade-in">
            <Row marginLeft={80}>
                <Layout width={4} >
                    <F2 font="secondary"> Curriculum Creator</F2>
                    {/* <TitleBox style="rounded" theme="secondary" paddingLeft={3}><F3 font="secondary">{props.currentCurriculum.title}</F3></TitleBox> */}
                    Welcome to the curriculum creator. Here you can build
                    amazing lists of videos, blogs, websites... anything
                    that's helped you learn. <br></br><br></br>Begin by naming your curriculum,
                    giving it a description and setting an image.
                </Layout>
                <Layout width={7}>
                    <CreatorHeader />
                </Layout>
            </Row>
            <Row>
                <Layout width={3}>
                </Layout>
                <Layout width={6}>

                    {stage === 0 && <div>
                        <F2 font="secondary">Title</F2>
                        <MinervaInput width={500} height={75} fontSize={25} type="text" theme="secondary" onChange={handleChangeTitle} value={newCurriculumTitle} placeholder="Name Your Curriculum..." />
                    <SearchButton theme="secondary" onClick={() => addStage(1)} value="Next"></SearchButton>
                    </div>}

                    {stage === 1 && <div>
                        <F2 font="secondary">Description</F2>
                        <MinervaInput width={500} height={75} fontSize={14} type="text" theme="secondary" onChange={handleChangeDescription} value={newCurriculumDescription} placeholder="Set a description for this curriculum..." />
                        <SearchButton theme="secondary" onClick={() => addStage(1)} value="Next"></SearchButton>
                    </div>}

                    
                    {stage === 2 && <div>
                        <F2 font="secondary">Tags</F2>
                        <MinervaInput width={500} height={75} fontSize={14} type="text" theme="secondary" onChange={handleChange} value={formTitle} placeholder="Choose tags for your curriculum..." />
                        <SearchButton theme="secondary" onClick={addTag} value="Add"></SearchButton>
                        <SearchButton theme="secondary" onClick={() => addStage(1)} value="Next"></SearchButton>
                        <TagsList tags={tags} exClick={removeTag}/>
                    </div>}

                    {stage === 3 && <div>
                        <F2 font="secondary">Image</F2>
                        <div className={classes.imagePicker}>
                            <UploaderV2 setImageInCreator={handleImageDragAndDrop} />
                        </div>
                        {/* <button onClick={showDetails}>tester buttonia</button> */}
                        <div className={classes.imagePicker}>
                            <SearchButton theme="secondary" onClick={showDetails} value="Create Curriculum" width={300}></SearchButton>
                        </div>
                        {/* <SearchButton theme="secondary" onClick={handleClick3} value="Next"></SearchButton> */}
                    </div>}

                    {stage === 4 && <div style={{textAlign: "center", marginTop: 30}}>
                        <SearchButton width={300} height={100} fontSize={80} onClick={submitFinalForm} theme="secondary" value="Create and add lessons!"></SearchButton>
                        </div>}

                    {stage === -1 && <div style={{ textAlign: "center", marginTop: 30 }}>
                        <F2 font="secondary">Choose Curriculum to Edit</F2>
                        <Dropdown theme="secondary" onChange={handleSelectChange}/>
                        <SearchButton theme="secondary" value="Edit" onClick={handleSelectSubmit}></SearchButton>
                    </div>}
                    
                    <div style={{marginTop: 20, marginLeft: 20}}>
                        {errors}
                    </div>
                </Layout>
                <Layout width={3}>
                </Layout>
            </Row>

            <div className={classes.footer}>
                {stage === -1 && <AddNew onClick={setToBeginning} tooltip="top" content="Create New"/>}
                {stage === 0 && <EditExisting onClick={showEditDropdown} tooltip="top" content="Edit Existing"/>}
                {stage === 1 && <BackIcon onClick={goBack} tooltip="top" content="Go Back"/>}
                {stage === 2 && <BackIcon onClick={goBack} tooltip="top" content="Go Back"/>}
                {stage === 3 && <BackIcon onClick={goBack} tooltip="top" content="Go Back"/>}
                {/* <EditExistingShadow /> */}
            </div>

        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        currentCurriculum: state.currentCurriculum,
        currentLesson: state.currentLesson
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // first you'll click a button to initialize the curriculum
        // then maybe this should just turn into an edit
        // here going to have a post method
        fetchCurriculum: (id) => dispatch(fetchCurriculum(id)),
        setCurrentLesson: (lesson) => dispatch(setCurrentLesson(lesson)),
        fetchUsersCurriculums: (user_id) => dispatch(fetchUsersCurriculums(user_id)),
        postCurriculums: (curriculum, tags) => dispatch(postCurriculums(curriculum, tags)),
        postCurriculumsWImage: (curriculum, tags) => dispatch(postCurriculumsWImage(curriculum, tags))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Creator);