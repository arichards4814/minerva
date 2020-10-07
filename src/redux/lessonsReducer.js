
const byLessons = (prevState = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_LESSON':
            return { ...prevState, currentLesson: action.payload.currentLesson }
        case 'PATCH_LESSON':
            let updatedCurriculum1 = { ...prevState.currentCurriculum }
            let foundIndex = updatedCurriculum1.lessons.findIndex(lesson => lesson.id === action.payload.lesson.id)
            updatedCurriculum1.lessons[foundIndex] = action.payload.lesson
            return { ...prevState, currentCurriculum: updatedCurriculum1 }
        case 'POST_LESSONS':
            let updatedCurriculum = { ...prevState.currentCurriculum }
            updatedCurriculum.lessons.push(action.payload.lesson)
            return { ...prevState, currentCurriculum: updatedCurriculum }
        case 'DELETE_LESSON':
            let updatedCurriculum2 = { ...prevState.currentCurriculum }
            let foundIndex2 = updatedCurriculum2.lessons.findIndex(lesson => lesson.id === action.payload.deletedLesson)
            updatedCurriculum2.lessons.splice(foundIndex2, 1)
            return { ...prevState, currentCurriculum: updatedCurriculum2 }
        default:
            return prevState
    }
}