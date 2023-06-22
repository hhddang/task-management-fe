import styled from "styled-components"
import Task from "./Task";
import plus from "assets/images/plus.svg"

export default function Panel({name, theme, taskList, onAddTask, onEditTask, onDeleteTask}) {
    return ( 
        <Container className="panel">
            <Header theme={theme}>
                <Name>{name}</Name>
                <Function>
                    <AddTask src={plus} onClick={onAddTask} alt="plus"/>
                </Function>
            </Header>
            <Body theme={theme}>
                <TaskList>
                    {taskList.map(task => (
                        <Task key={task.id} data={task} theme={theme} onEdit={onEditTask} onDelete={onDeleteTask}/>
                    ))}
                </TaskList>
            </Body>
        </Container>
     );
}

const Container = styled.div`
    max-width: 300px;
    width: 300px;
    /* height: 100vh; */
    height: fit-content;
    background: white;
    border-radius: 10px;
    gap: 3px;
    //
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 400px) {
        width: 260px;
    }
    
`
const Header = styled.div`
    width: 100%;
    height: fit-content;
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme};
    border-radius: 5px 5px 0 0;
`

const Name = styled.p`
    font-weight: bold;
    font-size: 16px;
`

const Function = styled.div``

const AddTask = styled.img`
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`

const Body = styled.div`
    padding: 15px;
    border-radius: 0 0 5px 5px;
    background: ${props => props.theme};
    //
    flex: 1;
`

const TaskList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
