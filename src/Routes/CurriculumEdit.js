import React, { useState, useEffect } from 'react'
import CreatorHeader from '../Icons/Headers/CreatorHeader'
import Row from '../Container/Row'
import Layout from '../Container/Layout'
import F2 from '../Typing/F2'
import F3 from '../Typing/F3'
import { useLocation } from "react-router-dom";
import TitleBox from '../Components/TitleBox'
import LongCardScroller from '../Container/LongCardScroller'
import AddLessonForm from '../Components/Forms/AddLessonForm'
import MinervaInput from '../Components/Forms/MinervaInput'
import Snackling from '../Components/Snackling'
import { useHistory } from 'react-router-dom'

import EditImage from '../Icons/EditImage'
import AddNew from '../Icons/AddNew'
import EditExisting from '../Icons/EditExisting'
import TrashIcon from '../Icons/TrashIcon'

// redux
import { connect } from 'react-redux';
import { fetchCurriculum, setCurrentLesson, updateCurrentCurriculum, postLessons, patchLesson, deleteLesson, deleteCurriculum } from '../actionCreators'

import SearchButton from '../Components/Forms/SeachButton'
import EditLessonForm from '../Components/Forms/EditLessonForm'
import UploaderV2 from '../Components/UploaderV2'


const CurriculumEdit = props => {
    const history = useHistory()
    const location = useLocation().pathname.split("/")[2]

    //For Snackling
    const [open, setOpen] = useState(false)
    const [snacklingMessage, setSnacklingMessage] = useState("")

    const close = () => {
        setOpen(false)
    }

    const [formState, setFormState] = useState(2)
    //form states
    //0 - Edit Details
    //1 - Edit Image
    //2 - Add Lessons

    // Edit Details
    const [formCurriculumDetails, setCurriculumDetails] = useState({})

    // Edit Image
    const [formImageUrl, setFormImageUrl] = useState({
        image_url: ""})

    // Add Lessons
    const [formLesson, setFormLesson] = useState({
        title: "",
        material_url: "",
        image_url: "",
        description: "",
        lesson_type: "Video",
        cost: "free"
    })

    // Edit Lessons
    const [editFormLesson, setEditFormLesson] = useState({
        id: "",
        title: "",
        material_url: "",
        image_url: "",
        description: "",
        lesson_type: "Video",
        cost: "free"
    })
    const [editFormActive, setEditFormActive] = useState(false)

    // Get All Curriculum information
    useEffect(() => {
        if (parseInt(location) && props.fetchCurriculum) {
            props.fetchCurriculum(parseInt(location))
        }
    }, [])

    const alterFormState = (index) => {
        if(index === 0){
            setCurriculumDetails({
                title: props.currentCurriculum.title,
                description: props.currentCurriculum.description
            })
        } else if (index === 1){
            setFormImageUrl({
            image_url: props.currentCurriculum.image_url})
        } else if (index === 2) {
            setEditFormActive(false)
        }
        setFormState(index)
        // document.getElementById("minerva-input").focus()
    }

    const handlePageTitle = () => {
        switch(formState){
            case 0:
                return "Edit Details"
            case 1:
                return "Edit Image"
            case 2:
                return "Add Lessons"
            default:
                return "Add Lessons"
        }
    }

    const handlePageIcon = () => {
        switch (formState) {
            case 0:
                return <EditExisting />
            case 1:
                return <EditImage />
            case 2:
                return <AddNew />
            default:
                return <AddNew />
        }
    }

    const handleChangeLessonForm = (e) => {
        setFormLesson({ ...formLesson, [e.target.name]: e.target.value })
    }

    const handleToggles1 = (e) => {
        setFormLesson({ ...formLesson, lesson_type: e})
    }

    const handleToggles2 = (e) => {
        setFormLesson({ ...formLesson, cost: e })
    }

    const handleSubmitLessonForm = () => {
        // need to validate here

        let updatedWithCurrId = {...formLesson, curriculum_id: props.currentCurriculum.id}
        // create lesson in database, add lesson to list of lessons in current curriculum, 
        props.postLessons(updatedWithCurrId)

        // clear form
        setFormLesson({
            title: "",
            material_url: "",
            image_url: "",
            description: "",
            lesson_type: "Video",
            cost: "free"
        })
    }

    const getNewLessonImage = (newLessonImageUrl) => {
        setFormLesson({ ...formLesson, image_url: newLessonImageUrl })
    }

    const handleChangeCurriculumDetails = (e) => {
        setCurriculumDetails({...formCurriculumDetails, [e.target.name]: e.target.value})
    }

    const handleSubmitDescriptionChange = () => {
        let descriptionData = {...props.currentCurriculum, ...formCurriculumDetails}
        props.updateCurrentCurriculum(descriptionData, props.currentCurriculum.id)
        setSnacklingMessage("Your change was made!")
        setOpen(true)
    }

    const handleChangeImageUrl = (e) => {
        setFormImageUrl({ ...formCurriculumDetails, image_url: e.target.value })
    }

    const handleSubmitImageChange = () => {
        let imageData = { ...props.currentCurriculum, ...formImageUrl }
        props.updateCurrentCurriculum(imageData, props.currentCurriculum.id)
        setSnacklingMessage("Your change was made!")
        setOpen(true)
    }

    // functions for the lesson cards
    const editLessonOnClick = (lesson) => {
        console.log(lesson)
        setEditFormLesson({
            id: "",
            title: "",
            material_url: "",
            image_url: "",
            description: "",
            lesson_type: "Video",
            cost: "free"
        })
        setEditFormLesson(lesson)
        setEditFormActive(true)
    }

    const deleteCurriculumOnClick = () => {
        if (window.confirm("Are you sure you want to delete this curriculum?")) {
            props.deleteCurriculum(props.currentCurriculum.id)
            history.push("/creator")
        }
    }

    const deleteLessonOnClick = (id) => {
        if(window.confirm("Are you sure you want to delete this lesson?")){
            console.log(id)
            props.deleteLesson(id)
        }
    }

    ////
    //// Edit form handling.
    const handleChangeEditForm = (e) => {
        setEditFormLesson({ ...editFormLesson, [e.target.name]: e.target.value })
    }

    const handleEditToggles1 = (e) => {
        setEditFormLesson({ ...editFormLesson, lesson_type: e })
    }

    const handleEditToggles2 = (e) => {
        setEditFormLesson({ ...editFormLesson, cost: e })
    }

    const patchLesson = (id) => {

        props.patchLesson(editFormLesson, id)
        console.log(id, "oh yes about to get this to work")
        setEditFormLesson({
            id: "",
            title: "",
            material_url: "",
            image_url: "",
            description: "",
            lesson_type: "Video",
            cost: "free"
        })

    }

    return (
        <div className="fade-in">
            <Row marginLeft={80}>
                <Layout width={4} >
                    <F2 font="secondary"> Curriculum Creator: </F2>
                    <F2 font="secondary"> {handlePageTitle()} </F2>
                    {formState === 0 ? <MinervaInput type="text" name="title" theme="minerva" value={formCurriculumDetails.title} onChange={handleChangeCurriculumDetails} width={500} placeholder="Change title..." /> :
                    <TitleBox style="rounded" theme="secondary" paddingLeft={3}><F3 font="secondary">{props.currentCurriculum && props.currentCurriculum.title}</F3></TitleBox>
                    }
                    {/*  */}
                    
                    {/* <SearchButton theme="secondary" onClick={handleClick}></SearchButton> */}
                    <Row>
                        <EditImage tooltip="bottom" content="Change Image" onClick={() => alterFormState(1)}/>
                        <EditExisting tooltip="bottom" content="Edit Details" onClick={() => alterFormState(0)}/>
                        <AddNew tooltip="bottom" content="Add Lessons" onClick={() => alterFormState(2)}/>
                        {formState === 0 && <TrashIcon tooltip="bottom" content="Delete" onClick={deleteCurriculumOnClick}/>}
                    </Row>
                </Layout>
                <Layout width={7}>
                    <CreatorHeader />
                </Layout>
            </Row>
            {formState === 2 &&
            <Row marginLeft={80} >
                <Layout width={6}>
                    <LongCardScroller info={props.currentCurriculum && props.currentCurriculum.lessons} placeholder="There are no lessons in this curriculum" headerTitle="Lessons:" editLessonOnClick={editLessonOnClick} deleteLessonOnClick={deleteLessonOnClick} style={"edit"}/>
                </Layout>
                <Layout width={6}>
                    {!editFormActive ? <AddLessonForm formInfo={formLesson} onChange={handleChangeLessonForm} onSubmit={handleSubmitLessonForm} getNewLessonImage={getNewLessonImage} handleToggles1={handleToggles1} handleToggles2={handleToggles2} /> : 
                        <EditLessonForm lesson={editFormLesson} onChange={handleChangeEditForm} handleToggles1={handleEditToggles1} handleToggles2={handleEditToggles2} onSubmit={patchLesson} />}
                
                    {/* could do another add lesson form that is a patch request... */}
                </Layout>
            </Row>}

            {formState === 1 &&
            <Row marginTop={30} marginLeft={80}>
                <img src={props.currentCurriculum.image_url} style={{ width: 640, height: 360}}></img>
                <UploaderV2 />
                {/* <MinervaInput type="text" theme="third" width={700} value={props.currentCurriculum.image_url} onChange={handleChangeImageUrl} placeholder="Enter image url..." /> */}
                {/* <SearchButton theme="third" value="Save" onClick={handleSubmitImageChange} /> */}
            </Row>}

            {formState === 0 &&
                <Row marginTop={30} marginLeft={80}>
                <F3>Description:</F3>
                <MinervaInput type="text" value={formCurriculumDetails.description} onChange={handleChangeCurriculumDetails} name="description" theme="minerva" width={700}  placeholder="Enter image url..." />
                <SearchButton theme="minerva" value="Save" onClick={handleSubmitDescriptionChange}/>
                </Row>}

                {open && <Snackling theme="minerva" icon="plus" close={close} value={snacklingMessage}></Snackling>}    
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
        fetchCurriculum: (id) => dispatch(fetchCurriculum(id)),
        setCurrentLesson: (lesson) => dispatch(setCurrentLesson(lesson)),
        updateCurrentCurriculum: (data, curriculum_id) => dispatch(updateCurrentCurriculum(data, curriculum_id)),
        postLessons: (data) => dispatch(postLessons(data)),
        patchLesson: (data, id) => dispatch(patchLesson(data, id)),
        deleteLesson: (id) => dispatch(deleteLesson(id)),
        deleteCurriculum: (id) => dispatch(deleteCurriculum(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurriculumEdit);