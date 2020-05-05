import React, { useState } from 'react'
import MajesticButton from '../Components/MajesticButton'
import F3 from '../Typing/F3'
import F4 from '../Typing/F4'
import Row from '../Container/Row'
import Layout from '../Container/Layout'
import TitleBox from '../Components/TitleBox'
import Card from '../Components/Card'
import LoadingAnimation from '../Components/LoadingAnimation'
import LeftBackUnaltered from '../Icons/leftBackUnaltered'
import { useHistory } from 'react-router-dom'


// redux
import { connect } from 'react-redux';
import { fetchCurriculums } from '../actionCreators'

import { makeStyles } from '@material-ui/core'
import LargeImage from '../Components/LargeImage'

const useStyles = makeStyles({
    root: {
        position: "relative"
    },
    leftToRightScroll: {
        marginTop: 30,
        marginBottom: 30,
        overflowX: 'scroll',
        overflowY: 'hidden',
        whiteSpace: 'nowrap',
        paddingBottom: 10,
        width: "80%",
        marginLeft: "10%",
        scrollBehavior: "smooth"
    },
    leftChevron: {
        display: 'inline-block',
        position: 'absolute',
        left: 60,
        top: 160

    },
    rightChevron: {
        display: 'inline-block',
        position: 'absolute',
        right: 60,
        bottom: 160
    },
    blogs: {
        marginLeft: 30,
        marginTop: 30
    }
})

const Home = props =>{
    const classes = useStyles(props)
    let history = useHistory()
    const [popper, setPopper] = useState(false)
    //hmm should i have this here...
    
    const renderCurriculums = () => {
        if(props.curriculums){
           return props.curriculums.map(curriculum => <Card key={curriculum.id} {...curriculum} onClick={() => history.push(`/curriculums/${curriculum.id}`)}/>)
        }
    }

    const scrollRight = () => {
         let content = document.getElementById('content');
        let scroll_left_location = content.scrollLeft += 1200 
        content.scrollLeft = scroll_left_location
    }

    const scrollLeft = () => {
        let content = document.getElementById('content');
        let scroll_left_location = content.scrollLeft -= 1200
        content.scrollLeft = scroll_left_location
    }


    return(
        <div className="fade-in">
            <Row marginTop={40} marginBottom={40}>
                <Layout width={4} align="center">
                    <MajesticButton onClick={() => history.push("/explore")}><F3 font="secondary">Explore Curriculums</F3></MajesticButton>
                </Layout >
                <Layout width={4} align="center">
                    <MajesticButton onClick={() => history.push("/notebooks")}><F3 font="secondary">My Notebooks</F3></MajesticButton>
                </Layout>
                <Layout width={4} align="center">
                    <MajesticButton onClick={() => history.push("/creator")}><F3 font="secondary">Create Curriculums</F3></MajesticButton>
                </Layout>
            </Row>
            <Row marginLeft="10%">
                <TitleBox theme="secondary"><F4 font="secondary">Trending Now:</F4></TitleBox>
            </Row>
            <div className={classes.root}>
                <div className={classes.leftChevron}>
                    <LeftBackUnaltered theme="minerva" onMouseDown={scrollLeft}/>
                </div>
                <div className={classes.leftToRightScroll} id="content">
                        {props.curriculums && props.curriculums.length > 0 ? renderCurriculums() : <LoadingAnimation />}
                </div>
                <div className={classes.rightChevron}>
                    <LeftBackUnaltered theme="minerva" pointing="right" onMouseDown={scrollRight}/>
                </div>
            </div>

            <Row marginLeft="10%">
                <TitleBox theme="secondary"><F4 font="secondary">Adobe:</F4></TitleBox>
            </Row>
            <div className={classes.root}>
                <div className={classes.leftChevron}>
                    <LeftBackUnaltered theme="minerva" onMouseDown={scrollLeft} />
                </div>
                <div className={classes.leftToRightScroll} id="content">
                    {props.curriculums && props.curriculums.length > 0 ? renderCurriculums() : <LoadingAnimation />}
                </div>
                <div className={classes.rightChevron}>
                    <LeftBackUnaltered theme="minerva" pointing="right" onMouseDown={scrollRight} />
                </div>
            </div>
                

            <Row marginLeft="10%">
                <TitleBox theme="secondary"><F4 font="secondary">Guides on Using Minerva:</F4></TitleBox>
            </Row>
            <Row>
                <div className={classes.blogs}>
                    <LargeImage src="blog1.png" />
                    <LargeImage src="blog2.png" />
                </div>
            </Row>

        </div>
    )
}




const mapStateToProps = (state) => {
    return {
        curriculums: state.curriculums,
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurriculums: () => dispatch(fetchCurriculums())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);