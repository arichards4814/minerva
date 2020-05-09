import React from 'react';
import { makeStyles } from '@material-ui/core'
import AddNew from '../Icons/AddNew'
import EditExisting from '../Icons/EditExisting'

// redux
import { connect } from 'react-redux';
import { } from '../actionCreators'


const useStyles = makeStyles({
    tray: {
        position: "absolute",
        bottom: 50,
        left: "45%"
    },
    textInput:{
        position: "absolute",
        bottom: 130,
        left: "38%",
        height: 100,
        width: 300,
        backgroundColor: "blue"
    },
    input: {
        resize: "none",
        outline: "none",
        width: "100%",
        height: "100%",
        fontSize: 20
    }
})
const MaterialFrame = props => {
    const classes = useStyles(props)
  

    return (
        <div>
            <iframe id="iframeId" src={props.material_url} style={{ width: "95%", height: 400 }}></iframe>
                
                 {props.frameType && props.frameType === "fullscreen" && <React.Fragment><div className={classes.textInput}><textarea className={classes.input}></textarea></div>
                <div className={classes.tray}><AddNew /><EditExisting /></div></React.Fragment>}
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MaterialFrame);
