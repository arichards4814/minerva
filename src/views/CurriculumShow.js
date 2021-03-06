import React, { useState, useEffect } from 'react'
import CreatorHeader from '../icons/Headers/CreatorHeader'
import Row from '../containers/Row'
import Layout from '../containers/Layout'
import F2 from '../assets/typing/F2'
import F3 from '../assets/typing/F3'
import { useLocation } from "react-router-dom";
import TitleBox from '../components/TitleBox'
import Display from '../containers/Display'
import LongCardScroller from '../containers/LongCardScroller'
import { useHistory } from 'react-router-dom'
import Button from '../components/Button'
import { makeStyles } from '@material-ui/core'
import TagsList from '../components/TagsList'
import ShareIconCircle from '../icons/ShareIconCircle'
import EmbedIconCircle from '../icons/EmbedIconCircle'
import Popmenu from '../containers/Popmenu'

// redux
import { connect } from 'react-redux';
import { fetchCurriculum, setCurrentLesson, postNotebooks, postSubscription, fetchUsersSubscriptions } from '../actionCreators'
import TipBubbleLeft from '../icons/Tiny/TipBubbleLeft'
import { handleFonts } from '../assets/schemes/Fonts'


const useStyles = makeStyles({
    top_bar: {
        position: "relative"
    },
    buttonPlacement: {
        margin: 20,
        position: "relative"
    },
    tipbubbleText:{
        position: "absolute",
        bottom: 12,
        left: 228,
        zIndex: 1,
        color: "white",
        cursor: "pointer"
    },
    share_bar: {
        position: "absolute",
        bottom: 5,
        right: 0,
        // zIndex: 1
        // right: 0
    },
    popmenu: {
        backgroundColor: "white",
        position: "absolute",
    },
    popover_input: {
        fontSize: 15,
        padding: 3
    }
})

const CurriculumShow = props => {
    const pathname = useLocation().pathname
    const location = useLocation().pathname.split("/")[2]
    const history = useHistory()
    const classes = useStyles(props)
    const [subscribed, setSubscribed] = useState(false)
    
    const [popover, setPopover] = useState(false)
    const [popoverLink, setPopoverLink] = useState("")
    

    useEffect(() => {
        if(parseInt(location) && props.fetchCurriculum){
            props.fetchCurriculum(parseInt(location))
        }
        props.setCurrentLesson({})
        props.setCurrentNotebook({})
        props.fetchUsersSubscriptions(localStorage.user_id)
    }, [])

    useEffect(()=> {
        setSubscribed(checkIfSubscribed())
    })

    const createNewNotebook = () => {
        console.log("inside create")
        if(props.currentLesson){
            let data = {
                user_id: localStorage.user_id,
                title: props.currentLesson.title,
                material_url: props.currentLesson.material_url
            }

            props.postNotebooks(data)
        }
    }

    const goToNotebook = () => {
        history.push(`/notebooks/${props.currentNotebook.id}`)
    }
    const goToNotebooks = () => {
        history.push(`/notebooks`)
    }

    const subscribe = () => {
        console.log("subscribing...")
        //shouldn't be able to do it if already subscribed.

        //post to subscriptions with user_id and curriculum_id
        //curriculum_id is stored in props.currentCurriculum
        //can probably go through the subscriptions array to find that out.
        let data = {
            curriculum_id: props.currentCurriculum.id,
            user_id: localStorage.user_id
        }

        props.postSubscription(data)
        console.log(props.subscriptions)
        setSubscribed(true)
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

    const handlePopover = (link) => {
        setPopover(!popover)
        setPopoverLink(link)
    }

    return (
        <div className="fade-in">
            <Row marginLeft={80}>
                <Layout width={4} ><div className={classes.top_bar}>
                    <F2 font="secondary"> Curriculum</F2><div className={classes.share_bar}><EmbedIconCircle onClick={() => handlePopover("embed " + pathname)} /><ShareIconCircle onClick={() => handlePopover("share " + pathname)} />{popover && <div className={classes.popmenu}><Popmenu width={250} height={35}><input className={classes.popover_input} value={popoverLink}></input></Popmenu></div>}</div>
                </div>
                    
                    <TitleBox style="rounded" theme="secondary" paddingLeft={3}><F3 font="secondary">{props.currentCurriculum.title}</F3></TitleBox>
                    <div className={classes.buttonPlacement}>
                        
                        {subscribed ? <Button theme={"minerva"} onClick={subscribe}>Unsubscribe</Button> : <Button theme={"secondary"} onClick={subscribe}>Subscribe</Button>}
                        {subscribed && <div className={classes.tipbubbleText} onClick={goToNotebooks}>View Your Notebooks</div>}
                        {subscribed && <TipBubbleLeft onClick={goToNotebooks} theme="minerva" /> }
                    </div>
                    <TagsList tags={props.currentCurriculum.tags}/>
                </Layout>
                <Layout width={7}>
                    <CreatorHeader />
                </Layout>
            </Row>
            <Row marginTop={30} marginLeft={50} >
                <Layout width={6}>
                        <Display {...props.currentLesson} curriculum={props.currentCurriculum}imgHeight={400} imgWidth={"95%"} onClick={createNewNotebook}/>
                </Layout>
                <Layout width={6} marginLeft={5}>
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