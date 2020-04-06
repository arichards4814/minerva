import React, { useState, useEffect } from 'react'
import NotebooksHeader from '../Icons/Headers/NotebooksHeader'
import Row from '../Container/Row'
import Layout from '../Container/Layout'
import F2 from '../Typing/F2'
import F3 from '../Typing/F3'
import { useLocation } from "react-router-dom";
import TitleBox from '../Components/TitleBox'
import NotebookPreview from '../Container/NotebookPreview'
import LongCardScroller from '../Container/LongCardScroller'

// redux
import { connect } from 'react-redux';
import { fetchUsersNotebooks } from '../actionCreators'


const Notebooks = props => {
    const location = useLocation().pathname.split("/")[2]

    useEffect(() => {
            props.fetchUsersNotebooks(40)
    }, [])

    return (
        <div className="fade-in">
            <Row marginLeft={80}>
                <Layout width={4} >
                    <F2 font="secondary"> Notebooks</F2>
                    {/* <TitleBox style="rounded" theme="secondary" paddingLeft={3}><F3 font="secondary">{props.currentCurriculum.title}</F3></TitleBox> */}
                    {/* <MinervaInput type="text" theme="secondary" onChange={handleChange} value={search} placeholder="Expand your mind..." /> */}
                    {/* <SearchButton theme="secondary" onClick={handleClick}></SearchButton> */}
                </Layout>
                <Layout width={7}>
                    <NotebooksHeader />
                </Layout>
            </Row>
            <Row marginTop={30} marginLeft={3} >
                <Layout width={6}>
                    <NotebookPreview {...props.currentNotebook}/>
                </Layout>
                <Layout width={6}>
                    <LongCardScroller info={props.notebooks} style={"show"} placeholder="You don't have any notebooks." headerTitle="Notebooks:" />
                </Layout>
            </Row>

            {/* </Row> */}

        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        notebooks: state.notebooks,
        currentNotebook: state.currentNotebook
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsersNotebooks: (id) => dispatch(fetchUsersNotebooks(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notebooks);