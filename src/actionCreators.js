import * as requests from './Requests/requests'
import * as requestsCur from './Requests/curriculumRequests'
import * as requestsNot from './Requests/notebookRequests'
import * as requestsLes from './Requests/lessonRequests'
import history from './history.js'


/////
// CURRICULUMS
/////
export const fetchCurriculums = () => dispatch => {
    requestsCur.fetchCurriculums()
    .then(data => {
        dispatch({type: 'FETCH_CURRICULUMS', payload: {curriculums: data}})
    })

}

export const fetchCurriculum = (id) => dispatch => {
    requestsCur.fetchCurriculum(id)
        .then(data => {
            
            dispatch({ type: 'FETCH_CURRICULUM', payload: { currentCurriculum: data } })
        })
}

export const fetchUsersCurriculums = (user_id) => dispatch => {
    //
    requestsCur.fetchUsersCurriculums(user_id)
        .then(data => {
            dispatch({ type: 'FETCH_USERS_CURRICULUMS', payload: { thisUsersCurriculums: data } })
        })
}

export const updateCurrentCurriculum = (data, curriculum_id) => dispatch => {
    // in this case I am changing the title and description of the curriculum
    requestsCur.patchCurriculum(data, curriculum_id)
        .then(data => {
        })
    dispatch({ type: 'UPDATE_CURRENT_CURRICULUM', payload: { currentCurriculum: data } })
}


export const postCurriculums = (data, tags) => dispatch => {
    if(tags){
        requestsCur.postCurriculums(data)
            .then(data => {
                //cycle through each tag and post to back end
                //then create the joiner between the twon
                tags.forEach(tag => {
                    requestsCur.postTag({name: tag.name})
                    .then(body => {
                        requestsCur.postCurriculumsTag({tag_id: body.id, curriculum_id: data.id})})
                })

                dispatch({ type: 'POST_CURRICULUMS', payload: { curriculum: data } })
                history.push(`/editcurriculums/${data.id}`)
                return data
            })

    } else {
        requestsCur.postCurriculums(data)
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
        requestsCur.postCurriculumsWImage(data)
            .then(data => {
                //cycle through each tag and post to back end
                //then create the joiner between the twon
                tags.forEach(tag => {
                    requestsCur.postTag({ name: tag.name })
                        .then(body => {
                            requestsCur.postCurriculumsTag({ tag_id: body.id, curriculum_id: data.id })
                        })
                })

                dispatch({ type: 'POST_CURRICULUMS_W_IMAGE', payload: { curriculum: data } })
                history.push(`/editcurriculums/${data.id}`)
                return data
            })

    } else {
        requestsCur.postCurriculumsWImage(data)
            .then(data => {
                dispatch({ type: 'POST_CURRICULUMS_W_IMAGE', payload: { curriculum: data } })
                history.push(`/editcurriculums/${data.id}`)
                return data
            })
    }
    // .then(body => console.log("if the return worked", body))
}


export const deleteCurriculum = (id) => dispatch => {
    requestsCur.deleteCurriculum(id)
        .then(data => {
        })
    dispatch({ type: 'DELETE_CURRICULUM', payload: { deletedCurriculum: id } })
}


/////
// LESSONS
/////

export const postLessons = (data) => dispatch => {
    requestsLes.postLessons(data)
        
    dispatch({ type: 'POST_LESSONS', payload: { lesson: data } })
}


export const patchLesson = (data, id) => dispatch => {
    requestsLes.patchLesson(data, id)
        .then(data => {
        })
    dispatch({ type: 'PATCH_LESSON', payload: { lesson: data } })
}


export const deleteLesson = (id) => dispatch => {
    requestsLes.deleteLesson(id)
        .then(data => {
        })
    dispatch({ type: 'DELETE_LESSON', payload: { deletedLesson: id } })
}


export const setCurrentLesson = (lesson) => ({ type: 'SET_CURRENT_LESSON', payload: { currentLesson: lesson }})


/////
// NOTEBOOKS
/////

export const postNotebooks = (data) => dispatch => {
    //
    requestsNot.postNotebooks(data)
        .then(data => {
            dispatch({ type: 'POST_NOTEBOOKS', payload: { notebook: data } })
            history.push(`/notebooks/${data.id}`)
        })
}

export const setCurrentNotebook = (notebook) => ({ type: 'SET_CURRENT_NOTEBOOK', payload: { currentNotebook: notebook } })

export const fetchNotebook = (id) => dispatch => {
    //fetch and set it to the current notebook
    requestsNot.fetchNotebook(id)
        .then(data => {
            dispatch({ type: 'FETCH_NOTEBOOK', payload: { currentNotebook: data } })
        })
}


export const fetchUsersNotebooks = (id) => dispatch => {
    //
    requestsNot.fetchUsersNotebooks(id)
        .then(data => {
            dispatch({ type: 'FETCH_USERS_NOTEBOOKS', payload: { notebooks: data } })
        })
}

export const patchNotebooks = (data, id) => dispatch => {
    requestsNot.patchNotebooks(data, id)
        .then(data => {
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
    requestsNot.postNotes(data)
        .then(data => {
            dispatch({ type: 'POST_NOTES', payload: { note: data } })
        })
}

//delete note
export const deleteNote = (id) => dispatch => {
    requestsNot.deleteNote(id)
        .then(data => {
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
            dispatch({ type: 'POST_SUBSCRIPTION', payload: { data: data } })
        })
}


///
// LESSONS_NOTEBOOKS
///

export const postNotebooksWLessonJoiner = (lesson_id, notebook_data) => dispatch => {
    //
    requestsNot.postNotebooksWLessonJoiner(lesson_id, notebook_data)
        .then(data => {
            dispatch({ type: 'POST_NOTEBOOKS_W_LESSON_JOINER', payload: { data: data } })
        })
}

export const pinNotebook = (id, data) => dispatch => {
    requestsNot.pinNotebook(id, data)
        .then(recieved => {
            dispatch({ type: 'PIN_NOTEBOOK', payload: { notebook: recieved } })
        })
}

export const unpinNotebook = (id, data) => dispatch => {
    requestsNot.unpinNotebook(id, data)
        .then(recieved => {
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
            if(data.errors){
                dispatch({ type: 'POST_LOGIN', payload: { user: {errors: data.errors}, token: data.token } })
            } else {
                dispatch({ type: 'POST_LOGIN', payload: { user: data.user, token: data.token } })
                history.push('/')
            }
        })

    
}


//POST NOTEBOOKS_LESSONS Just to post the joiner
export const postNotebooksLessons = (data) => dispatch => {
    //
    requestsNot.postNotebooksLessons(data)
        .then(data => {
            dispatch({ type: 'POST_NOTEBOOKS_LESSONS', payload: data })
        })
}


//DELETE NOTEBOOKS

export const deleteNotebook = (id) => dispatch => {
    requestsNot.deleteNotebook(id)
        .then(data => {
        })
    dispatch({ type: 'DELETE_NOTEBOOK', payload: { deletedNotebook: id } })
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
    requestsCur.patchImageWCurriculum(data, id)
    .then(data => {
        dispatch({type: 'PATCH_CURRICULUM_W_IMAGE', payload: {curriculum: data}})
    })
}