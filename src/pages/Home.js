import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import {getProjectService} from "services/ApiService"
import ProjectItem from 'components/project/ProjectItem';
import AddProjectModal from 'components/modals/AddProjectModal';
import DeleteProjectModal from 'components/modals/DeleteProjectModal';
import plus from "assets/images/plus.svg"

export default function Home() {
    const [projectList, setProjectList] = useState([])
    const [showAddProjectModal, setShowAddProjectModal] = useState(false)
    const [showDeleteProjectModal, setShowDeleteProjectModal] = useState(false)
    const [deleteProject, setDeleteProject] = useState({})
    const [refresh, setRefresh] = useState(0)
    const navigate = useNavigate()

    const openAddProjectModal = () => {
        setShowAddProjectModal(true)
    }
    const closeAddProjectModal = () => {
        setShowAddProjectModal(false)
    }
    const openDeleteProjectModal = (project) => {
        console.log('delete this one: ', project)
        setShowDeleteProjectModal(true)
        setDeleteProject(project)
    }
    const closeDeleteProjectModal = () => {
        setShowDeleteProjectModal(false)
        setDeleteProject({})
    }
    const directProjectPage = (projectName) => {
        navigate(`project/${projectName}`)
    }

    useEffect(() => {
        const fetchData = async() => {
            const data = await getProjectService({});
            setProjectList(data)
        }
        fetchData();
    }, [refresh])

    return ( 
        <Containter>
            <Welcome>Welcome, DangHuynh :))</Welcome>
            <Header>
                <Title>Project Dashboard</Title>
                <Function>
                    <AddBtn onClick={openAddProjectModal}>
                        <PlusIcon src={plus} alt="plus"/>
                        New Project
                    </AddBtn>
                    <AddProjectModal isShowed={showAddProjectModal} handleCloseModal={closeAddProjectModal} handleRefresh={setRefresh} />
                </Function>
            </Header>
            <ProjectList>
            <DeleteProjectModal isShowed={showDeleteProjectModal} handleCloseModal={closeDeleteProjectModal} project={deleteProject} handleRefresh={setRefresh} />
                {projectList.map((project) => (
                    <ProjectItem key={project.id} project={project} handleDelete={() => openDeleteProjectModal(project)} onClick={() => directProjectPage(project.name)}/>
                ))}
            </ProjectList>
        </Containter>
    );
}

const Containter = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    //
    color: var(--primay);
`

const Welcome = styled.p`
    color: black;
`

const Header = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 50px;
    @media screen and (max-width: 400px) {
        gap: 10px;
    }
`

const Title = styled.p`
    font-weight: bold;
    font-size: 24px;
`

const Function = styled.div`
    display: flex;
    justify-content: space-between;
`

const AddBtn = styled.button`
    padding: 8px;
    color: black;
    font-size: 14px;
    font-weight: bold;
    background-color: #CD6799;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    //
    display: flex;
    align-items: center;
    gap: 10px;
    transition: 0.2s;
    //
    &:hover {
        transform: scale(1.1);
    }
    @media screen and (max-width: 400px) {
        width: 130px;
        padding: 10px 05px;
        justify-content: center;
    }
`

const PlusIcon = styled.img``

const ProjectList = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`