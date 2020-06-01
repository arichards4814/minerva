import React, { useEffect, useState } from 'react'
import Row from '../Container/Row'
import Layout from '../Container/Layout'
import F2 from '../Typing/F2'
import F3 from '../Typing/F3'
import { useLocation, useHistory } from "react-router-dom";
import FormSlider from '../Components/FormSlider/FormSlider'
import FormPage from '../Components/FormSlider/FormPage'
import { makeStyles } from '@material-ui/core'
import LessonCard from '../Components/LessonComponents/LessonCard'
import ContentCard from '../Components/ContentCard'
import LessonsPanel from '../Container/LessonsPanel';

import MinervaInput from '../Components/Forms/MinervaInput'
import MinervaTextArea from '../Components/Forms/MinervaTextArea'

// redux
import { connect } from 'react-redux';
import { fetchCurriculum, setCurrentLesson, updateCurrentCurriculum, postLessons, patchLesson, deleteLesson, deleteCurriculum } from '../actionCreators'


import materialManager from '../Managers/materialManager'

const useStyles = makeStyles({
    lessonSubtitle: {
        margin: 20
    },
    lessonHelp: {
        margin: 20
    },
    lessonInput: {
        marginLeft: 20
    },
    lessonCard: {
        marginLeft: 20,
        position: "relative",
        left: 80,
        marginBottom: 50
    }
})
const CurriculumEdit = props => {
    const classes = useStyles(props)
    const history = useHistory()
    const location = useLocation().pathname.split("/")[2]
    const [formInfo, setFormInfo] = useState({
        title: "",
        material_url: "",
        description: "",
        image_url: "",
        lesson_type: "",
        cost: "free"
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

    const getNewLessonImage = (newLessonImageUrl) => {
        setFormInfo({ ...formInfo, image_url: newLessonImageUrl })
    }

    const handleUrl = (e) => {

        materialManager(e.target.value, (response, error) => {
            if(error) return
            setFormInfo({...formInfo, image_url: response.image_url})
            console.log(response, error)
        })

    }
    

    return (
        <div className="fade-in">
            <Row marginLeft={80}>
                <Layout width={12} >
                    <F2 font="secondary"> Curriculum Builder: {props.currentCurriculum.title}  </F2>
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
                            <div className={classes.lessonSubtitle}>Choose a name for this lesson...</div>
                            <div className={classes.lessonInput}><MinervaInput type="text" name="title" theme="minerva" value={formInfo.title} onChange={handleChangeCurriculumDetails} width={500} placeholder="Create title..." /></div>
                        </FormPage>
                        <FormPage tooltip="Lesson Media">
                            <F3>Lesson Media</F3>
                            <div className={classes.lessonSubtitle}>Add Media to this Lesson...</div>
                            <div className={classes.lessonInput}><MinervaInput type="text" name="material_url" theme="minerva" value={formInfo.material_url} onChange={handleUrl} width={500} placeholder="Paste media link here..." /></div>
                            <div className={classes.lessonHelp}>Media could be anything from a Youtube video, to a Tweet, article, blog or even a TikTok.</div>
                        </FormPage >
                        <FormPage tooltip="Lesson Description">
                            <F3>Lesson Description</F3>
                            <div className={classes.lessonSubtitle}>Write a Description</div>
                            <div className={classes.lessonInput}><MinervaTextArea type="text" name="description" theme="minerva" height={130} value={formInfo.description} onChange={handleChangeCurriculumDetails} width={500} placeholder="Create description..." /></div>
                        </FormPage>
                        <FormPage tooltip="Finish">
                            <F3>Lesson Preview</F3>
                            How your lesson card will look to others.

                            <div className={classes.lessonCard}>
                                 <LessonCard user={props.currentUser} description={formInfo.description} title={formInfo.title} ccTitle={props.currentCurriculum.title} ccID={props.currentCurriculum.id} image_url={formInfo.image_url}/>
                            </div>
                        </FormPage>
                    </FormSlider>
                </Layout>
                <Layout width={3}>
                    {/* <div className={classes.lessonCard}>
                        <LessonCard user={props.currentUser} description={formInfo.description} title={formInfo.title} ccTitle={props.currentCurriculum.title} ccID={props.currentCurriculum.id}/>
                    </div> */}
                    {/* <ContentCard videoURL={formInfo.material_url} getNewLessonImage={getNewLessonImage}/> */}
                </Layout>
                <Layout width={2}>
                    <LessonsPanel lessons={props.currentCurriculum.lessons}/>
                </Layout>
            </Row>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        currentCurriculum: state.currentCurriculum,
        currentLesson: state.currentLesson,
        currentUser: state.currentUser
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