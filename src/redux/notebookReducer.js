const initialNotebookState = {
    notebooks: [],
    currentNotebook: {},
    currentNote: {},

    navlingHidden: false,

    currentNotepadContent: {},
    currentNotepadDetails: {},

    selectedNoteIndex: 0,
}

const byNotebooks = (prevState = initialNotebookState, action) => {
    switch (action.type) {
        case 'FETCH_USERS_NOTEBOOKS':
            return { ...prevState, notebooks: action.payload.notebooks }
        case 'POST_NOTEBOOKS':
            let updatedNotebooks = [...prevState.notebooks]
            updatedNotebooks.push(action.payload.notebook)
            return { ...prevState, notebooks: updatedNotebooks, currentNotebook: action.payload.notebook }
        case 'SET_CURRENT_NOTEBOOK':
            return { ...prevState, currentNotebook: action.payload.currentNotebook }
        case 'FETCH_NOTEBOOK':
            return { ...prevState, currentNotebook: action.payload.currentNotebook }
        case 'DELETE_NOTEBOOK':
            let updatedNotebooks2 = [...prevState.notebooks]
            let foundnbIndex = updatedNotebooks2.findIndex(notebook => notebook.id === action.payload.deletedNotebook)
            updatedNotebooks2.splice(foundnbIndex, 1)
            return { ...prevState, notebooks: updatedNotebooks2 }
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
            let currentNotebookCopy = { ...prevState.currentNotebook }
            let foundIndexNote = currentNotebookCopy.notes.findIndex(note => note.id === action.payload.deletedNote)
            currentNotebookCopy.notes.splice(foundIndexNote, 1)
            return { ...prevState, currentNotebook: currentNotebookCopy }
        case 'POST_NOTEBOOKS_W_LESSON_JOINER':
            //find the right lesson within subscriptions. Then add to its notebook
            console.log("action.payload", action.payload)


            let subCopy = [...prevState.subscriptions]
            console.log("subcopy", subCopy)
            subCopy.forEach(obj => obj.curriculum.lessons.forEach(lesson => {
                if (lesson.id === action.payload.data.lesson_id) {
                    lesson.notebooks.push(action.payload.data.body)
                }
            }))

            // just edited this....
            return { ...prevState, subscriptions: subCopy, currentNotebook: action.payload.data.body }
        case 'PATCH_NOTEBOOKS':
            return { ...prevState, currentNotebook: action.payload.notebook }
        case 'PIN_NOTEBOOK':
            let notebooksCopy = [...prevState.notebooks]
            let index = notebooksCopy.findIndex(notebook => parseInt(notebook.id) === parseInt(action.payload.notebook.id))
            notebooksCopy[index] = action.payload.notebook
            return { ...prevState, currentNotebook: action.payload.notebook, notebooks: notebooksCopy, pinned: action.payload.notebook }
        case 'UNPIN_NOTEBOOK':
            let notebooksCopyUnpinned = [...prevState.notebooks]
            let indexUnpinned = notebooksCopyUnpinned.findIndex(notebook => notebook.id === action.payload.notebook.id)
            notebooksCopyUnpinned[indexUnpinned] = action.payload.notebook
            return { ...prevState, currentNotebook: action.payload.notebook, notebooks: notebooksCopyUnpinned, pinned: {} }
        case 'POST_NOTEBOOKS_LESSONS':
            let cnCopy = { ...prevState.currentNotebook }
            cnCopy.material_url = action.payload.material_url
            return { ...prevState, currentNotebook: cnCopy }
        default:
            return prevState
    }
}