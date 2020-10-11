import React, { useEffect } from 'react'; 
import './App.css';
import Navling from './containers/Navling';
import Home from './views/Home';
import Notebooks from './views/Notebooks';
import Creator from './views/Creator';
import Explore from './views/Explore';
import CurriculumShow from './views/CurriculumShow';
import CurriculumEdit from './views/CurriculumEdit';
import CurriculumCreator from './views/CurriculumCreator';
import CurriculumDashboard from './views/CurriculumDashboard';
import NotebookShow from './views/NotebookShow';
import Studybud from './views/Studybud/Studybud';
import Signup from './views/Signup';
import Login from './views/Login';
import Overlay from './components/Overlay';
import Learn from './views/Learn';
import Profile from './views/Profile';
import history from './history.js';


// redux
import { connect } from 'react-redux';
import { fetchCurriculums, fetchCurrentUser } from './actionCreators'

import {
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


const App = props => {

  //ask isabelle about this
  useEffect(() => {
    if (localStorage.user_id) {
      props.fetchCurrentUser(localStorage.user_id)
    }
    props.fetchCurriculums()
    
  }, [])

  return (
    <div >
      <Router history={history}>
        <Navling />
        {props.overlay && <Overlay />}
        <Switch>
          <Route path="/notebooks/:id">
            {props.currentUser && localStorage.user_id ?
              <NotebookShow /> :
              <Redirect to="/signup" />}
          </Route>
          <Route path="/notebooks">
            {props.currentUser && localStorage.user_id ?
            <Notebooks /> :
            <Redirect to="/signup" /> }
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route exact path="/creator">
            {props.currentUser && localStorage.user_id ?
            <Creator /> : 
            <Redirect to="/signup" />}
          </Route>
          <Route path="/creator/dashboard">
            {props.currentUser && localStorage.user_id ?
              <CurriculumDashboard /> :
              <Redirect to="/signup" />}
          </Route>
          {/* TESTCREATOR */}
          <Route path="/creator/edit/:id">
            {props.currentUser && localStorage.user_id ?
              <CurriculumCreator /> :
              <Redirect to="/signup" />}
          </Route>
          <Route path="/editcurriculums/:id">
            {props.currentUser && localStorage.user_id ?
              <CurriculumEdit /> :
              <Redirect to="/signup" />}
          </Route>
          <Route path="/curriculums/:id">
            {props.currentUser && localStorage.user_id ?
              <CurriculumShow /> :
              <Redirect to="/signup" />}
          </Route>
          <Route path="/studybud">
            <Studybud />
          </Route>
          <Route path="/learn">
            <Learn />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home /> 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    curriculums: state.curriculums,
    currentUser: state.currentUser,
    overlay: state.overlay
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurriculums: () => dispatch(fetchCurriculums()),
    fetchCurrentUser: (id) => dispatch(fetchCurrentUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
