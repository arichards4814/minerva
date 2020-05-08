import React, { useState, useEffect } from 'react'
import NotebooksHeader from '../Icons/Headers/NotebooksHeader'
import Row from '../Container/Row'
import Layout from '../Container/Layout'
import F2 from '../Typing/F2'
import F5 from '../Typing/F5'
import F6 from '../Typing/F6'
import { useLocation, useHistory } from "react-router-dom";
import HideIcon from '../Icons/HideIcon'
import DropdownTile from '../Components/DropdownTile'
import DropdownChild from '../Components/DropdownChild'
import MinervaInput from '../Components/Forms/MinervaInput'
import MinervaSelect from '../Components/Forms/MinervaSelect'
import Button from '../Components/Button'
import TinyPlus from '../Icons/Tiny/TinyPlus'
import TinyNotebook from '../Icons/Tiny/TinyNotebook'
import Expander from '../Icons/Expander'
import Pin from '../Icons/Pin'
import PinBar from '../Components/PinBar'
import ShelfPanel from '../Container/ShelfPanel'

// redux
import { connect } from 'react-redux';
import { fetchUsersNotebooks, hideNavling, showNavling, fetchUsersSubscriptions, postNotebooks} from '../actionCreators'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    backIcon: {
        position: "absolute",
        right: 300,
        top: 130
    },
    scroller: {
        height: 400,
        overflow: "auto"
    },
    notebooks_panel: {
        height: 410,
        overflowX: "auto"
    }
})
const Notebooks = props => {
    const location = useLocation().pathname.split("/")[2]
    const history = useHistory()
    const classes = useStyles(props)
    const [selection, setSelection] = useState("")
    const [filter, setFilter] = useState("")

    useEffect(() => {
        props.fetchUsersNotebooks(localStorage.user_id)
        props.fetchUsersSubscriptions(localStorage.user_id)
    }, [])

    const renderCurriculums = () => {
        if (props.subscriptions.length) {
            if (filter) {
                let filt = props.subscriptions.filter(obj => obj.curriculum.title.includes(filter))
                return filt.map(object => <DropdownTile {...object.curriculum} width={300} />)
            } else {
                return props.subscriptions.map(object => <DropdownTile {...object.curriculum} width={300} />)
            }
        }
    }

    const renderAllNotebooks = () => {
            if (filter){
                let filt = props.notebooks.filter(notebook => notebook.title.includes(filter))
                return filt.map(object => <DropdownChild {...object} width={400} icon="notebook" />)
            } else {
                return props.notebooks.map(object => <DropdownChild {...object} width={400} icon="notebook"/>)
            }
    }

    const selectHandler = (e) => {
        console.log(e.target.value)
        setSelection(e.target.value)
    }

    const selectHandlerShelves = (info) => {
        setSelection(info)
    }

    const createBlankNotebook = () => {
        let data = {
            user_id: localStorage.user_id,
            title: "New Notebook"
        }

        props.postNotebooks(data)
    }

    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }


    return (
        <div className="fade-in">
            <div className={classes.backIcon}>
                {!props.navlingHidden && <HideIcon orientation={props.navlingHidden} onClick={props.navlingHidden ? props.showNavling : props.hideNavling} />}
            </div>

            <Row marginLeft={80}>
                <Layout width={4} >
                    <F2 font="secondary"> Notebooks</F2>
                    To start a lesson, create a notebook and then begin.
                    <div style={{marginTop: 40}}>
                        <PinBar />
                    </div>
                </Layout>
                <Layout width={7}>
                    <NotebooksHeader />
                </Layout>
            </Row>
            {/* Header with filters */}
            <Row marginTop={30} marginLeft={50} >
                <Layout width={3}>
                    

                </Layout>
                <Layout width={6}>
                    <MinervaSelect theme="minerva" onChange={selectHandler}>
                        <option value="">Sort</option>
                        <option value="all">All Notebooks</option>
                        <option value="subscribed">Subcribed Curriculums</option>
                        <option value="mycurriculums">Curriculums I've Created</option>
                    </MinervaSelect>
                    <MinervaInput theme="minerva" placeholder="search" onChange={handleFilterChange}/>
                </Layout>
                <Layout width={3}>
                </Layout>
            </Row>
            <Row marginTop={5} marginLeft={50} >
                <Layout width={3}>
                    <ShelfPanel selection={selection} setSelection={selectHandlerShelves}/>
                    {/* <F5>Info: </F5>
                    <F6>To create a notebook for a lesson:</F6>
                    <div style={{width: 50}}><TinyPlus theme="minerva" /> </div>
                    <F6>To view a notebook:</F6>
                    <div style={{ width: 50 }}><TinyNotebook /> </div>
                    <F6>To expand a curriculum:</F6>
                    <div style={{ width: 50, paddingLeft: 6}}><Expander width={40} theme="minerva" /> </div>
                    <F6>To pin a notebook:</F6>
                    <div style={{ width: 50 }}><Pin width={50}/> </div> */}
                </Layout>
                <Layout width={6}>
                    <div className={classes.notebooks_panel}>
                        {selection === "all" && renderAllNotebooks()}
                        {selection === "subscribed" && renderCurriculums()}
                    </div>
                </Layout>
                <Layout width={3}>
                    <Button theme="third" color="minerva" margin={3} onClick={createBlankNotebook}>Create New Notebook +</Button>
                    <Button theme="secondary" color="white" margin={3} onClick={() => history.push('/creator') }>Create New Curriculum +</Button>
                </Layout>
            </Row>
            
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        notebooks: state.notebooks,
        currentNotebook: state.currentNotebook,
        navlingHidden: state.navlingHidden,
        subscriptions: state.subscriptions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsersNotebooks: (id) => dispatch(fetchUsersNotebooks(id)),
        hideNavling: () => dispatch(hideNavling()),
        showNavling: () => dispatch(showNavling()),
        fetchUsersSubscriptions: (id) => dispatch(fetchUsersSubscriptions(id)),
        postNotebooks: (data) => dispatch(postNotebooks(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notebooks);