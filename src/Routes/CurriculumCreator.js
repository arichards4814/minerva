import React, { useEffect, useState } from 'react'
import Row from '../Container/Row'
import Layout from '../Container/Layout'
import F2 from '../Typing/F2'
import F3 from '../Typing/F3'
import { useLocation, useHistory } from "react-router-dom";
import FormSlider from '../Components/FormSlider/FormSlider'
import FormPage from '../Components/FormSlider/FormPage'
import Button from '../Components/Button'

import MinervaInput from '../Components/Forms/MinervaInput'
import MinervaTextArea from '../Components/Forms/MinervaTextArea'

// redux
import { connect } from 'react-redux';
import { fetchCurriculum, setCurrentLesson, updateCurrentCurriculum, postLessons, patchLesson, deleteLesson, deleteCurriculum } from '../actionCreators'



const CurriculumEdit = props => {
    const history = useHistory()
    const location = useLocation().pathname.split("/")[2]
    const [formInfo, setFormInfo] = useState({
        title: "",
        material_url: "",
        description: ""
    })

    // Get All Curriculum information
    useEffect(() => {
        if (parseInt(location) && props.fetchCurriculum) {
            props.fetchCurriculum(parseInt(location))
        }
    }, [])

    const handleChangeCurriculumDetails = (e) => {
        console.log(formInfo)
            setFormInfo({...formInfo, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit")
    }
    
    return (
        <div className="fade-in">
            <Row marginLeft={80}>
                <Layout width={12} >
                    <F2 font="secondary"> Curriculum Editor: {props.currentCurriculum.title}  </F2>
                </Layout>
            </Row>
            
            {/* This is a slider for creating awesome forms. */}
            <Row marginTop={10}>
                <Layout width={1}></Layout>
                <Layout width= {5}>
                    <FormSlider numOfPages={4} 
                    handleSubmit={handleSubmit}
                    tooltips={["Title", "Media", "Description", "Finish"]}>
                        <FormPage tooltip="Lesson Title">
                            <F3>Lesson Title</F3>
                            Choose a name for this lesson...
                            <MinervaInput type="text" name="title" theme="minerva" value={formInfo.title} onChange={handleChangeCurriculumDetails} width={500} placeholder="Create title..." />
                        </FormPage>
                        <FormPage tooltip="Lesson Media">
                            <F3>Lesson Media</F3>
                            Add Media to this Lesson...
                            <MinervaInput type="text" name="material_url" theme="minerva" value={formInfo.material_url} onChange={handleChangeCurriculumDetails} width={500} placeholder="Paste media link here..." />
                        </FormPage >
                        <FormPage tooltip="Lesson Description">
                            <F3>Lesson Description</F3>
                            Write a Description
                            <MinervaTextArea type="text" name="description" theme="minerva" value={formInfo.description} onChange={handleChangeCurriculumDetails} width={500} placeholder="Create description..." />
                        </FormPage>
                        <FormPage tooltip="Finish">
                            <F3>Lesson Preview</F3>
                            How your lesson card will look to others.
                        </FormPage>
                    </FormSlider>
                </Layout>
            </Row>
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