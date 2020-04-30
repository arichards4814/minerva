import React, { useState } from 'react'
import Button from './Button'
// import DropzoneComponent from 'react-dropzone-component';
import { DirectUpload } from "@rails/activestorage"

import UploaderV2 from '../Components/UploaderV2'


const Uploader = props => {
const [file, setFile] = useState({})

const input = document.querySelector('input[type=file]')
  




const onChange = (e) => {

    // let test = new UploaderV2(e.target.uploadFile, 'http://localhost:3000/curriculums/66/image')

    console.log(e.target.files[0])
    let data = new FormData()
    data.append('user[image]', e.target.files[0])

    console.log(data)
    
    const upload = new DirectUpload(e.target.files[0], 'http://localhost:3000/curriculums/67/image')
    // let blob = new Blob(e.target.uploadFile)

    upload.create((error, blob) => {
        if (error) {
            console.log(error)
        } else {
            // Add an appropriately-named hidden input to the form with a
            //  value of blob.signed_id so that the blob ids will be
            //  transmitted in the normal upload flow
            const hiddenField = document.createElement('input')
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("value", blob.signed_id);
            hiddenField.name = input.name
            document.querySelector('form').appendChild(hiddenField)
        }
    })

    // Array.from(input.files).forEach(file => uploadFile(file))
    // you might clear the selected files from the input
    // input.value = null


    // var objecturl = URL.createObjectURL(dataURItoBlob(e.target.value));

    // let data = new FormData()
    // data.append('user[image]', fileObject)


    // let formdata = new FormData();

    // formdata.append("image", { uri: blob, name: `${file.name}`, type: `${file.type}` })
    // setFile({
    //     uri: e.target.value,
    //     name: e.target.files[0].name,
    //     type: e.target.files[0].type
    // })


    // requests.postImageToCurriculum(66, formdata)
    // setFile(e.target.files[0])
}

// const uploadFile = (file) => {




//     const url = input.dataset.directUploadUrl

//     upload.create((error, blob) => {
//         if (error) {
//             // Handle the error
//         } else {
//             // Add an appropriately-named hidden input to the form with a
//             //  value of blob.signed_id so that the blob ids will be
//             //  transmitted in the normal upload flow
//             const hiddenField = document.createElement('input')
//             hiddenField.setAttribute("type", "hidden");
//             hiddenField.setAttribute("value", blob.signed_id);
//             hiddenField.name = input.name
//             document.querySelector('form').appendChild(hiddenField)
//         }
//     })
// }

// const onSubmit = () => {
//     console.log(file)

//     let imageURI = encodeURI(file.uri)
//     let formdata = new FormData();

//     formdata.append("image", { uri: imageURI, name: `${file.name}`, type: `${file.type}` })

//     // formdata.append('image', file)
//     // formdata.append("image", file)

//     // requests.postImageToCurriculum(66, formdata)
// }

    // const  dataURItoBlob = (dataURI) => {
    //     var mime = dataURI.split(',')[0].split(':')[1].split(';')[0];
    //     var binary = atob(dataURI.split(',')[1]);
    //     var array = [];
    //     for (var i = 0; i < binary.length; i++) {
    //         array.push(binary.charCodeAt(i));
    //     }
    //     return new Blob([new Uint8Array(array)], { type: mime });
    // }


    const djsConfig = {
        acceptedFiles: "image/jpeg,image/png,image/gif",
        autoProcessQueue: false,
        uploadMultiple: false,
        addRemoveLinks: true
    }

    const componentConfig = {
        iconFiletypes: ['.jpg', '.png', '.gif'],
        showFiletypeIcon: true,
        maxFiles: 1,
        postUrl: 'no-url'
    }


    return(
        <div>
            Upload Photo
            {/* <DropzoneComponent config={componentConfig}
                eventHandlers={eventHandlers}
                djsConfig={djsConfig} /> */}
                {/* <div id="form"> */}

                {/* </div> */}
            <input onChange={onChange} type="file" accept="image/png, image/jpeg"></input>
            {/* <Button onClick={onSubmit} theme="secondary" color="white">Upload</Button> */}
        </div>
    )
}

export default Uploader