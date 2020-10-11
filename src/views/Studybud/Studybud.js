import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import StudybudCreator from '../../components/studybud/StudybudCreator'
import StudybudViewer from '../../components/studybud/StudybudViewer'



const Studybud = props => {
    const [mode, setMode] = useState(true) //True View, False View

    const toggleMode = () => {
        setMode(!mode)
    }

    return(
        <Grid container>
            <Grid item md={3}></Grid>
            <Grid item md={6}>
                Welcome to Studybud
                <button onClick={toggleMode}>{mode ? "Create" : "View"}</button>
                {mode ? <StudybudViewer /> : <StudybudCreator />}

            </Grid>
            <Grid item md={3}></Grid>
           
        </Grid>
    )
}

export default Studybud