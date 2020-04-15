import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import Dock from './Dock.js'
import logo from '../SVGs/logo.svg'
import LogoHolder from '../Components/LogoHolder.js'
import bottomLine from '../SVGs/bottom_line.svg'
import Expander from '../Icons/Expander'
import LoginPopper from '../Components/LoginPopper'

// redux
import { connect } from 'react-redux';

import { showNavling } from '../actionCreators'
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
            {popper && <LoginPopper />}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        navlingHidden: state.navlingHidden
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showNavling: () => dispatch(showNavling()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navling);
