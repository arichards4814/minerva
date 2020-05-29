import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import Dots from './Dots'
import GoodButton from '../GoodButton'

const useStyles = makeStyles({
    root: {
        minHeight: 300,
        mixWidth: 400,
        maxWidth: 600,
        // backgroundColor: "blue",
        position: "relative",
        boxShadow: "2px 2px 6px 2px",
        borderRadius: "4px",
        padding: "10px"
    },
    button: {
        position: "absolute"
    },
    buttonBlockLeft: {
        position: "absolute",
        bottom: 10,
        left: 10
    },
    buttonBlockRight: {
        position: "absolute",
        bottom: 10,
        right: 10
    }
})

const FormSlider = props => {
    const classes = useStyles(props)
    const [page, setPage] = useState(0)

    //throw and error if the number of pages does not match the number of children

    const handleClick = (e) => {
            e.preventDefault()
            setPage(page + 1)
    }

    const handleBack = (e) => {
        e.preventDefault()
        setPage(page - 1)
    }

    return(
        <div className={classes.root}>
            <form>
                {props.children[page]}
                 <div className={classes.buttonBlockLeft}>
                    {page != 0 && <GoodButton theme="secondary" onClick={handleBack}>Back</GoodButton>}
                </div> 
                <div className={classes.buttonBlockRight}>
                    {page != props.children.length - 1 ? <GoodButton theme="secondary" onClick={handleClick}>Next</GoodButton> : 
                        <GoodButton theme="minerva" onClick={props.handleSubmit}>Create</GoodButton>}
                </div> 

                
                    
                
                {/* have to figure out how to show each child based on the forms state */}
                {/* it will also keep a state which will have an object, each object a kv pair to
                store the information. When you finally press a submit it will return that object
                you will be able to use it to do stuff. */}
                {/* form slider dots component */}
                <Dots numOfPages={props.children.length} selected={page} onClick={setPage} tooltips={props.tooltips}/>
            </form>
        </div>
    )
}

export default FormSlider