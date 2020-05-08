export const baseURL = 'http://localhost:3000'
// parse incoming data
const parseData = response => response.json()
// error handler
const catchError = error => console.log(`%c${error}`, 'color: red;')



// Get /usersnotebooks/:id
export const fetchUsersNotebooks = (id) => fetch(`${baseURL}/usersnotebooks/${id}`)
    .then(parseData)
    .catch(catchError)


// GET /notebooks
export const fetchNotebooks = () => fetch(`${baseURL}/notebooks`)
    .then(parseData)
    .catch(catchError)

//Get /notebooks/:id
export const fetchNotebook = (id) => fetch(`${baseURL}/notebooks/${id}`)
    .then(parseData)
    .catch(catchError)

// POST Notebooks
export const postNotebooks = (data) => fetch(`${baseURL}/notebooks`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': localStorage.token
    },
    body: JSON.stringify(data)
}).then(parseData)


// PATCH Notebooks/:id
export const patchNotebooks = (data, id) => fetch(`${baseURL}/notebooks/${id}`, {
    method: 'PATCH',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
}).then(parseData)




//post to notebooks and create a lesson joiner

export const postNotebooksWLessonJoiner = (lesson_id, notebook_data) => fetch(`${baseURL}/notebooks`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(notebook_data)
}).then(response => response.json())
    .then(body => {
        let ids = {
            lesson_id: lesson_id,
            notebook_id: body.id
        }

        fetch(`${baseURL}/notebookslessons`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(ids)
        }).then(parseData).then(body => {
            return body
        })

        return { lesson_id: lesson_id, body }
    })


//post notebookslessons joiner

export const postNotebooksLessons = (data) => fetch(`${baseURL}/notebookslessons`,{
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'ReplaceMaterial': 'ReplaceMaterial'
    },
    body: JSON.stringify(data)}
).then(parseData)


// POST Notes
export const postNotes = (data) => fetch(`${baseURL}/notes`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
}).then(parseData)

// DELETE Notes/:id
export const deleteNote = (id) => fetch(`${baseURL}/notes/${id}`, {
    method: 'DELETE'
})

//DELETE Notebooks
export const deleteNotebook = (id) => fetch(`${baseURL}/notebooks/${id}`, {
    method: 'DELETE'
})


// pin and unpin 

export const pinNotebook = (id, data) => fetch(`${baseURL}/pin/${id}`, {
    method: "POST",
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
}).then(parseData)

export const unpinNotebook = (id, data) => fetch(`${baseURL}/unpin/${id}`, {
    method: "POST",
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
}).then(parseData)
