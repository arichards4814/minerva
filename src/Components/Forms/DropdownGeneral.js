import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import HandleScheme from '../../assets/schemes/HandleScheme'
import Button from '../Button'


// redux
import { connect } from 'react-redux';
import { fetchUsersCurriculums, postNotebooksLessons } from '../../actionCreators'

const useStyles = makeStyles({
    root: {
        borderWidth: 8,
        borderColor: props => HandleScheme(props),
        borderStyle: "solid",
        borderRadius: "40px",
        paddingLeft: 20,
        width: props => {
            if (props.width) {
                return props.width
            } else {
                return 300
            }
        },
        height: props => {
            if (props.height) {
                return props.height
            } else {
                return 50
            }
        },
        outline: 0,
        fontSize: props => {
            if (props.fontSize) {
                return props.fontSize
            } else {
                return 16
            }
        },
    }
})

const DropdownGeneral = props => {
    const classes = useStyles(props)
    const [curriculum, setCurriculum] =  useState("")
    const [chosenLesson, setChosenLesson] = useState("")

    const handleChange = (e) => {
        let curriculumx = props.info.filter(curr => curr.curriculum.id === parseInt(e.target.value))
        console.log(curriculumx[0].curriculum.lessons)
        setCurriculum(curriculumx[0].curriculum.lessons)
    }

    const handleLessonChange = (e) => {
        console.log(e.target.value)
        setChosenLesson(parseInt(e.target.value))
    }

    const renderOptions = () => {
        if(props.info){
            return props.info.map(item => <option key={item.curriculum.id} value={item.curriculum.id}>{item.curriculum.title}</option>)
        }
    }

    const renderLessons = () => {
        // grab the lessons
        if (curriculum.length > 0) {
            return curriculum.map(item => <option key={item.id} value={item.id}>{item.title}</option>)
        }
    }

    const handleSubmit = () => {
        console.log("notebook id", props.currentNotebook.id)
        console.log("chosen lesson id",chosenLesson)
        let ids = {
            lesson_id: chosenLesson,
            notebook_id: props.currentNotebook.id
        }

        props.postNotebooksLessons(ids)
    }


    return (
        <div>
            <select className={classes.root} onChange={handleChange}>
                <option value="">Choose a Curriculum</option>
                {renderOptions()}
            </select>
            {curriculum != "" &&
            <select className={classes.root} onChange={handleLessonChange}>
                <option value="">Choose a Lesson</option>
                {renderLessons()}
            </select>}
            {chosenLesson && <Button onClick={handleSubmit} theme="minerva"> Add Lesson </Button>}
        </div>
   )
}


const mapStateToProps = (state) => {
    return {
        thisUsersCurriculums: state.thisUsersCurriculums,
        currentNotebook: state.currentNotebook
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsersCurriculums: (user_id) => dispatch(fetchUsersCurriculums(user_id)),
        postNotebooksLessons: (data) => dispatch(postNotebooksLessons(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownGeneral);