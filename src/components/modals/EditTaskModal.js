import { styled } from "styled-components";
import { updateTaskService } from "services/ApiService";

export default function EditTaskModal({ isShowed, statusList, handleCloseModal, handleRefresh, selectedTask, setSelectedTask}) {
    const handleChangeName = (newName) => {
        setSelectedTask(prev => ({
            ...prev, name: newName
        }))
    }
    const handleChangeDesc = (newDesc) => {
        setSelectedTask(prev => ({
            ...prev, content: newDesc
        }))
    }
    const handleChangePriority = () => {
        setSelectedTask(prev => ({
            ...prev, is_prioritized: !prev.is_prioritized
        }))
    }
    
    const handleChangeStatus = (newStatus) => {
        setSelectedTask(prev => ({
            ...prev, status: newStatus
        }))
    }
    const resetModal = () => {
        setSelectedTask({})
    }
    const editTask = (task) => {
        if (task.name === '') {
            alert('You must enter task name')
        } else {
            updateTaskService({
                id: task.id,
                name: task.name,
                content: task.content,
                is_prioritized: task.is_prioritized,
                status: task.status
            })
            resetModal()
            handleCloseModal()
            handleRefresh()
        }
    }

    return ( 
        <Container isShowed={isShowed}>
            <Blur onClick={handleCloseModal} className="blur"/>
            <Form>
                <Title>Edit Task</Title>
                <FormContent>
                    <Left>
                        <InputBox>
                            <Label>Task Name</Label>
                            <InputText placeholder="Enter your task name" required onChange={e => handleChangeName(e.target.value)} value={selectedTask.name}/>
                        </InputBox>
                        <InputBox>
                            <Label>Task Detail</Label>
                            <InputTextarea placeholder="Describe your task" onChange={e => handleChangeDesc(e.target.value)} value={selectedTask.content}/>
                        </InputBox>
                    </Left>
                    <Right>
                        <PriorityBox onClick={handleChangePriority} checked={selectedTask.is_prioritized} >
                            <PriorityCheckBox checked={selectedTask.is_prioritized}/>
                            Priority
                        </PriorityBox>
                        <StatusList>
                            {statusList.map((status, index) => (
                                <Status key={index} selected={status.value===selectedTask.status} onClick={() => handleChangeStatus(status.value)} >
                                    {status.name}
                                </Status>
                            ))}

                        </StatusList>
                    </Right>

                </FormContent>
                <Submit 
                    onClick={() => {
                        editTask(selectedTask)
                    }}
                >
                    Edit
                </Submit>
            </Form>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100vh;   
    //
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    display: ${props => props.isShowed ? "block" : "none"};
`

const Blur = styled.div`
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.7;
`

const Form = styled.div`
    width: fit-content;
    height: fit-content;
    background: white;
    padding: 30px;
    border-radius: 30px;
    //
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 400px) {
    width: 300px;
    }
`

const Title = styled.p`
    text-align: center;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bolder;
    //
    margin-bottom: 25px;
`

const FormContent = styled.div`
    display: flex;
    width: fit-content;
    align-items: center;
    justify-content: center;
    gap: 30px;
        // res
    @media screen and (max-width: 400px) {
        flex-wrap: wrap;
        gap: 5px;
        justify-content: start;
    }
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    @media screen and (max-width: 400px) {
    width: 100%;
    }
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media screen and (max-width: 400px) {
    /* flex-direction: row; */
    align-items: start;
    }
`

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`

const Label = styled.p`
    font-weight: bold;
    margin-bottom: 5px;
`

const InputText = styled.input`
    border: 1px solid black;
    border-radius: 3px;
    padding: 5px;
    /* &:focus {
        border-radius: 0;
        border: 1px solid red;
    } */
`
const InputTextarea = styled.textarea`
    border: 1px solid black;
    border-radius: 3px;
    padding: 5px;
    height: 160px;
    @media screen and (max-width: 400px) {
        height: 100px;
    }
`

const Submit = styled.button`
    padding: 12px;
    border: none;
    background: #FFDCE0;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
    font-size: 14px;
    transition: 0.3s;
    color: white;
    &:hover {
        transform: translateY(-2px);
        background: #CD6799;
        color: black;
    }
    margin-top: 10px;
`

const PriorityCheckBox = styled.input.attrs({type: "checkbox"})`
    width: 20px;
    height: 20px;
`

const PriorityBox = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 10px;
    font-weight: bold;
    color: ${props => props.checked ? "#CD6799" : "#FFDCE0"};
`

const StatusList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    @media screen and (max-width: 400px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`

const Status = styled.button`
    padding: 10px;
    font-weight: bold;
    font-size: 14px;
    background: ${props => props.selected ? "#CD6799" : "#FFDCE0"};
    border: none;
    border-radius: 5px;
    color: ${props => props.selected ? "black" : "white"};
    cursor: pointer;
    transition: 0.2s;
    &:hover {
        transform: translateX(-3px);
    }
`