import { useParams } from "react-router-dom";
import styled from "styled-components"
import Panel from "components/task/Panel";
import { useEffect, useState } from "react";
import { getTaskService } from "services/ApiService";
import AddTaskModal from "components/modals/AddTaskModal";
import EditTaskModal from "components/modals/EditTaskModal";
import DeleteTaskModal from "components/modals/DeleteTaskModal";

export default function Project() {
    const {name} = useParams()
    const statusList = [{name: "New", theme: "gray", value:"new"}, 
                        {name: "Ready", theme: "orange", value:"ready"}, 
                        {name: "In Progress", theme: "red", value:"in_progress"}, 
                        {name: "Ready For Test", theme: "blue", value:"ready_for_test"}, 
                        {name: "Done", theme: "green", value:"done"}]
    const [taskList, setTaskList] = useState([])
    const [selectedTask, setSelectedTask] = useState({})
    const [showAddTaskModal, setShowAddTaskModal] = useState(false)
    const [showEditTaskModal, setShowEditTaskModal] = useState(false)
    const [showDeleteTaskModal, setShowDeleteTaskModal] = useState(false)
    const [refresh, setRefresh] = useState(0)
    const [searchText, setSearchText] = useState('')
    const [selectedPriority, setSelectedPriority] = useState("all")
    
    const openAddTaskModal = () => {
        setShowAddTaskModal(true)
    }
    const closeAddTaskModal = () => {
        setShowAddTaskModal(false)
    }
    const openEditTaskModal = (task) => {
        setSelectedTask(task)
        setShowEditTaskModal(true)
    }
    const closeEditTaskModal = () => {
        setShowEditTaskModal(false)
    }
    const openDeleteTaskModal = (task) => {
        setSelectedTask(task)
        setShowDeleteTaskModal(true)
    }
    const closeDeleteTaskModal = () => {
        setShowDeleteTaskModal(false)
    }
    const handleRefresh = () => {
        setRefresh(prev => prev + 1)
    }
    const handleChangeSearch = (newText) => {
        setSearchText(newText)
    }
    const handleChangePriorityFilter = (priority) => {
        setSelectedPriority(priority)
    }

    useEffect(() => {
        const fetchData = async() => {
            const task = {
                project: name
            }
            if (searchText !== '') {
                task.name = searchText
            }
            if (selectedPriority !== "all") {
                if (selectedPriority === 'yes') {
                    task.is_prioritized = true
                } else {
                    task.is_prioritized = false
                }
            }
            const data = await getTaskService(task);
            setTaskList(data)
        }
        fetchData();
    }, [refresh, searchText, selectedPriority, name])

    return ( 
        <div>
            <Containter>
                <Header>
                    <Title>{name}</Title>
                    <Filter>
                        <SearchBar placeholder={"Find some tasks"} value={searchText} onChange={e => handleChangeSearch(e.target.value)} />
                        <PriorityFilter>
                            <PriorityFilterTitle>Flag Filter</PriorityFilterTitle>
                            <PrioriryChoice onClick={() => handleChangePriorityFilter("all")} >
                                <CheckBox checked={"all" === selectedPriority} /> All
                            </PrioriryChoice>
                            <PrioriryChoice onClick={() => handleChangePriorityFilter("no")}>
                                <CheckBox checked={"no" === selectedPriority} /> No 
                            </PrioriryChoice>
                            <PrioriryChoice onClick={() => handleChangePriorityFilter("yes")}>
                                <CheckBox checked={"yes" === selectedPriority} /> Yes
                            </PrioriryChoice>
                        </PriorityFilter>
                    </Filter>
                </Header>
                <Slider>
                    <PanelList>
                        {statusList.map((status, index) => (                        
                            <Panel key={index} name={status.name} theme={status.theme} taskList={taskList.filter(task => task.status===status.value)} onAddTask={openAddTaskModal} onEditTask={openEditTaskModal} onDeleteTask={openDeleteTaskModal} />
                        ))}
                    </PanelList>
                </Slider>
                <AddTaskModal isShowed={showAddTaskModal} statusList={statusList} handleCloseModal={closeAddTaskModal} handleRefresh={handleRefresh} projectName={name} />
                {selectedTask && (
                    <>
                        <DeleteTaskModal isShowed={showDeleteTaskModal} handleCloseModal={closeDeleteTaskModal} handleRefresh={handleRefresh} selectedTask={selectedTask} />
                        <EditTaskModal isShowed={showEditTaskModal} statusList={statusList} handleCloseModal={closeEditTaskModal} handleRefresh={handleRefresh} selectedTask={selectedTask} setSelectedTask={setSelectedTask}/>
                    </>
                )}
            </Containter>
        </div>
     );
}

const Containter = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
    margin-bottom: 20px;
    @media screen and (max-width: 1024px) {
        gap: 20px;
    }
` 

const Title = styled.p`
    font-weight: bold;
    font-size: 24px;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
`

const SearchBar = styled.input`
    width: 280px;
    height: 30px;
    padding: 5px;
`

const PriorityFilter = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
`

const PriorityFilterTitle = styled.p`
    font-weight: bold;
    font-size: 16px;
`

const PrioriryChoice = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`

const CheckBox = styled.input.attrs({type:"checkbox"})`
    width: 20px;
    height: 20px;
`



const Slider = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

const PanelList = styled.div`
    display: flex;
    width: fit-content;
    gap: 15px;
`