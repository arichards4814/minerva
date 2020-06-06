import React from 'react'
import TagPill from './TagPill'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        margin: 10
    }
})

const TagsList = props => {
    const classes = useStyles(props)

    const renderPills = () => {
        if (props.tags){
            return props.tags.map(tag => <TagPill {...tag} color="fourth" theme="minerva" exClick={props.exClick}/> )
        }
    }

    return(
        <div className={classes.root}>   
            {renderPills()}
        </div>
    )
}

export default TagsList