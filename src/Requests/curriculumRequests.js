
export const baseURL = 'http://localhost:3000'
// parse incoming data
const parseData = response => response.json()
// error handler
const catchError = error => console.log(`%c${error}`, 'color: red;')



// GET /curriculums
export const fetchCurriculums = () => fetch(`${baseURL}/curriculums`)
    .then(parseData)
    .catch(catchError)

// Get /curriculums/:id
export const fetchCurriculum = (id) => fetch(`${baseURL}/curriculums/${id}`)
    .then(parseData)
    .catch(catchError)

// Get /userscurriculums/:id
export const fetchUsersCurriculums = (id) => fetch(`${baseURL}/userscurriculums/${id}`)
    .then(parseData)
    .catch(catchError)

// POST Curriculums
export const postCurriculums = (data) => fetch(`${baseURL}/curriculums`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
}).then(parseData)

// POST Curriculums
export const postCurriculumsWImage = (formData) => fetch(`${baseURL}/curriculums`, {
    method: 'POST',
    body: formData
}).then(parseData)

// PATCH Curriculums/:id
export const patchCurriculum = (data, id) => fetch(`${baseURL}/curriculums/${id}`, {
    method: 'PATCH',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
})

// DELETE Curriculums/:id
export const deleteCurriculum = (id) => fetch(`${baseURL}/curriculums/${id}`, {
    method: 'DELETE'
})



export const postTag = (name) => fetch(`${baseURL}/tags`, {
    method: "POST",
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(name)
})
    .then(parseData)

export const postCurriculumsTag = (data) => fetch(`${baseURL}/curriculumstags`, {
    method: "POST",
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
    },
    body: JSON.stringify(data)
}).then(parseData)


export const patchImageWCurriculum = (formData, curriculum_id) => fetch(`${baseURL}/curriculums/${curriculum_id}/image`, {
    method: "PATCH",
    body: formData
}).then(parseData)
