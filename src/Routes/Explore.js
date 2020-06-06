import React, { useState, useEffect } from 'react'
import ExploreHeader from '../icons/Headers/ExploreHeader'
import Row from '../containers/Row'
import Layout from '../containers/Layout'
import F2 from '../Typing/F2'
import MinervaInput from '../components/Forms/MinervaInput'
import Card from '../components/Card'
import { useHistory, useLocation } from 'react-router-dom'
import TagsList from '../components/TagsList'
import Ex from '../icons/Tiny/Ex'

// redux
import { connect } from 'react-redux';
import { fetchCurriculums } from '../actionCreators'


const Explore = props => {
    const [search, setSearch] = useState("")
    let history = useHistory()
    const tags = [{name: "Adobe"},
        { name: "Code" }, { name: "Brewing" }]
    let location = useLocation()

    console.log(location.search)
    useEffect(()=>{
        if(location.search.includes("=")){
            setSearch(location.search.split("=")[1])
        }
    })

    const renderCurriculums = (filteredCurriculums) => {
        if (props.curriculums) {
            return filteredCurriculums.map(curriculum => <div style={{marginLeft: 30, marginRight: 30, display: "inline-block"}}><Card key={curriculum.id} {...curriculum} onClick={() => goToCurriculum(curriculum.id)} /></div>)
        }
    }

    const curriculumsFiltered = (search) => {
        if(search === ""){
            return renderCurriculums(props.curriculums)
        } else {
            let filteredCurriculums = props.curriculums.filter(curriculum => curriculum.title.toLowerCase().includes(search.toLowerCase()))
            return renderCurriculums(filteredCurriculums)
        }
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleClick = () => {
        curriculumsFiltered(search)
    }

    const goToCurriculum = (id) => {
        history.push(`curriculums/${id}`)
    }

    const clearSearch = () => {

        history.push(`/explore`)
        setSearch("")
    }

    return (
        <div className="fade-in">
            <Row marginLeft={80}>
                <Layout width={4} >
                    <F2 font="secondary"> Explore</F2>
                    <MinervaInput type="text" theme="secondary" onChange={handleChange} value={search} placeholder="Expand your mind..."/>
                    <div style={{display: "inline-block", width: 50, verticalAlign: "middle"}}>
                        <Ex onClick={clearSearch} />
                    </div>
                    <div style={{ marginTop: 10, color: "#888888", width: 100, padding: 3}}>Popular Tags:</div>
                    <TagsList tags={tags} />
                    {/* <SearchButton theme="secondary" onClick={handleClick}></SearchButton> */}
                </Layout>
                <Layout width={7}>
                    <ExploreHeader />
                </Layout>
            </Row>
            <Row marginTop={30} marginLeft={30}>
                <Layout width={1}>

                </Layout>
                <Layout width={10}>
                    {curriculumsFiltered(search)}
                </Layout>
                <Layout width={1}>
                    
                </Layout>
            </Row>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        curriculums: state.curriculums
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurriculums: () => dispatch(fetchCurriculums())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore);