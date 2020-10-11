
export const baseURL = 'http://localhost:3000'
// parse incoming data
const parseData = response => response.json()
// error handler
const catchError = error => console.log(`%c${error}`, 'color: red;')



// GET /curriculums
export const fetchUsersStudybuds = (id) => fetch(`${baseURL}/usersstudybuds/${id}`)
    .then(parseData)
    .catch(catchError)


// POST Studybuds
export const postStudybuds = (data) => fetch(`${baseURL}/studybuds`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
}).then(parseData)