import React, { useState } from 'react'
import ImageUploader from './ImageUploader'
import SearchButton from './Forms/SeachButton'

// redux
import { connect } from 'react-redux';
import { patchCurriculumWImage } from '../actionCreators'


const UploaderV2 = (props) =>  {
    const [image, setImage] = useState(null)

    const handleSubmit = event => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("file", image);
        props.patchCurriculumWImage(formData, props.currentCurriculum.id)
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

