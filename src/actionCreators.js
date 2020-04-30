import * as requests from './requests'
import history from './history.js'


/////
// CURRICULUMS
/////
export const fetchCurriculums = () => dispatch => {
    requests.fetchCurriculums()
    .then(data => {
        dispatch({type: 'FETCH_CURRICULUMS', payload: {curriculums: data}})
    })

}

export const fetchCurriculum = (id) => dispatch => {
    requests.fetchCurriculum(id)
        .then(data => {
            console.log(data)
            dispatch({ type: 'FETCH_CURRICULUM', payload: { currentCurriculum: data } })
        })
}

export const fetchUsersCurriculums = (user_id) => dispatch => {
    //
    requests.fetchUsersCurriculums(user_id)
        .then(data => {
            console.log(data)
            dispatch({ type: 'FETCH_USERS_CURRICULUMS', payload: { thisUsersCurriculums: data } })
        })
}

export const updateCurrentCurriculum = (data, curriculum_id) => dispatch => {
    // in this case I am changing the title and description of the curriculum
    requests.patchCurriculum(data, curriculum_id)
        .then(data => {
            console.log(data)
        })
    dispatch({ type: 'UPDATE_CURRENT_CURRICULUM', payload: { currentCurriculum: data } })
}


export const postCurriculums = (data, tags) => dispatch => {
    if(tags){
        requests.postCurriculums(data)
            .then(data => {
                //cycle through each tag and post to back end
                //then create the joiner between the twon
                console.log('data', data)
                tags.forEach(tag => {
                    requests.postTag({name: tag.name})
                    .then(body => {
                        console.log("body", body)
                        console.log('data inside', data)
                        requests.postCurriculumsTag({tag_id: body.id, curriculum_id: data.id})})
                })

                dispatch({ type: 'POST_CURRICULUMS', payload: { curriculum: data } })
                history.push(`/editcurriculums/${data.id}`)
                return data
            })

    } else {
        requests.postCurriculums(data)
            .then(data => {
                dispatch({ type: 'POST_CURRICULUMS', payload: { curriculum: data } })
                history.push(`/editcurriculums/${data.id}`)
                return data
            })
    }
        // .then(body => console.log("if the return worked", body))
}

export const postCurriculumsWImage = (data, tags) => dispatch => {
    if (tags) {
        requests.postCurriculumsWImage(data)
            .then(data => {
                //cycle through each tag and post to back end
                //then create the joiner between the twon
                console.log('data', data)
                tags.forEach(tag => {
                    requests.postTag({ name: tag.name })
                        .then(body => {
                            console.log("body", body)
                            console.log('data inside', data)
                            requests.postCurriculumsTag({ tag_id: body.id, curriculum_id: data.id })
                        })
                })

                dispatch({ type: 'POST_CURRICULUMS_W_IMAGE', payload: { curriculum: data } })
                history.push(`/editcurriculums/${data.id}`)
                return data
            })

    } else {
        requests.postCurriculumsWImage(data)
            .then(data => {
                dispatch({ type: 'POST_CURRICULUMS_W_IMAGE', payload: { curriculum: data } })
                history.push(`/editcurriculums/${data.id}`)
                return data
            })
    }
    // .then(body => console.log("if the return worked", body))
}


export const deleteCurriculum = (id) => dispatch => {
    console.log("in action creator")
    requests.deleteCurriculum(id)
        .then(data => {
            console.log(data)
        })
    dispatch({ type: 'DELETE_CURRICULUM', payload: { deletedCurriculum: id } })
}


/////
// LESSONS
/////

export const postLessons = (data) => dispatch => {
    requests.postLessons(data)
        
    dispatch({ type: 'POST_LESSONS', payload: { lesson: data } })
}


export const patchLesson = (data, id) => dispatch => {
    requests.patchLesson(data, id)
        .then(data => {
            console.log(data)
        })
    dispatch({ type: 'PATCH_LESSON', payload: { lesson: data } })
}


export const deleteLesson = (id) => dispatch => {
    requests.deleteLesson(id)
        .then(data => {
            console.log(data)
        })
    dispatch({ type: 'DELETE_LESSON', payload: { deletedLesson: id } })
}


export const setCurrentLesson = (lesson) => ({ type: 'SET_CURRENT_LESSON', payload: { currentLesson: lesson }})


/////
// NOTEBOOKS
/////

export const postNotebooks = (data) => dispatch => {
    //
    requests.postNotebooks(data)
        .then(data => {
            console.log(data)
            dispatch({ type: 'POST_NOTEBOOKS', payload: { notebook: data } })
            history.push(`/notebooks/${data.id}`)
        })
}

export const setCurrentNotebook = (notebook) => ({ type: 'SET_CURRENT_NOTEBOOK', payload: { currentNotebook: notebook } })

