import { styled } from "styled-components";
import { deleteTaskService } from "services/ApiService";

export default function DeleteTaskModal({ isShowed, handleCloseModal, handleRefresh, selectedTask}) {
    const deleteTask = (task) => {
        console.log('delete modal: ', task)
        deleteTaskService({id:task.id})
        handleRefresh()
        handleCloseModal()
    }


    return ( 
        <Container isShowed={isShowed}>
            <Blur onClick={handleCloseModal} className="blur"/>
            <Form>
                <Title>Delete Task</Title>
                <Content>Do you want to delete task: {selectedTask.name}</Content>
                <Function>
                    <Submit onClick={() => deleteTask(selectedTask)}>Yes</Submit>
                    <Cancel onClick={handleCloseModal}>Cancel</Cancel>
                </Function>
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
    width: 500px;
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
    gap: 15px;
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

const Content = styled.p`
    text-align: center;
    color: black;
    font-size: 20px;
`

const Function = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    //
    margin-top: 15px;
    @media screen and (max-width: 400px) {
        flex-direction: column-reverse;
        gap: 5px;
    }
`

const Submit = styled.button`
    flex: 1;
    max-width: 180px;
    padding: 12px;
    border: none;
    background: #FFDCE0;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-style: 14px;
    &:hover {
        transform: translateY(-1px);
        opacity: 0.7;
    }
    @media screen and (max-width: 400px) {
        max-width: 100%;
    }
`

const Cancel = styled.button`
    flex: 1;
    max-width: 180px;
    padding: 12px;
    border: none;
    background: #CD6799;
    cursor: pointer;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-style: 14px;
    &:hover {
        transform: translateY(-1px);
        opacity: 0.7;
    }
    @media screen and (max-width: 400px) {
        max-width: 100%;
    }
`