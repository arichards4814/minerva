import React from 'react'
import Row from './Row'
import TitleBox from '../components/TitleBox'
import LeftBackUnaltered from '../icons/leftBackUnaltered'
import LoadingAnimation from '../components/LoadingAnimation'
import { makeStyles } from '@material-ui/core'
import Card from '../components/Card'
import { useHistory } from 'react-router-dom'

import F4 from '../Typing/F4'

const useStyles = makeStyles({
    root: {
        position: "relative"
    },
    leftToRightScroll: {
        marginTop: 30,
        marginBottom: 30,
        overflowX: 'scroll',
        overflowY: 'hidden',
        whiteSpace: 'nowrap',
        paddingBottom: 10,
        width: "80%",
        marginLeft: "10%",
        scrollBehavior: "smooth"
    },
    leftChevron: {
        display: 'inline-block',
        position: 'absolute',
        left: 60,
        top: 160

    },
    rightChevron: {
        display: 'inline-block',
        position: 'absolute',
        right: 60,
        bottom: 160
    },
})

const Carousel = props => {
    const classes = useStyles(props)
    let history = useHistory()

    const renderCurriculums = () => {
        if (props.curriculums) {
            return props.curriculums.map(curriculum => <Card key={curriculum.id} {...curriculum} onClick={() => history.push(`/curriculums/${curriculum.id}`)} />)
        }
    }

    const scrollRight = () => {
        let content = document.getElementById(props.title);
        let scroll_left_location = content.scrollLeft += 1200
        content.scrollLeft = scroll_left_location
    }

    const scrollLeft = () => {
        let content = document.getElementById(props.title);
        let scroll_left_location = content.scrollLeft -= 1200
        content.scrollLeft = scroll_left_location
    }


    return(
        <div className={classes.root}>
            <Row marginLeft="10%">
                <TitleBox theme="secondary"><F4 font="secondary">{props.title}</F4></TitleBox>
            </Row>
            <div className={classes.root}>
                <div className={classes.leftChevron}>
                    <LeftBackUnaltered theme="minerva" onMouseDown={scrollLeft} />
                </div>
                <div className={classes.leftToRightScroll} id={props.title}>
                    {props.curriculums && props.curriculums.length > 0 ? renderCurriculums() : <div style={{ paddingLeft: "40%", height: "325px" }}><LoadingAnimation /></div>}
                </div>
                <div className={classes.rightChevron}>
                    <LeftBackUnaltered theme="minerva" pointing="right" onMouseDown={scrollRight} />
                </div>
            </div>
        </div>
    )
}

export default Carousel