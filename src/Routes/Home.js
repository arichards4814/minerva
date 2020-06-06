import React from 'react'
import MajesticButton from '../components/MajesticButton'
import F3 from '../Typing/F3'
import F4 from '../Typing/F4'
import Row from '../containers/Row'
import Layout from '../containers/Layout'
import TitleBox from '../components/TitleBox'
import { useHistory } from 'react-router-dom'
import Carousel from '../containers/Carousel'
import LargeImage from '../components/LargeImage'

// redux
import { connect } from 'react-redux';
import { fetchCurriculums } from '../actionCreators'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        position: "relative"
    },
    blogs: {
        marginLeft: 30,
        marginTop: 30
    }
})

const Home = props =>{
    const classes = useStyles(props)
    let history = useHistory()

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

            <Carousel curriculums={props.curriculums} title="Trending Now:" /> 

            <Carousel curriculums={props.curriculums} title="Adobe:" /> 
                
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