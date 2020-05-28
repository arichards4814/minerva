import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import Underline from '../Components/Underline'

import SpaceshipIcon from '../Icons/SpaceshipIcon'
import NotebookIcon from '../Icons/NotebookIcon'
import AppleIcon from '../Icons/AppleIcon'
import HomeIcon from '../Icons/HomeIcon'
import UserIcon from '../Icons/UserIcon'
import { useLocation, useHistory } from 'react-router-dom'


const useStyles = makeStyles({
    root: {
        height: 100,
        width: 360,
        display: "flex",
        align: "bottom",
        float: props => props.align,
    }
});

export default function Dock(props){
    const classes = useStyles(props)  
    let history = useHistory()
    const [selected, setSelected] = useState(0)
    
    const currentLocation = useLocation().pathname


    useEffect(() => {
            switch (currentLocation) {
                case "/":
                    setSelected(0)
                    break;
                case "/notebooks":
                    setSelected(1)
                    break;
                case "/explore":
                    setSelected(2)
                    break;
                case "/creator":
                    setSelected(3)
                    break;
                case "/profile":
                    setSelected(4)
                    break;
                default:
                    setSelected(0)
            }
        }
    )

    const clickAction = (index) => {
        setSelected(index)
        //routing with the dock
        switch (index) {
            case 0:
                history.push("/")
                break;
            case 1:
                history.push("/notebooks")
                break;
            case 2:
                history.push("/explore")
                break;
            case 3:
                history.push("/creator")
                break;
            case 4:
                history.push("/profile")
                break;
            default:
            // code block
        }
    }

return(
    <div className={classes.root + " dock-second-position"}>
        <AppleIcon clickAction={clickAction} index={3} selected={selected}/>
        <SpaceshipIcon clickAction={clickAction} index={2} selected={selected}/>
        <NotebookIcon clickAction={clickAction} index={1} selected={selected}/>
        <HomeIcon clickAction={clickAction} index={0} selected={selected}/>
        <UserIcon clickAction={clickAction} index={4} selected={selected}/>
        <Underline position={selected} />
    </div>
)




}