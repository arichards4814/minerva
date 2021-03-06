import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import Button from '../components/Button'
import CurriculumInfo from '../containers/CurriculumInfo'
import CurriculumInfoPlaceholder from '../containers/CurriculumInfoPlaceholder'
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom'

// redux
import { connect } from 'react-redux';
import { fetchCurriculum, fetchUsersCurriculums, deleteCurriculum, postCurriculums } from '../actionCreators'


const useStyles = makeStyles({
    root: {
        position: "relative"
    },
    header: {
        height: 40
    },
    leftHeader: {
        height: 40,
        padding: 30
    },
    leftPanel: {
        height: 500,
        backgroundColor: "#ededed"
    },
    leftBody: {
        height: "78%",
        backgroundColor: "#d1d1d1",
        overflow: "auto"
    },
    leftPanelFooter: {
        position: "absolute",
        bottom: 16,
        paddingLeft: 42
    },
    rightPanel: {
        height: 500,
        backgroundColor: "#ededed"
    },
    rightPanelFooter: {
        position: "absolute",
        bottom: 20,
        right: 140
    },
    curriculumSelect: {
        width: "100%",
        backgroundColor: "white",
        height: 40,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "gray",
        paddingTop: 10,
        paddingLeft: 10,
        marginTop: 1
    },
    newCurrButton: {
        position: "relative",
        backgroundColor: "#00B79D",
        height: 40,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "gray",
        paddingTop: 10,
        paddingLeft: 10,
        marginTop: 1
    },
    icon: {
        display: "inline-block",
        position: "absolute",
        right: 5,
        top: 7
    },
    button: {
        display: "inline-block",
        margin: 2
    }
})
const CurriculumDashboard = props => {
    const classes = useStyles(props)
    const history = useHistory()

    useEffect(() => {
        props.fetchUsersCurriculums(localStorage.user_id)
    }, [])
    
    const renderCurriculums = () => {
    return props.thisUsersCurriculums.map(curriculum => {
        if(curriculum.id == props.currentCurriculum.id){
            return <div key={curriculum.id} onClick={() => selectCurriculum(curriculum.id)} className={classes.curriculumSelect + " hover"} >{curriculum.title}</div>
        } else {
            return <div key={curriculum.id} onClick={() => selectCurriculum(curriculum.id)} className={classes.curriculumSelect + " hover currentCur"} >{curriculum.title}</div>
        }})
    }

    const selectCurriculum = (id) => {
        console.log(props.currentCurriculum)
        props.fetchCurriculum(id)
    }


    const createBlankCurriculum = () => {

        if (window.confirm("Continue to create a curriculum?")) {
            props.postCurriculums({
                user_id: localStorage.user_id,
                title: "Unnamed"}, null)
        }
    }

    const deleteCurriculum = (id) => {
        if (window.confirm("Are you sure you want to delete this curriculum?")) {
                props.deleteCurriculum(id)
        }
    }

    return( 
        <div className={classes.root}>
            <div className={classes.header}>

            </div>
            <Grid container spacing={3}>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                    <div className={classes.leftPanel}>
                        <div className={classes.leftHeader}>
                            Your Curriculums
                        </div>   
                        <div className={classes.leftBody}>
                            {renderCurriculums()}
                            <div onClick={createBlankCurriculum} className={classes.newCurrButton + " hover-green"} >Create New Curriculum
                            <div className={classes.icon}><AddIcon /></div></div>

                        </div>           
                        <div className={classes.leftPanelFooter}>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <div className={classes.rightPanel}>

                        {props.currentCurriculum.title ? <CurriculumInfo /> : <CurriculumInfoPlaceholder /> }
                        
                        <div className={classes.rightPanelFooter}>
                            {!props.currentCurriculum.title ? null : <div className={classes.button}><Button theme="secondary" onClick={() => history.push(`/creator/edit/${props.currentCurriculum.id}`)}>Edit Curriculum</Button></div>}
                            {!props.currentCurriculum.title ? null : <div className={classes.button}><Button theme="minerva" onClick={() => deleteCurriculum(props.currentCurriculum.id)}>Delete Curriculum</Button></div>}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={1}>
                    
                </Grid>
            </Grid>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        thisUsersCurriculums: state.thisUsersCurriculums,
        currentCurriculum: state.currentCurriculum,
        currentLesson: state.currentLesson
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurriculum: (id) => dispatch(fetchCurriculum(id)),
        fetchUsersCurriculums: (user_id) => dispatch(fetchUsersCurriculums(user_id)),
        deleteCurriculum: (id) => dispatch(deleteCurriculum(id)),
        postCurriculums: (curriculum, tags) => dispatch(postCurriculums(curriculum, tags)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurriculumDashboard);