

const initialState = {
    currentUser: {},
    curriculums: [],
    thisUsersCurriculums: [],
    currentCurriculum: {},
    currentLesson: {},

    notebooks: [],
    currentNotebook: {},
    currentNote: {},

    navlingHidden: false,

    currentNotepadContent: {},
    currentNotepadDetails: {},

    selectedNoteIndex: 0,

    subscriptions: {},
    pinned: {},

    errors: [],
    overlay: false
    
}

export const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'POST_LOGIN':
            if (action.payload.user.errors) {
                return { ...prevState, currentUser: {}, errors: action.payload.user.errors }
            } else {
                localStorage.user_id = action.payload.user.id
                localStorage.token = action.payload.token
                return { ...prevState, currentUser: { id: action.payload.user.id, username: action.payload.user.username } }
            }
        case 'FETCH_CURRENT_USER':
            let userInfo = {}
            if (action.payload.user){
                userInfo = {username: action.payload.user.username, 
                id: action.payload.user.id}
            } 
            return { ...prevState, currentUser: userInfo}
        case 'SET_CURRENT_LESSON':
            return { ...prevState, currentLesson: action.payload.currentLesson }
        case 'FETCH_CURRICULUMS':
            return {...prevState, curriculums: action.payload.curriculums}
        case 'FETCH_USERS_CURRICULUMS':
            return { ...prevState, thisUsersCurriculums: action.payload.thisUsersCurriculums }
        case 'FETCH_CURRICULUM':
            return { ...prevState, currentCurriculum: action.payload.currentCurriculum }
        case 'POST_CURRICULUMS':
            let curriculumsCopy = [...prevState.curriculums]
            curriculumsCopy.push(action.payload.curriculum)
            console.log("curriculums copy on post", curriculumsCopy) 
            return {...prevState, curriculums: curriculumsCopy, currentCurriculum: action.payload.curriculum}
        case 'POST_CURRICULUMS_W_IMAGE':
            //not iterable???
            let curriculumsCopyWIMAGE = [...prevState.curriculums]
            curriculumsCopyWIMAGE.push(action.payload.curriculum)
            console.log("curriculums w IMAGE", curriculumsCopyWIMAGE)
            return { ...prevState, curriculums: curriculumsCopyWIMAGE, currentCurriculum: action.payload.curriculum }
        case 'PATCH_CURRICULUM_W_IMAGE':
            //not iterable???
            console.log("in reducer", action.payload)
            let curriculumsCopyWIMAGEPATCH = [...prevState.curriculums]
            let currIndex = curriculumsCopyWIMAGEPATCH.findIndex(curriculum => curriculum.id === action.payload.curriculum.id)
            curriculumsCopyWIMAGEPATCH[currIndex] = action.payload.curriculum
            console.log("curriculums w IMAGE", curriculumsCopyWIMAGEPATCH)
            return { ...prevState, curriculums: curriculumsCopyWIMAGEPATCH, currentCurriculum: action.payload.curriculum }
        case 'PATCH_LESSON':
            let updatedCurriculum1 = { ...prevState.currentCurriculum } 
            let foundIndex = updatedCurriculum1.lessons.findIndex(lesson => lesson.id === action.payload.lesson.id)
            updatedCurriculum1.lessons[foundIndex] = action.payload.lesson
            return { ...prevState, currentCurriculum: updatedCurriculum1 }
        case 'UPDATE_CURRENT_CURRICULUM':
            return { ...prevState, currentCurriculum: action.payload.currentCurriculum }
        case 'POST_LESSONS':
            let updatedCurriculum = {...prevState.currentCurriculum } 
            updatedCurriculum.lessons.push(action.payload.lesson)
            return { ...prevState, currentCurriculum: updatedCurriculum }
        case 'DELETE_LESSON':
            let updatedCurriculum2 = { ...prevState.currentCurriculum }
            let foundIndex2 = updatedCurriculum2.lessons.findIndex(lesson => lesson.id === action.payload.deletedLesson)
            updatedCurriculum2.lessons.splice(foundIndex2, 1)
            return { ...prevState, currentCurriculum: updatedCurriculum2 }
        case 'DELETE_CURRICULUM':
            let updatedCurriculums = [ ...prevState.curriculums ]
            let foundIndexCurriculum = updatedCurriculums.findIndex(curriculum => curriculum.id === action.payload.deletedCurriculum)
            updatedCurriculums.splice(foundIndexCurriculum, 1)
            return { ...prevState, curriculums: updatedCurriculums, currentCurriculum: {} }
        case 'FETCH_USERS_NOTEBOOKS':
            return { ...prevState, notebooks: action.payload.notebooks }
        case 'POST_NOTEBOOKS':
            let updatedNotebooks = [ ...prevState.notebooks ]
            updatedNotebooks.push(action.payload.notebook)
            return { ...prevState, notebooks: updatedNotebooks, currentNotebook: action.payload.notebook }
        case 'SET_CURRENT_NOTEBOOK':
            return { ...prevState, currentNotebook: action.payload.currentNotebook }
        case 'FETCH_NOTEBOOK':
            return { ...prevState, currentNotebook: action.payload.currentNotebook }
        case 'HIDE_NAVLING':
            return { ...prevState, navlingHidden: true }
        case 'SHOW_NAVLING':
            return { ...prevState, navlingHidden: false }
        case 'SET_CURRENT_NOTEPAD_CONTENT':
            return { ...prevState, currentNotepadContent: action.payload.currentNotepadContent }
        case 'SET_CURRENT_NOTEPAD_DETAILS':
            return { ...prevState, currentNotepadDetails: action.payload.currentNotepadDetails }
        case 'SET_SELECTED_NOTE_INDEX':
            return { ...prevState, selectedNoteIndex: action.payload.selectedNoteIndex }
        case 'POST_NOTES':
            let updatedCurrentNotebook = { ...prevState.currentNotebook }
            updatedCurrentNotebook.notes.push(action.payload.note)
            return { ...prevState, currentNotebook: updatedCurrentNotebook }
        case 'DELETE_NOTE':
            let currentNotebookCopy = {...prevState.currentNotebook}
            let foundIndexNote = currentNotebookCopy.notes.findIndex(note => note.id === action.payload.deletedNote)
            currentNotebookCopy.notes.splice(foundIndexNote, 1)
            return { ...prevState, currentNotebook: currentNotebookCopy}
        case 'FETCH_USERS_SUBSCRIPTIONS':

            //here get rid of all notebooks that we don't need
            console.log(action.payload.subscriptions)
            let payloadCopy = [...action.payload.subscriptions]
            let reducedNotes = []
            payloadCopy.forEach(curriculum => {
                curriculum.curriculum.lessons.forEach(lesson => {
                    lesson.notebooks.forEach(notebook => {
                        if(notebook.user_id === prevState.currentUser.id){
                            reducedNotes.push(notebook)
                        }
                    })
                    lesson.notebooks = reducedNotes
                    reducedNotes = []
                })
            })

            console.log(payloadCopy)

            return { ...prevState, subscriptions: payloadCopy }
        case 'POST_SUBSCRIPTION':
            let subscriptionsCopy = [...prevState.subscriptions]
            subscriptionsCopy.push(action.payload.data)
            return { ...prevState, subscriptions: subscriptionsCopy}
        case 'POST_NOTEBOOKS_W_LESSON_JOINER':
            //find the right lesson within subscriptions. Then add to its notebook
            console.log("action.payload", action.payload)

            
            let subCopy = [...prevState.subscriptions]
            console.log("subcopy", subCopy)
            subCopy.forEach(obj => obj.curriculum.lessons.forEach(lesson => {
                if (lesson.id === action.payload.data.lesson_id){
                    lesson.notebooks.push(action.payload.data.body)
                }
            }))

            // just edited this....
            return { ...prevState, subscriptions: subCopy, currentNotebook: action.payload.data.body }
        case 'PATCH_NOTEBOOKS':
            return {...prevState, currentNotebook: action.payload.notebook}
        case 'PIN_NOTEBOOK':
            let notebooksCopy = [...prevState.notebooks]
            let index = notebooksCopy.findIndex(notebook => parseInt(notebook.id) === parseInt(action.payload.notebook.id))
            notebooksCopy[index] = action.payload.notebook
            return {...prevState, currentNotebook: action.payload.notebook, notebooks: notebooksCopy, pinned: action.payload.notebook}
        case 'UNPIN_NOTEBOOK':
            let notebooksCopyUnpinned = [...prevState.notebooks]
            let indexUnpinned = notebooksCopyUnpinned.findIndex(notebook => notebook.id === action.payload.notebook.id)
            notebooksCopyUnpinned[indexUnpinned] = action.payload.notebook
            return { ...prevState, currentNotebook: action.payload.notebook, notebooks: notebooksCopyUnpinned, pinned: {} }
        case 'POST_USERS':
            console.log(action.payload)
            if (action.payload.user.errors){
                return { ...prevState, currentUser: {}, errors: action.payload.user.errors}
            } else {
                localStorage.user_id = action.payload.user.id
                localStorage.token = action.payload.token
                return { ...prevState, currentUser: {id: action.payload.user.id, username: action.payload.user.username}}
            }
        case 'LOGOUT':
            localStorage.removeItem("user_id")
            localStorage.removeItem("token")
            return { ...prevState, currentUser: {} }
        case 'TOGGLE_OVERLAY':
            return { ...prevState, overlay: !prevState.overlay }
        default:
            return prevState
    }
}