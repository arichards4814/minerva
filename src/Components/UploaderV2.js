
import { DirectUpload } from "@rails/activestorage"
import Uploader from "./Uploader"
import React, { useState } from 'react'
import ImageUploader from './ImageUploader'
import SearchButton from '../Components/Forms/SeachButton'

import DropzoneComponent from 'react-dropzone-component';


// redux
import { connect } from 'react-redux';
import { patchCurriculumWImage } from '../actionCreators'


const UploaderV2 = (props) =>  {
    const [image, setImage] = useState(null)

    const handleSubmit = event => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("file", image);

        // fetch to curriculums/:id/image

        props.patchCurriculumWImage(formData, props.currentCurriculum.id)

        // fetch(`${baseURL}/curriculums/${props.currentCurriculum.id}/image`, {
        //     method: "PATCH",
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     });
    }


    const selectImage = newImage => {
        
        if(props.setImageInCreator){
            props.setImageInCreator(newImage)
        }

        setImage(newImage);
    }

    const unselectImage = () => setImage('');



    return (
        <div style={{display: 'inline-block', verticalAlign: 'top'}}>
            <form onSubmit={handleSubmit} id="form" direct_upload={true}>
                <ImageUploader
                    image={image}
                    selectImage={selectImage}
                    unselectImage={unselectImage} />
                    {!props.setImageInCreator && <SearchButton theme="third" value="Save" type="submit"/>}
                    {/* Need to check which form this is a part of and then  */}
            </form>
        </div>
    )

}




const mapStateToProps = (state) => {
    return {
        currentCurriculum: state.currentCurriculum
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        patchCurriculumWImage: (data, id) => dispatch(patchCurriculumWImage(data, id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploaderV2);

