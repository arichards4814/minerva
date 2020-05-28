import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DotIcon from './DotIcon'


const useStyles = makeStyles({
    root: {
        height: props => {
            if (props.height) {
                return props.height
            } else {
                return 50
            }
        },
        width: props => {
            if (props.width) {
                return props.width
            } else {
                return 50
            }
        },
        position: "absolute",
        cursor: "pointer",
        bottom: 0,
        left: "45%"
    }
});

export default function Dots(props) {
    const classes = useStyles(props)


    const renderDots = () => {
        let a = []
        for (let i = 0; i < props.numOfPages; i++) {
            if(props.selected === i){
                a.push("selected")
            } else {
                a.push(i)
            }
        }
        return a.map(x => {
            if(x === "selected"){
                return <DotIcon key={x} height={20} filled={true}/>
            } else {
                return <DotIcon key={x} height={20} onClick={() => props.onClick(x)}/>
            }
            
        })
    }

    return (
        <div className={classes.root}>
            {renderDots()}
        </div>
    )
}