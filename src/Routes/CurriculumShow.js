import React, { useState, useEffect } from 'react'
import CreatorHeader from '../Icons/Headers/CreatorHeader'
import Row from '../Container/Row'
import Layout from '../Container/Layout'
import F2 from '../Typing/F2'
import F3 from '../Typing/F3'
import { useLocation } from "react-router-dom";
import TitleBox from '../Components/TitleBox'
import Display from '../Container/Display'
import LongCardScroller from '../Container/LongCardScroller'
import { useHistory } from 'react-router-dom'
import Button from '../Components/Button'
import { makeStyles } from '@material-ui/core'
import TagsList from '../Components/TagsList'

// redux
import { connect } from 'react-redux';
import { fetchCurriculum, setCurrentLesson, postNotebooks, postSubscription, fetchUsersSubscriptions } from '../actionCreators'


const useStyles = makeStyles({
    buttonPlacement: {
        margin: 20
    }
})

const CurriculumShow = props => {
    const location = useLocation().pathname.split("/")[2]
    const history = useHistory()
    const classes = useStyles(props)
    

    useEffect(() => {
        if(parseInt(location) && props.fetchCurriculum){
            props.fetchCurriculum(parseInt(location))
        }
        props.setCurrentLesson({})
        props.setCurrentNotebook({})
        props.fetchUsersSubscriptions(40)
    }, [])


    const createNewNotebook = () => {
        console.log("inside create")
        if(props.currentLesson){
            let data = {
                user_id: 40,
                title: props.currentLesson.title,
                material_url: props.currentLesson.material_url
            }

            props.postNotebooks(data)
        }
    }

    const goToNotebook = () => {
        history.push(`/notebooks/${props.currentNotebook.id}`)
    }

    const subscribe = () => {
        console.log("subscribing...")
        //shouldn't be able to do it if already subscribed.

        //post to subscriptions with user_id and curriculum_id
        //curriculum_id is stored in props.currentCurriculum
        //can probably go through the subscriptions array to find that out.
        let data = {
            curriculum_id: props.currentCurriculum.id,
            user_id: 40
        }

        props.postSubscription(data)
    }

    const checkIfSubscribed = () => {
        //go through subscriptions and see if ID exists.
        let curriculum = null
        if(props.subscriptions[0]){
            curriculum = props.subscriptions.find(sub => sub.curriculum.id === props.currentCurriculum.id)
        }
        if (curriculum){
            return true
        } else {
            return false
        }
    }

    return (
        <div className="fade-in">
            <Row marginLeft={80}>
                <Layout width={4} >
                    <F2 font="secondary"> Curriculum</F2>
                    <TitleBox style="rounded" theme="secondary" paddingLeft={3}><F3 font="secondary">{props.currentCurriculum.title}</F3></TitleBox>
                    <div className={classes.buttonPlacement}>
                        {checkIfSubscribed() ? <Button theme={"minerva"} onClick={subscribe}>Unsubscribe</Button> : <Button theme={"secondary"} onClick={subscribe}>Subscribe</Button>}
                    </div>
                    <TagsList tags={props.currentCurriculum.tags}/>
                </Layout>
                <Layout width={7}>
                    <CreatorHeader />
                </Layout>
            </Row>
            <Row marginTop={30} marginLeft={3} >
                <Layout width={6}>
                        <Display {...props.currentLesson} imgHeight={400} imgWidth={"95%"} onClick={createNewNotebook}/>
                </Layout>
                <Layout width={6}>
                    <LongCardScroller info={props.currentCurriculum.lessons} style={"show"} placeholder="There are no lessons in this curriculum" headerTitle="Lessons:" />
                </Layout>

            </Row>
            {checkIfSubscribed()}
            {/* </Row> */}
         </div>
    )
}



const mapStateToProps = (state) => {
    return {
        currentCurriculum: state.currentCurriculum,
        currentLesson: state.currentLesson,
        currentNotebook: state.currentNotebook,
        subscriptions: state.subscriptions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurriculum: (id) => dispatch(fetchCurriculum(id)),
        setCurrentLesson: (lesson) => dispatch(setCurrentLesson(lesson)),
        setCurrentNotebook: (notebook) => dispatch(setCurrentLesson(notebook)),
        postNotebooks: (data) => dispatch(postNotebooks(data)),
        postSubscription: (data) => dispatch(postSubscription(data)),
        fetchUsersSubscriptions: (id) => dispatch(fetchUsersSubscriptions(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurriculumShow);