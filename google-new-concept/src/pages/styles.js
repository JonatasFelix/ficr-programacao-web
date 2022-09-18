import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.primary};
    z-index: -2;
`

export const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    position: relative;
`

export const Logo = styled.img`
    width: 370px;
    position: absolute;
    z-index: 0;
    top: 50%;
    transform: translateY(-50%) rotate(326deg);
`


export const Form = styled.form`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const BoxButtons = styled.div`
    display: flex;
    justify-content: center;
`