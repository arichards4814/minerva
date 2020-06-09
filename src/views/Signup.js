import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import F3 from '../assets/typing/F3'
import F5 from '../assets/typing/F5'
import Row from '../containers/Row'
import Layout from '../containers/Layout'
import { useHistory } from 'react-router-dom'



// redux
import { connect } from 'react-redux';
import { postUsers } from '../actionCreators'

const useStyles = makeStyles({
    root:{
        align: "center"
    },
    form: {
        width: 400
    },
    input: {
        display: "block",
        width: "100%",
        height: 50,
        fontSize: 20,
        borderRadius: "10px",
        borderStyle: "solid",
        outline: "none"
    },
    button:{
        borderRadius: "10px",
        backgroundColor: "#00B79D",
        color: "white",
        fontSize: 20,
        padding: 7,
        cursor: "pointer"
    },
    error: {
        color: "red"
    },
    footer: {
        marginTop: 50,
        textAlign: "center"
    }
})
const Signup = props => {
    const classes = useStyles(props)
    const history = useHistory()
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
    })
    const [error, setError] = useState("")


    const onSubmit = (e) => {
        e.preventDefault()
        if (form.password != form.password_confirmation){
            setError("Password and Confirmation must be the same.")
            console.log("Cannot Submit...", form)
        } else if (form.username.length > 3 && form.username.length < 21 ){
            //post to users
            setError("")
            console.log("Submitting...", form)
            let adjustedForm = {
                username: form.username.toLowerCase(),
                    email: form.email,
                    password: form.password
            }
            props.postUsers(adjustedForm)

        } else {
            setError("Username must be longer than 3 letters and less than 20.")
        }
        
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})

    }

    return (
    <div> 
        <div className={classes.root}>
            <Row>
                <Layout width={4}> 

                </Layout>
                    <Layout width={4}>

                        <F3 font="secondary">Create a Username and Password</F3>
                        <form onSubmit={onSubmit} className={classes.form}>
                            <label value="Username:" ><F5>Username:</F5></label>
                            <input type="text" name="username" className={classes.input} onChange={handleChange}></input>
                            <label value="Email:" ><F5>Email:</F5></label>
                            <input type="email" name="email" className={classes.input} onChange={handleChange}></input>
                            <label value="Password:"><F5>Password:</F5></label>
                            <input type="password" name="password" className={classes.input} onChange={handleChange}></input>
                            <label value="Confirm Password:"><F5>Confirm Password:</F5></label>
                            <input type="password" name="password_confirmation" className={classes.input} onChange={handleChange}></input>
                            <button type="submit" className={classes.button}>Create</button>
                        </form>

                        {error && <div className={classes.error}>{error}</div>}

                        {props.errors && typeof props.errors != "string" &&  <div className={classes.error}>{props.errors.map((er, i) => <div key={i}>{er}</div>)}</div>}

                        <div className={classes.footer}> 
                            <div>Already a creator?</div>
                            <button className={classes.button} onClick={() => history.push('/login')}>Log In</button>
                        </div>
                    </Layout>
                <Layout width={4}>

                </Layout>
           
            </Row>
        </div>
    </div>)
}



const mapStateToProps = (state) => {
    return {
        curriculums: state.curriculums,
        errors: state.errors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postUsers: (data) => dispatch(postUsers(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);