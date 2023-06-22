import { styled } from "styled-components";
import {Link} from "react-router-dom"
import logo from "assets/images/logo.svg"
import notify from "assets/images/notify.svg"
import avatar from "assets/images/avatar.svg"

export default function Header() {
    return ( 
        <Containter>
            <Link to="/">
                <Logo src={logo} alt="logo" />
            </Link>
            <Function>
                <Notify src={notify} alt="notify"/>
                <Avatar src={avatar} alt="avatar"/>
            </Function>
        </Containter>
    );
}

const Containter = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //
    width: 100%;
    height: 50px;
    background: white;
    padding: 0 5%;
    box-shadow: 0 -1px 5px black;
    z-index: 1;
`

const Logo = styled.img`
    height: 36px;
`

const Function = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`

const Notify = styled.img`
    height: 30px;
    cursor: pointer;
`

const Avatar = styled.img`
    height: 30px;
    cursor: pointer;
`