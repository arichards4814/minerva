import React, { useState, useEffect } from 'react'
import {makeStyles} from "@material-ui/core"
import MinervaInput from '../components/forms/MinervaInput'
import Button from '../components/Button'
import TinyEdit from '../icons/Tiny/TinyEdit'

import DropdownGeneral from '../components/forms/DropdownGeneral'

// redux
import { connect } from 'react-redux';
import { fetchNotebook, patchNotebooks, fetchUsersSubscriptions } from '../actionCreators'


const useStyles = makeStyles({
    root:{
        height: 480,
        width: 854,
        textAlign: "center",
        padding: 150
    }
})
const Material = props => {
    const classes = useStyles(props)
    const [input, setInput] = useState("")

    useEffect(() => {
        props.fetchUsersSubscriptions(localStorage.user_id)
    }, [])

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = () => {
        let data = {
            ...props.currentNotebook,
            material_url: input
        }
        props.patchNotebooks(data, props.currentNotebook.id)
    }

    return (
        <div className={classes.root}>
            {console.log(props.subscriptions)}
            {props.currentNotebook && props.currentNotebook.material_url ?
            <React.Fragment>
            <div>
                Link to Material: {props.currentNotebook && <a href={props.currentNotebook.material_url}>Here</a>}
            </div>
            <div>
                        Description: {props.currentNotebook && props.currentNotebook.lessons && props.currentNotebook.lessons[0] && props.currentNotebook.lessons[0].description}
                </div></React.Fragment>
                :
                <div>
                    <TinyEdit onClick={() => props.setEditing(true)}></TinyEdit>
                    <br></br>
                    Add Material to this Notebook:
                    <MinervaInput onChange={handleChange} width={400} theme="secondary" placeholder="Add URL Here" />
                    {input && <Button onClick={handleSubmit} margin={10} theme="secondary" color="white">Create</Button>}
                    <br></br>
                    <br></br>
                    OR Choose a lesson for this notebook:
                    {props.subscriptions && props.subscriptions.length > 0 && <DropdownGeneral info={props.subscriptions} theme="minerva"/>}
                </div>
                }

        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        currentNotebook: state.currentNotebook,
        subscriptions: state.subscriptions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotebook: (id) => dispatch(fetchNotebook(id)),
        patchNotebooks: (data, id) => dispatch(patchNotebooks(data, id)),
        fetchUsersSubscriptions: (id) => dispatch(fetchUsersSubscriptions(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Material);