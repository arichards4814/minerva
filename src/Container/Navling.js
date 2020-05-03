import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import Dock from './Dock.js'
import logo from '../SVGs/logo.svg'
import LogoHolder from '../Components/LogoHolder.js'
import bottomLine from '../SVGs/bottom_line.svg'
import Expander from '../Icons/Expander'
import LoginPopper from '../Components/LoginPopper'
import { Link } from 'react-router-dom'

// redux
import { connect } from 'react-redux';

import { showNavling, logout } from '../actionCreators'
import { secondary } from '../Schemes/ColorScheme.js'


const useStyles = makeStyles({
    root: {
        height: props => {
            if(props.navlingHidden){
                return 10
            } else {
                return 120
            }
        },
        width: "100%",
        position: "sticky",
        top: 0,
        backgroundColor: "white",
        zIndex: 1,
        paddingLeft: 20
    },
    expander: {
        position: "absolute",
        right: 20
    },
    loginInfo:{
        position: "absolute",
        right: 67,
        top: 0,
        backgroundColor: "#FFD000",
        width: 227,
        textAlign: "right",
        padding: 2
    },
    spread: {
        paddingLeft: 5,
    }
});


const Navling = props => {
    const classes = useStyles(props)
    const [popper, setPopper] = useState(false)


    return(
        <div className={!props.navlingHidden ? classes.root : classes.root + " navling-hidden"}>
            {!props.navlingHidden && <LogoHolder image={logo} onClick={() => setPopper(!popper)}/>}
            {!props.navlingHidden && <Dock align="right"/>}
            <img src={bottomLine} ></img>
            <div className={classes.expander}>
                {props.navlingHidden && <Expander onClick={props.showNavling} theme={"secondary"}/>}
            </div>
            <div className={classes.loginInfo}>
                {!props.navlingHidden && props.currentUser.id && <Link onClick={props.logout}>Logout</Link>}
                {!props.navlingHidden && !props.currentUser.id && <Link to={{ pathname: "/login" }}>Login</Link>}
                <span className={classes.spread}>
                    {!props.navlingHidden && !props.currentUser.id && <Link to={{ pathname: "/signup" }}>Signup</Link>}</span>
            </div>
            {/* {popper && <LoginPopper />} */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        navlingHidden: state.navlingHidden,
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showNavling: () => dispatch(showNavling()),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navling);
