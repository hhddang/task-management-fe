import styled from 'styled-components'
import projectIcon from 'assets/images/project.svg'
import trash from "assets/images/trash.svg"

export default function ProjectItem({ project, handleDelete, onClick }) {
    const {name, description, owner} = {...project}
    return ( 
        <Containter className='project-item'>
            <TrashIcon src={trash} onClick={handleDelete} alt='trash'/>
            <NameBox onClick={onClick} className='name-box'>
                <ProjectIcon src={projectIcon} alt="project" />
                <Name>{name}</Name>
            </NameBox>
            <DescriptionBox>
                <Description>{description}</Description>
            </DescriptionBox>
            <InfoBox>
                <Owner>Owned by {owner}</Owner>
            </InfoBox>
        </Containter>
    );
}

const TrashIcon = styled.img`
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
    &:hover {
        transition: 0.2s;
        transform: scale(1.2);
    }    
`

const Containter = styled.div`
    width: 350px;
    height: 180px;
    background: white;
    border-radius: 5px;
    padding: 15px;
    text-decoration: none;
    //
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    //
    &:hover {
        transform: translateY(-3px);
        transition: transform 0.1s;
        box-shadow: 0 0 7px;
        ${TrashIcon} {
            display: block;
        }
    }
    position: relative;
`



const NameBox = styled.div`
    display: flex;
    justify-content: start;
    gap: 15px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`
const ProjectIcon = styled.img``

const Name = styled.p`
    font-weight: bold;
    font-size: 17px;
`
const DescriptionBox = styled.div`
    flex: 1;
    color: black;
    //
    display: flex;
    align-items: start;
    text-overflow: ellipsis;
`

const Description = styled.p`
    
`

const InfoBox = styled.div`
    display: flex;
    align-self: flex-end;
`
const Owner = styled.p``
