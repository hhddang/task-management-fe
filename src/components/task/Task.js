import styled from "styled-components"
import flag from "assets/images/flag.svg"
import unflag from "assets/images/unflag.svg"
import avatar from "assets/images/avatar.svg"
import moreVertical from "assets/images/more-vertical.svg"
import { useState } from "react"

export default function Task({data, theme, onEdit, onDelete}) {
    const [showedFunction, setShowedFunction] = useState(false)
    
    return ( 
        <Container theme={theme}>
            <More src={moreVertical} onClick={() => setShowedFunction(true)} alt="more"/>
            <Function 
                isShowed={showedFunction}
                onMouseLeave={() => setShowedFunction(false)}
            >
                <FunctionChoice onClick={()=>{onEdit(data)}} className="edit-btn">
                    Edit
                </FunctionChoice>
                {/* <FunctionChoice>
                    {data.is_prioritized ? "Unflag" : "Flag"}
                </FunctionChoice> */}
                <FunctionChoice onClick={()=>{onDelete(data)}}  className="delete-btn">
                    Delete
                </FunctionChoice>
            </Function>
            <Name>
                <FlagIcon src={data.is_prioritized ? flag : unflag} />
                {data.name}
            </Name>
            {data.participant && (
                <ParticipantBox>
                    {data.participant?.map(each => (
                        <ParticipantIcon src={avatar} />
                    ))}
                </ParticipantBox>
            )}
        </Container>
     );
}

const Container = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 15px;
    background: white;
    border-radius: 5px;
    flex-wrap: wrap;
    gap: 15px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
        transform: scale(1.02);
        z-index: 1;
    }
    position: relative;
`

const FlagIcon = styled.img`
    margin-right: 5px;
`

const Name = styled.div``

const ParticipantBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
`

const ParticipantIcon = styled.img``

const More = styled.img`
    position: absolute;
    top: 5px;
    right: 3px;
    border-radius: 6px;
    &:hover {
        background: #FFDCE0;    
    }
`

const Function = styled.div`
    display: ${props => props.isShowed ? "flex" : "none"};
    flex-direction: column;
    position: absolute;
    top: 10px;
    right: -18px;
`
const FunctionChoice = styled.div`
    width: 60px;
    background: #FFDCE0;
    border: 1px solid #FFDCE0;
    border-radius: 2px;
    padding: 5px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: white;
    border: 1px solid #CD6799;
    &:hover {
        background: #CD6799;
        color: black;
    }
`