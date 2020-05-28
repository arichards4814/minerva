import React from 'react'
import { makeStyles } from '@material-ui/core'
import LeftBackUnaltered from '../Icons/leftBackUnaltered'
import InfoIcon from '../Icons/InfoIcon'
import HideIcon from '../Icons/HideIcon'
import TinyNotebook from '../Icons/Tiny/TinyNotebook'


// redux
import { connect } from 'react-redux';
import { toggleOverlay, hideNavling, showNavling} from '../actionCreators'



const useStyles = makeStyles({
    root:{
        padding: 20,
        height: 50,
        // borderStyle: "solid"
    }
})


const NotebooksDock = props => {
    const classes = useStyles(props)



    return(
        <div className={classes.root}>
            <div style={{width: 30, display: 'inline-block'}}><TinyNotebook /></div>
            <LeftBackUnaltered theme="third" /><LeftBackUnaltered pointing="right" theme="third" />
            <InfoIcon width={30} height={30} onClick={props.toggleOverlay}/>
            <LeftBackUnaltered pointing={props.navlingHidden ? "down" : "up"} onClick={props.navlingHidden ? props.showNavling : props.hideNavling} theme="secondary" />
            {/* {!props.navlingHidden && } */}
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
        toggleOverlay: () => dispatch(toggleOverlay()),
        hideNavling: () => dispatch(hideNavling()),
        showNavling: () => dispatch(showNavling()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebooksDock);
