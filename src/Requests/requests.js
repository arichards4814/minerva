
export const baseURL = 'http://localhost:3000'
// parse incoming data
const parseData = response => response.json()
// error handler
const catchError = error => console.log(`%c${error}`, 'color: red;')

//////////////////////////////////////////////////////
// POST /login
export const postLogin = (data) => fetch(`${baseURL}/login`, {
    method: "POST",
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(parseData)
    .catch(catchError)

// POST /currentuser
export const fetchCurrentUser = (id) => fetch(`${baseURL}/users/${id}`)
    .then(parseData)
    .catch(catchError)




//fetch all
export const fetchUsersSubscriptions = (id) => fetch(`${baseURL}/userssubscriptions/${id}`)
    .then(parseData)
    .catch(catchError)

//post to subscriptions
export const postSubscription = (data) => fetch(`${baseURL}/subscriptions`, {
    method: "POST",
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
}).then(parseData)



export const postUsers = (data) => fetch(`${baseURL}/users`, {
    method: "POST",
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
}).then(parseData)





//Parsing out the youtube ID (I could even build this to find out what site that specific article is on...)
export const getYoutubeIDFromURL = (url) => {
    let video_id = url.split('v=')[1]

    if (!video_id) {
        console.log("There is a problem with this URL")
    } else {
        let ampersandPosition = video_id.indexOf('&');
        if (ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
        }
        console.log(`The video ID is ${video_id}`)
        return video_id
    }
}
// // GET /curriculums
// export const fetchCurriculums = () => fetch(`${baseURL}/curriculums`)
//     .then(parseData)
//     .catch(catchError)

// // Get /curriculums/:id
// export const fetchCurriculum = (id) => fetch(`${baseURL}/curriculums/${id}`)
//     .then(parseData)
//     .catch(catchError)

// // Get /userscurriculums/:id
// export const fetchUsersCurriculums = (id) => fetch(`${baseURL}/userscurriculums/${id}`)
//     .then(parseData)
//     .catch(catchError)

// POST Curriculums
// export const postCurriculums = (data) => fetch(`${baseURL}/curriculums`, {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json',
//         'accept': 'application/json'
//     },
//     body: JSON.stringify(data)
// }).then(parseData)

// POST Curriculums
// export const postCurriculumsWImage = (formData) => fetch(`${baseURL}/curriculums`, {
//     method: 'POST',
//     body: formData
// }).then(parseData)

// PATCH Curriculums/:id
// export const patchCurriculum = (data, id) => fetch(`${baseURL}/curriculums/${id}`, {
//     method: 'PATCH',
//     headers: {
//         'content-type': 'application/json',
//         'accept': 'application/json'
//     },
//     body: JSON.stringify(data)
// })

// DELETE Curriculums/:id
// export const deleteCurriculum = (id) => fetch(`${baseURL}/curriculums/${id}`, {
//     method: 'DELETE'
// })

// Post /Lessons

// export const postLessons = (data) => fetch(`${baseURL}/lessons`, {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json',
//         'accept': 'application/json',
//     },
//     body: JSON.stringify(data)
// }).then(parseData)

// PATCH Lessons/:id
// export const patchLesson = (data, id) => fetch(`${baseURL}/lessons/${id}`, {
//     method: 'PATCH',
//     headers: {
//         'content-type': 'application/json',
//         'accept': 'application/json'
//     },
//     body: JSON.stringify(data)
// })

// DELETE Lessons/:id
// export const deleteLesson = (id) => fetch(`${baseURL}/lessons/${id}`, {
//     method: 'DELETE'
// })


// Get /usersnotebooks/:id
// export const fetchUsersNotebooks = (id) => fetch(`${baseURL}/usersnotebooks/${id}`)
//     .then(parseData)
//     .catch(catchError)


// GET /notebooks
// export const fetchNotebooks = () => fetch(`${baseURL}/notebooks`)
//     .then(parseData)
//     .catch(catchError)

//Get /notebooks/:id
// export const fetchNotebook = (id) => fetch(`${baseURL}/notebooks/${id}`)
//     .then(parseData)
//     .catch(catchError)

// POST Notebooks
// export const postNotebooks = (data) => fetch(`${baseURL}/notebooks`, {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json',
//         'accept': 'application/json',
//         'Authorization': localStorage.token
//     },
//     body: JSON.stringify(data)
// }).then(parseData)


// PATCH Notebooks/:id
// export const patchNotebooks = (data, id) => fetch(`${baseURL}/notebooks/${id}`, {
//     method: 'PATCH',
//     headers: {
//         'content-type': 'application/json',
//         'accept': 'application/json'
//     },
//     body: JSON.stringify(data)
// }).then(parseData)




// POST Notes
// export const postNotes = (data) => fetch(`${baseURL}/notes`, {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json',
//         'accept': 'application/json'
//     },
//     body: JSON.stringify(data)
// }).then(parseData)

// DELETE Notes/:id
// export const deleteNote = (id) => fetch(`${baseURL}/notes/${id}`, {
//     method: 'DELETE'
// })

///
// USERS_SUBSCRIPTIONS
///

//post to notebooks and create a lesson joiner

// export const postNotebooksWLessonJoiner = (lesson_id, notebook_data) => fetch(`${baseURL}/notebooks`, {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json',
//         'accept': 'application/json'
//     },
//     body: JSON.stringify(notebook_data)
//         }).then(response => response.json())
//             .then(body => {
//                 let ids = {
//                     lesson_id: lesson_id,
//                     notebook_id: body.id
//                 }
               
//                 fetch(`${baseURL}/notebookslessons`,{
//                         method: 'POST',
//                         headers: {
//                             'content-type': 'application/json',
//                             'accept': 'application/json'
//                         },
//                         body: JSON.stringify(ids)
//                     }).then(parseData).then(body => {
//                         return body
//                     })

//                 return {lesson_id: lesson_id, body}
//             })


//posting an image to the backend

// let formdata = new FormData();
// formdata.append("image", { uri: imageUri, name: `${itemID}.jpg`, type: 'image/jpeg' })

// export const patchImageWCurriculum = (formData, curriculum_id) => fetch(`${baseURL}/curriculums/${curriculum_id}/image`, {
//     method: "PATCH",
//     body: formData
// }).then(parseData)


// pin and unpin 

// export const pinNotebook = (id, data) => fetch(`${baseURL}/pin/${id}`, {
//     method: "POST",
//     headers: {
//         'content-type': 'application/json',
//         'accept': 'application/json'
//     },
//     body: JSON.stringify(data)
// }).then(parseData)

// export const unpinNotebook = (id, data) => fetch(`${baseURL}/unpin/${id}`, {
//     method: "POST",
//     headers: {
//         'content-type': 'application/json',
//         'accept': 'application/json'
//     },
//     body: JSON.stringify(data)
// }).then(parseData)


// export const postTag = (name) => fetch(`${baseURL}/tags`, {
//     method: "POST",
//     headers: {
//     'content-type': 'application/json',
//     'accept': 'application/json'
//     },
//     body: JSON.stringify(name)})
//     .then(parseData)

// export const postCurriculumsTag = (data) => fetch(`${baseURL}/curriculumstags`, {
//     method: "POST",
//     headers: {
//         'content-type': 'application/json',
//         'accept': 'application/json'
//     },
//     body: JSON.stringify(data)
// }).then(parseData)
    

////
// Signup
///