export const fetchNotebook = (id) => dispatch => {
    //fetch and set it to the current notebook
    requests.fetchNotebook(id)
        .then(data => {
            console.log(data)
            dispatch({ type: 'FETCH_NOTEBOOK', payload: { currentNotebook: data } })
        })
}


export const fetchUsersNotebooks = (id) => dispatch => {
    //
    requests.fetchUsersNotebooks(id)
        .then(data => {
            console.log(data)
            dispatch({ type: 'FETCH_USERS_NOTEBOOKS', payload: { notebooks: data } })
        })
}

export const patchNotebooks = (data, id) => dispatch => {
    requests.patchNotebooks(data, id)
        .then(data => {
            console.log(data)
        })
    dispatch({ type: 'PATCH_NOTEBOOKS', payload: { notebook: data } })
}


///
// NAVLING
///
export const hideNavling = () => ({ type: 'HIDE_NAVLING'})
export const showNavling = () => ({ type: 'SHOW_NAVLING' })

///
// NOTEPAD
///

export const setCurrentNotepadContent = (content) => ({ type: 'SET_CURRENT_NOTEPAD_CONTENT', payload: { currentNotepadContent: content } })
export const setCurrentNotepadDetails = (content) => ({ type: 'SET_CURRENT_NOTEPAD_DETAILS', payload: { currentNotepadDetails: content } })
export const setSelectedNoteIndex = (index) => ({ type: 'SET_SELECTED_NOTE_INDEX', payload: { selectedNoteIndex: index } })

///
// NOTES
///

export const postNotes = (data) => dispatch => {
    //
    requests.postNotes(data)
        .then(data => {
            console.log(data)
            dispatch({ type: 'POST_NOTES', payload: { note: data } })
        })
}

//delete note
export const deleteNote = (id) => dispatch => {
    requests.deleteNote(id)
        .then(data => {
            console.log(data)
        })
    dispatch({ type: 'DELETE_NOTE', payload: { deletedNote: id } })
}

///
//  USERS_SUBSCRIPTIONS
///
export const fetchUsersSubscriptions = (id) => dispatch => {
    requests.fetchUsersSubscriptions(id)
        .then(data => {
            dispatch({ type: 'FETCH_USERS_SUBSCRIPTIONS', payload: { subscriptions: data }})
        })
}

export const postSubscription = (data) => dispatch => {
    //
    requests.postSubscription(data)
        .then(data => {
            console.log(data)
            dispatch({ type: 'POST_SUBSCRIPTION', payload: { data: data } })
        })
}


///
// LESSONS_NOTEBOOKS
///

export const postNotebooksWLessonJoiner = (lesson_id, notebook_data) => dispatch => {
    //
    requests.postNotebooksWLessonJoiner(lesson_id, notebook_data)
        .then(data => {
            console.log("data inside action creator", data)
            dispatch({ type: 'POST_NOTEBOOKS_W_LESSON_JOINER', payload: { data: data } })
        })
}

export const pinNotebook = (id, data) => dispatch => {
    requests.pinNotebook(id, data)
        .then(recieved => {
            console.log("data inside action creator", recieved)
            dispatch({ type: 'PIN_NOTEBOOK', payload: { notebook: recieved } })
        })
}

export const unpinNotebook = (id, data) => dispatch => {
    requests.unpinNotebook(id, data)
        .then(recieved => {
            console.log("data inside action creator", recieved)
            dispatch({ type: 'UNPIN_NOTEBOOK', payload: { notebook: recieved } })
        })
}


export const postUsers = (data) => dispatch => {
    //
    requests.postUsers(data)
        .then(data => {
            history.push(`/`)
            dispatch({ type: 'POST_USERS', payload: { user: data.user, token: data.token } })
        })
}


export const fetchCurrentUser = (id) => dispatch => {
    //
    requests.fetchCurrentUser(id)
        .then(data => {
            dispatch({ type: 'FETCH_CURRENT_USER', payload: { user: data } })
        })
}


export const postLogin = (data) => dispatch => {
    //
    requests.postLogin(data)
        .then(data => {
            dispatch({ type: 'POST_LOGIN', payload: { user: data.user, token: data.token } })
            console.log(data)
            if (!data.errors){
                history.push('/')
            }
        })

    
}



export const logout = () => dispatch => {
    //
    dispatch({ type: 'LOGOUT', payload: {} })
    history.push('/login')
}


export const toggleOverlay = () => dispatch => {
    //
    dispatch({ type: 'TOGGLE_OVERLAY', payload: {} })
}



export const patchCurriculumWImage = (data, id) => dispatch => {
    requests.patchImageWCurriculum(data, id)
    .then(data => {
        console.log("in action creator", data)
        dispatch({type: 'PATCH_CURRICULUM_W_IMAGE', payload: {curriculum: data}})
    })
}