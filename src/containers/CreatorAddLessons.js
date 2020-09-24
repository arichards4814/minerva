import React, { useEffect, useState } from 'react'
import F3 from '../assets/typing/F3'
import FormSlider from '../components/forms/slider/FormSlider'
import FormPage from '../components/forms/slider/FormPage'
import { makeStyles, withStyles } from '@material-ui/core'
import LessonCard from '../components/lessons/LessonCard'

import MinervaInput from '../components/forms/MinervaInput'
import MinervaTextArea from '../components/forms/MinervaTextArea'



// redux
import { connect } from 'react-redux';
import { fetchCurriculum, setCurrentLesson, updateCurrentCurriculum, postLessons, patchLesson, deleteLesson, deleteCurriculum } from '../actionCreators'


import materialManager from '../helpers/materialManager'
import CheckCircle from '../icons/CheckCircle'
import CheckEx from '../icons/CheckEx'



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
    },
    finalCheckmark: {
        position: "absolute",
        bottom: 20,
        left: 250
    },
    demo2: {
        backgroundColor: "#ffffff"
    }
})


const CreatorAddLessons = props => {
        const classes = useStyles(props)
        const [formInfo, setFormInfo] = useState({
            title: "",
            material_url: "",
            description: "",
            image_url: "",
            lesson_type: "",
            cost: "free"
        }) 

    const handleChangeCurriculumDetails = (e) => {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValidForm(formInfo)) {
            props.postLessons({ ...formInfo, curriculum_id: props.currentCurriculum.id })
        } else {
            console.log("Not valid form info.")
        }
    }

    const isValidForm = formInfo => {
        if (formInfo.title.length > 3 && formInfo.description.length > 10 && formInfo.image_url.length > 3) {
            return true
        } else {
            return false
        }
    }

    const handleUrl = (e) => {
        setFormInfo({ ...formInfo, material_url: e.target.value })
        materialManager(e.target.value, (response, error) => {
            console.log(response)
            if (error) return
            setFormInfo({ ...formInfo, image_url: response.image_url, material_url: response.url })
            console.log(response, error)
        })
    }

    return (
        <div>
            <FormSlider numOfPages={4}
                handleSubmit={handleSubmit}
                tooltips={["Title", "Media", "Description", "Finish"]}>
                <FormPage tooltip="Lesson Title">
                    <F3>Lesson Title</F3>
                    <div className={classes.lessonSubtitle}>Choose a name for this lesson...</div>
                    <div className={classes.lessonInput}><MinervaInput type="text" name="title" theme="minerva" value={formInfo.title} onChange={handleChangeCurriculumDetails} width={500} placeholder="Create title..." />
                        {formInfo.title.length > 3 && <CheckCircle width={20} height={20} />}</div>

                </FormPage>
                <FormPage tooltip="Lesson Media">
                    <F3>Lesson Media</F3>
                    <div className={classes.lessonSubtitle}>Add Media to this Lesson...</div>
                    <div className={classes.lessonInput}><MinervaInput type="text" name="material_url" theme="minerva" value={formInfo.material_url} onChange={handleUrl} width={500} placeholder="Paste media link here..." />
                        {formInfo.image_url.length > 3 && <CheckCircle width={20} height={20} />}</div>
                    <div className={classes.lessonHelp}>Media could be anything from a Youtube video, to a Tweet, article, blog or even a TikTok.</div>
                </FormPage >
                <FormPage tooltip="Lesson Description">
                    <F3>Lesson Description</F3>
                    <div className={classes.lessonSubtitle}>Write a Description</div>
                    <div className={classes.lessonInput}><MinervaTextArea type="text" name="description" theme="minerva" height={130} value={formInfo.description} onChange={handleChangeCurriculumDetails} width={500} placeholder="Create description..." />
                        {formInfo.description.length > 10 && formInfo.description.length < 240 && <CheckCircle width={20} height={20} />}</div>
                </FormPage>
                <FormPage tooltip="Finish">
                    <F3>Lesson Preview</F3>
                            How your lesson card will look to others.
                            <div className={classes.lessonCard}>
                        <LessonCard user={props.currentUser} description={formInfo.description} title={formInfo.title} ccTitle={props.currentCurriculum.title} ccID={props.currentCurriculum.id} image_url={formInfo.image_url} />
                    </div>
                    <div className={classes.finalCheckmark}>
                        Ready: {isValidForm(formInfo) ? <CheckCircle width={20} height={20} /> : <CheckEx width={20} height={20} />}
                    </div>
                </FormPage>
            </FormSlider>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreatorAddLessons);