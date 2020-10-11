import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import { fetchUsersStudybuds } from '../../requests/studybudRequests'


const StudybudViewer = props => {
    const [studybuds, setStudybuds] = useState([])

    useEffect(() => {
        fetchUsersStudybuds(localStorage.user_id)
        .then(body => setStudybuds(body))
    }, [])

    const renderStudybuds = () => {
        if(studybuds.length === 0){
            return <p>You have not created any Studybuds yet.</p>
        }
    }

    return (
        <div>
            <Paper>
                View your a Studybuds here.
                {renderStudybuds()}
            </Paper>
            
        </div>
    )
}

export default StudybudViewer