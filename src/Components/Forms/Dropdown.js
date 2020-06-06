import React from 'react'
import { makeStyles } from '@material-ui/core'
import HandleScheme from '../../assets/schemes/HandleScheme'


// redux
import { connect } from 'react-redux';
import { fetchUsersCurriculums } from '../../actionCreators'

const useStyles = makeStyles({
    root: {
        borderWidth: 8,
        borderColor: props => HandleScheme(props),
        borderStyle: "solid",
        borderRadius: "40px",
        paddingLeft: 20,
        width: props => {
            if (props.width) {
                return props.width
            } else {
                return 300
            }
        },
        height: props => {
            if (props.height) {
                return props.height
            } else {
                return 50
            }
        },
        outline: 0,
        fontSize: props => {
            if (props.fontSize) {
                return props.fontSize
            } else {
                return 16
            }
        },
    }
})

const Dropdown = props => {
    const classes = useStyles(props)



    const renderOptions = () => {
        console.log(props.thisUsersCurriculums)
        return props.thisUsersCurriculums.map(curriculum => <option key={curriculum.id} value={curriculum.id}>{curriculum.title}</option>)
    }


    return (
        <select className={classes.root} onChange={props.onChange}>
            <option value="">Choose a Curriculum</option>
            {renderOptions()}
        </select>
        // <input className={classes.root} type={props.type} onChange={props.onChange} value={props.value} placeholder={props.placeholder}></input>
    )
}


const mapStateToProps = (state) => {
    return {
        thisUsersCurriculums: state.thisUsersCurriculums
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsersCurriculums: (user_id) => dispatch(fetchUsersCurriculums(user_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);