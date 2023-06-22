import { useState } from "react";
import { styled } from "styled-components";
import { createProjectService } from "services/ApiService";

export default function AddProjectModal({ isShowed, handleCloseModal, handleRefresh }) {
    const [name, setName] = useState('');
    const [description, setDesc] = useState('');
    const owner = "hdang";

    const handleChangeName = (newName) => {
        setName(newName)
    }
    const handleChangeDesc = (newDesc) => {
        setDesc(newDesc)
    }
    const resetModal = () => {
        setName('')
        setDesc('')
    }
    const addProject = (project) => {
        if (project.name === '') {
            alert('You must enter project name')
        } else {
            createProjectService(project)
            handleCloseModal()
            handleRefresh(prev => prev + 1)
            resetModal()
        }
    }

    return ( 
        <Container isShowed={isShowed}>
            <Blur onClick={handleCloseModal} className="blur"/>
            <p>blablu</p>
            <Form>
                <Title>Add New Project</Title>
                <InputBox>
                    <Label>Project Name</Label>
                    <InputText placeholder="Enter your project name" required onChange={e => handleChangeName(e.target.value)} value={name}/>
                </InputBox>
                <InputBox>
                    <Label>Descript Your Project</Label>
                    <InputTextarea placeholder="Enter your description" onChange={e => handleChangeDesc(e.target.value)} value={description}/>
                </InputBox>
                <Submit onClick={() => addProject({name, description, owner})}>Add</Submit>
            </Form>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100vh;   
    //
    position: fixed;
    top: 0;
    left: 0;
    display: ${props => props.isShowed ? "block" : "none"};
    z-index: 1;
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
    height: 70px;
    /* max-height: ; */
`

const Submit = styled.button`
    padding: 12px;
    border: none;
    background: #CD6799;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
    font-size: 14px;
    transition: 0.3s;
    &:hover {
        transform: translateY(-2px);
        background: #FFDCE0;
    }
    //
    margin-top: 10px;
`