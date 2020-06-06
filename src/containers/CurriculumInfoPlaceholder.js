import React from 'react'
import { makeStyles } from '@material-ui/core'
 
// redux
import { connect } from 'react-redux';
import {  } from '../actionCreators'

const useStyles = makeStyles({
    title: {
        height: 45,
        padding: 2,
        backgroundColor: "white",
        margin: 4
    },
    root: {
        width: "100%"
    },
    left: {
        display: "inline-block",
        height: 300,
        width: "49%",
        backgroundColor: "white",
        margin: 4
    },
    right: {
        display: "inline-block",
        height: 300,
        width: "49%",
        backgroundColor: "white",
        verticalAlign: "top",
        margin: 4
    },
    description: {
        width: "99%",
        backgroundColor: "white",
        height: 100,
        padding: 20,
        margin: 4
    },
    image: {
        width: "100%",
        height: "100%"
    }
})
const CurriculumInfoPlaceholder = props => {
    const classes = useStyles(props)

    return (
        <div className={classes.root}>
            <div className={classes.title}></div>
            <div className={classes.left}>
                
            </div>
            <div className={classes.right}>

            </div>
            <div className={classes.description}>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        currentCurriculum: state.currentCurriculum
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurriculumInfoPlaceholder);