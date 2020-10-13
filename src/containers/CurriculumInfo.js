import React from 'react'
import { makeStyles } from '@material-ui/core'
 
// redux
import { connect } from 'react-redux';
import {  } from '../actionCreators'

const useStyles = makeStyles({
    title: {
        fontSize: 30,
        padding: 2
    },
    root: {
        width: "100%"
    },
    left: {
        display: "inline-block",
        height: 300,
        width: "49%",
        backgroundColor: "#ededed",
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
        width: "100%",
        backgroundColor: "white",
        height: 100,
        padding: 20
    },
    image: {
        width: "100%",
        height: "100%"
    }
})
const CurriculumInfo = props => {
    const classes = useStyles(props)

    return (
        <div className={classes.root}>
            <div className={classes.title}>{props.currentCurriculum.title}</div>
            <div className={classes.left}>
                <img className={classes.image} src={props.currentCurriculum.image_url}></img>
            </div>
            <div className={classes.right}>
            </div>
            <div className={classes.description}>
                Description: {props.currentCurriculum.description}
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

export default connect(mapStateToProps, mapDispatchToProps)(CurriculumInfo);