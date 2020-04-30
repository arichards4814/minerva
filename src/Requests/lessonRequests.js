export const baseURL = 'http://localhost:3000'
// parse incoming data
const parseData = response => response.json()
// error handler
const catchError = error => console.log(`%c${error}`, 'color: red;')



// Post /Lessons

export const postLessons = (data) => fetch(`${baseURL}/lessons`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
    },
    body: JSON.stringify(data)
}).then(parseData)

// PATCH Lessons/:id
export const patchLesson = (data, id) => fetch(`${baseURL}/lessons/${id}`, {
    method: 'PATCH',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
})

// DELETE Lessons/:id
export const deleteLesson = (id) => fetch(`${baseURL}/lessons/${id}`, {
    method: 'DELETE'
})
