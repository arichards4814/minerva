import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Shelf from '../components/Shelf'


const useStyles = makeStyles({
    root: {
        position: "relative",
        display: "inline-block",
        width: "90%",
        height: 400,
        boxShadow: "1px 1px 3px 1px",
        padding: 20,
        margin: 5
    },
    title:{
        padding: 20,
        fontSize: 20
    },
    shelves: {
        height: 300,
        overflowX: "auto"
    }
});

export default function ShelfPanel(props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.title}>Shelves:</div>
            <div className={classes.shelves}>
                <Shelf title="All Notebooks" selection={props.selection} value="all" setSelection={props.setSelection}/>
                <Shelf title="Curriculums" selection={props.selection} value="subscribed" setSelection={props.setSelection}/>
                <Shelf title="Favorites" selection={props.selection} value="favorites" setSelection={props.setSelection}/>
            </div>
        </div>
    )
}