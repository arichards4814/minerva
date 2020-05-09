import React from 'react';
import { makeStyles } from '@material-ui/core'

// redux
import { connect } from 'react-redux';
import { } from '../actionCreators'


const useStyles = makeStyles({
    root: {
        position: "absolute",
        bottom: 50,
        left: "45%"
    },
    
})
const SpotifyFrame = props => {
    const classes = useStyles(props)

    const embed_url = () => {
        let split_url = props.material_url.split("/")

        split_url.splice(3, 0, "embed")
        
        split_url.forEach((item, index) => {
            split_url[index] = item + "/"
        })
        return split_url.join('')
    }
    
    return (
        <div>
            <iframe src={embed_url()} width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
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

export default connect(mapStateToProps, mapDispatchToProps)(SpotifyFrame);
