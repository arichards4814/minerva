import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import "../MajesticButton.scss";
import { useHistory } from 'react-router-dom';


// redux
import { connect } from 'react-redux';
import { fetchCurriculums} from '../actionCreators';



const useStyles = makeStyles({
    root: {
        width: 360
    }
})
const MajesticButton = props => {

    const [rippling, setRippling] = useState(false)
    const classes = useStyles(props)
    const [loginHover, setLoginHover] = useState(false)
    const history = useHistory()

    //On hover of a protected button say, Sign Up or Sign In to Access
    //if currentUser exists, then 

    const clickHandler = () => {

        if(props.currentUser && props.onClick){
            props.onClick()
        } else {
            history.push('/signup')
        }

        setRippling(true)
        setTimeout(function () { setRippling(false) }, 1000);
    }

    const loginCheck = () => {
        if(props.currentUser){
            
        } else {
            setLoginHover(true)
        }
    }
    
    const mouseOut = () => {
        setLoginHover(false)
    }
    

    return (
        <div>
            <button className={classes.root + " majestic-button minerva-button js-ripple"} onClick={clickHandler} onMouseOver={loginCheck} onMouseOut={mouseOut}>
                <div className={rippling ? "c-ripple js-ripple  is-active" : "c-ripple js-ripple"}>
                    <span className="c-ripple__circle" ></span>
                </div>{!loginHover ? props.children : "Sign Up or Log In To Experience"}</button>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurriculums: () => dispatch(fetchCurriculums())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MajesticButton);
