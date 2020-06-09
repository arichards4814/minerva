import React, { useState, useEffect } from 'react'
import F3 from '../assets/typing/F3'
import F5 from '../assets/typing/F5'

// redux
import { connect } from 'react-redux';
import { fetchUsersNotebooks, hideNavling, showNavling, fetchUsersSubscriptions, postNotebooks} from '../actionCreators'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    center: {
        position: "relative",
        left: "40%"
    },
    c: {
        height: 400,
        overflow: "auto"
    }
})
const Learn = props => {
    const classes = useStyles(props)
  


    return (
        <div className="fade-in">
            <div className={classes.center}>
                <F3>Using Minerva</F3>
                <F5>This page has not been created yet :)</F5>
            </div>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Learn);