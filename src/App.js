import React, { useEffect } from 'react'; 
import './App.css';
import Navling from './containers/Navling';
import Home from './routes/Home';
import Notebooks from './routes/Notebooks';
import Creator from './routes/Creator';
import Explore from './routes/Explore';
import CurriculumShow from './routes/CurriculumShow';
import CurriculumEdit from './routes/CurriculumEdit';
import CurriculumCreator from './routes/CurriculumCreator';
import CurriculumDashboard from './routes/CurriculumDashboard';
import NotebookShow from './routes/NotebookShow';
import Signup from './routes/Signup';
import Login from './routes/Login';
import Overlay from './components/Overlay'
import Learn from './routes/Learn';
import Profile from './routes/Profile';
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
