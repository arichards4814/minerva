import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import Dots from './Dots'
import FormPage from './FormPage'

const useStyles = makeStyles({
    root: {
        minHeight: 300,
        mixWidth: 400,
        maxWidth: 600,
        // backgroundColor: "blue",
        position: "relative"
    }
})

const FormSlider = props => {
    const classes = useStyles(props)
    const [page, setPage] = useState(0)

    //throw and error if the number of pages does not match the number of children


    return(
        <div className={classes.root}>
            {props.children[page]}
            <button onClick={(e) => { e.preventDefault() 
                setPage(page + 1) }}>Continue</button>
            {/* have to figure out how to show each child based on the forms state */}
            {/* it will also keep a state which will have an object, each object a kv pair to
            store the information. When you finally press a submit it will return that object
            you will be able to use it to do stuff. */}
            {/* form slider dots component */}
            <Dots numOfPages={4} selected={page} onClick={setPage}/>
        </div>
    )
}

export default FormSlider