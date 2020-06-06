import React from 'react'
import CreatorHeader from '../icons/Headers/CreatorHeader'
import NotebooksHeader from '../icons/Headers/NotebooksHeader'
import { makeStyles } from '@material-ui/core'
import Row from '../containers/Row'
import Layout from '../containers/Layout'
import AppleIconNormal from '../icons/AppleIconNormal'
import F3 from '../Typing/F3'


// redux
import { connect } from 'react-redux';
import { } from '../actionCreators'

const useStyles = makeStyles({
    root: {

    },
    headers: {
        width: 800,
        backgroundColor: "lightgray"
    },
    input: {

        display: "inline-block",
        resize: "none",
        outline: "none",
        width: 500,
        height: 200,
        fontSize: 20,
    },
    image: {
        width: 300
    },
    num_badge: {
        maxWidth: 30,
        padding: 3,
        borderRadius: "50%",
        backgroundColor: "#00B79D",
        textAlign: "center",
        display: "inline-block",
        cursor: "default",
        position: "relative",
        left: 8,
        bottom: 10
    },
    info_panel:{
        display: "inline-block",
    }
})
const Profile = (props) => {
    const classes = useStyles(props)


    return (
        <div>
            <Row>
                <Layout width={2.5}>

                </Layout>
                <Layout width={9}>
                    
                    
                    <F3 >Hello {props.currentUser.username}</F3>
                    <img src={'/logo512.png'} className={classes.image}/>
                    <div className={classes.info_panel}>
                        <div>
                            <div className={classes.num_badge}>32</div><AppleIconNormal />
                        </div>
                            <textarea className={classes.input}></textarea>
                    </div>
                    <br></br>
                    You don't have any curriculums yet!
                    <div className={classes.headers}>
                        <CreatorHeader /> 
                    </div>
                    You don't have any notebooks yet!
                    <div className={classes.headers}>
                        <NotebooksHeader />
                    </div>
                </Layout>
            </Row>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
