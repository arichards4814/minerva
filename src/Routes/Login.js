import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import F3 from '../Typing/F3'
import F5 from '../Typing/F5'
import Row from '../containers/Row'
import Layout from '../containers/Layout'
import { useHistory } from 'react-router-dom'



// redux
import { connect } from 'react-redux';
import { postLogin } from '../actionCreators'

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
        cursor: "pointer",
        margin: 3
    },
    error: {
        color: "red"
    },
    footer: {
        marginTop: 50,
        textAlign: "center"
    }
})
const Login = props => {
    const classes = useStyles(props)
    const history = useHistory()
    const [form, setForm] = useState({
        username: "",
        password: ""
    })
    const [error, setError] = useState("")


    const onSubmit = (e) => {
        e.preventDefault()
        props.postLogin(form)
        //login
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

                        <F3 font="secondary">Log In</F3>
                        <form onSubmit={onSubmit} className={classes.form}>
                            <label value="Username:" ><F5>Username:</F5></label>
                            <input type="text" name="username" className={classes.input} onChange={handleChange}></input>
                            <label value="Password:"><F5>Password:</F5></label>
                            <input type="password" name="password" className={classes.input} onChange={handleChange}></input>
                            <button type="submit" className={classes.button}>Log In</button>
                        </form>

                        {error && <div className={classes.error}>{error}</div>}
                        {props.errors && <div className={classes.error}>{props.errors}</div>}

                        <div className={classes.footer}>
                            <div>Not a creator yet?</div>
                            <button className={classes.button} onClick={() => history.push('/signup')}>Sign Up</button>
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
        postLogin: (data) => dispatch(postLogin(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);