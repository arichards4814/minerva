import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import Expander from '../icons/Expander'
import DropdownChild from './DropdownChild'


const useStyles = makeStyles({
    root: {
        width: props => {
            if (props.width){
                return props.width
            } else {
                return 150
            }
        },
        height: props => {
            if (props.height) {
                return props.height
            } else {
                return 50
            }
        },
        borderStyle: 'solid',
        borderRadius: '8px',
        position: "relative",
        padding: 10
    },
    icon: {
        position: "absolute",
        right: 0,
        bottom: -0
    },
    children: {
        marginTop: 10,
        marginLeft: 40,
        marginBottom: 10
    }
})

const DropdownTile = props => {
    const classes = useStyles(props)
    const [open, setOpen] = useState(false)

    const renderChildren = () => {
        return props.lessons.map(lesson => <DropdownChild {...lesson} width={300} secondwidth={300}/>)
    }

    const handleOpen = () => {
        setOpen(!open)
        console.log(open)
    }

    return(
        <div>
            <div className={classes.root}>
                {props.title}
                <div className={classes.icon}>
                    <Expander width={40} onClick={handleOpen} theme="minerva" />
                </div>
            </div>
            <div className={classes.children}>
                {open && "Lessons:"}
                {open && renderChildren()}
            </div>
        </div>
    )
}

export default DropdownTile