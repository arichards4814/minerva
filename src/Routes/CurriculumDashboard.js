import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import Button from '../Components/Button'

// redux
import { connect } from 'react-redux';
import { fetchCurriculum, fetchUsersCurriculums, deleteCurriculum } from '../actionCreators'


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
        backgroundColor: "#d1d1d1"
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
        bottom: 16
    },
    curriculumSelect: {
        width: "100%",
        backgroundColor: "white",
        height: 30,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "gray",
        paddingLeft: 10,
        marginTop: 1
    }
})
const CurriculumDashboard = props => {
    const classes = useStyles(props)

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
                        </div>           
                        <div className={classes.leftPanelFooter}>
                            <Button theme="secondary">Create New Curriculum</Button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.rightPanel}>
                        {props.currentCurriculum.title}
                        <div className={classes.rightPanelFooter}>
                            {!props.currentCurriculum.title ? null : <Button theme="minerva">Edit Curriculum</Button>}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    
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
        deleteCurriculum: (id) => dispatch(deleteCurriculum(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurriculumDashboard);