import React, { useEffect, useState } from 'react';
import Row from '../containers/Row';
import Layout from '../containers/Layout';
import { useLocation, useHistory } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core';
import { Button as MaterialButton } from '@material-ui/core';
import LessonsPanel from '../containers/LessonsPanel';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import CreatorAddLessons from '../containers/CreatorAddLessons';
import CreatorEditCurrDetails from '../containers/CreatorEditCurrDetails';
import CreatorPublish from '../containers/CreatorPublish';


// redux
import { connect } from 'react-redux';
import { fetchCurriculum, setCurrentLesson, updateCurrentCurriculum, postLessons, patchLesson, deleteLesson, deleteCurriculum } from '../actionCreators'


const StyledTabs = withStyles({
    indicator: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        "& > span": {
            maxWidth: 40,
            width: "100%",
            backgroundColor: "#ED3466"
        }
    }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: "none",
        color: "#000000",
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        "&:focus": {
            opacity: 1
        }
    }
}))(props => <Tab disableRipple {...props} />);

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
const CurriculumCreator = props => {
    const classes = useStyles(props)
    const location = useLocation().pathname.split("/")[2]
    const history = useHistory()
    const [formInfo, setFormInfo] = useState({
        title: "",
        material_url: "",
        description: "",
        image_url: "",
        lesson_type: "",
        cost: "free"
    }) 
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    // Get All Curriculum information
    useEffect(() => {
        if (parseInt(location) && props.fetchCurriculum) {
            props.fetchCurriculum(parseInt(location))
        }
    }, [])

    
    return (
        <div className="fade-in">
            <Row marginLeft={80}>
                <Layout width={12} >
                    <div className={classes.demo2}>
                        <div style={{display: "inline-block"}}><MaterialButton variant="outlined" onClick={() => {history.push('/creator')}}>Back to Dashboard</MaterialButton></div>
                        <div style={{ display: "inline-block" }}>
                        <StyledTabs
                            value={value}
                            onChange={handleChange}
                            aria-label="styled tabs example"
                        >
                            <StyledTab label="Curriculum Info" />
                            <StyledTab label="Add Lessons" />
                            <StyledTab label="Publish" />
                        </StyledTabs>
                        </div>
                        <Typography className={classes.padding} />
                    </div>
                    {/* <F2 font="secondary"> Curriculum Builder: {props.currentCurriculum.title}  </F2> */}
                </Layout>
            </Row>
            
            {/* This is a slider for creating awesome forms. */}
            <Row marginTop={10}>
                <Layout width={2}></Layout>
                <Layout width= {5}>

                    {value === 0 && <CreatorEditCurrDetails />}
                    {value === 1 && <CreatorAddLessons />}
                    {value === 2 && <CreatorPublish />}
                </Layout>
                <Layout width={1}>
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

export default connect(mapStateToProps, mapDispatchToProps)(CurriculumCreator);