const byCurriculum = (prevState = initialState, action) => {
    switch (action.type) {
        case 'POST_LOGIN':
            if (action.payload.user.errors) {
                return { ...prevState, currentUser: {}, errors: action.payload.user.errors }
            } else {
                localStorage.user_id = action.payload.user.id
                localStorage.token = action.payload.token
                return { ...prevState, currentUser: { id: action.payload.user.id, username: action.payload.user.username }, errors: [] }
            }
        case 'FETCH_CURRENT_USER':
            let userInfo = {}
            if (action.payload.user) {
                userInfo = {
                    username: action.payload.user.username,
                    id: action.payload.user.id
                }
            }
            return { ...prevState, currentUser: userInfo }
        case 'FETCH_CURRICULUMS':

            return { ...prevState, curriculums: action.payload.curriculums }
        case 'FETCH_USERS_CURRICULUMS':
            return { ...prevState, thisUsersCurriculums: action.payload.thisUsersCurriculums }
        case 'FETCH_CURRICULUM':
            return { ...prevState, currentCurriculum: action.payload.currentCurriculum }
        case 'POST_CURRICULUMS':
            let curriculumsCopy = [...prevState.curriculums]
            curriculumsCopy.push(action.payload.curriculum)
            console.log("curriculums copy on post", curriculumsCopy)
            return { ...prevState, curriculums: curriculumsCopy, currentCurriculum: action.payload.curriculum }
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
        case 'UPDATE_CURRENT_CURRICULUM':
            return { ...prevState, currentCurriculum: action.payload.currentCurriculum }
        case 'DELETE_CURRICULUM':
            //remove from the curriculums stored
            let updatedCurriculums = [...prevState.curriculums]
            let foundIndexCurriculum = updatedCurriculums.findIndex(curriculum => curriculum.id === action.payload.deletedCurriculum)
            updatedCurriculums.splice(foundIndexCurriculum, 1)

            //remove from this users curriculums
            let usersCurriculums = [...prevState.thisUsersCurriculums]
            let foundIndexCurriculumTU = usersCurriculums.findIndex(curriculum => curriculum.id === action.payload.deletedCurriculum)
            usersCurriculums.splice(foundIndexCurriculumTU, 1)

            return { ...prevState, curriculums: updatedCurriculums, currentCurriculum: {}, thisUsersCurriculums: usersCurriculums }
        default:
            return prevState
    }
}