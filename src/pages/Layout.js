import { Outlet } from "react-router-dom";
import { createGlobalStyle, styled } from "styled-components";
import Header from "components/header/Header";

export default function Layout() {
    return ( 
        <>
            <GlobalStyle />
            <Header />
            <Containter>
                <Outlet />
            </Containter>
        </>
    );
}

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        a {
            color: black;
            text-decoration: none;
        }
        --primay: #CD6799;
        --secondary: #FFDCE0;
    }
`

const Containter = styled.div`
    width: 100%;
    height: fit-content;
    min-height: 100vh;
    background: var(--secondary);
    padding: 80px 6% 50px;
`