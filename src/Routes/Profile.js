import React from 'react'
import CreatorHeader from '../Icons/Headers/CreatorHeader'
import NotebooksHeader from '../Icons/Headers/NotebooksHeader'
import { makeStyles } from '@material-ui/core'
import Row from '../Container/Row'
import Layout from '../Container/Layout'

import F3 from '../Typing/F3'

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

                    <F3 >Hello</F3>
                    <img src={'/logo512.png'} className={classes.image}/>
                    <textarea className={classes.input}></textarea><br></br>
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

export default Profile