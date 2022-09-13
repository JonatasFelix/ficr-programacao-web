import styled from "styled-components";


export const Header = styled.header`
    padding: 20px;
`

export const List = styled.ul`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 18px;
`

export const ListItem = styled.li`
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props => props.active ? "#F0F0F0" : "none"};
    display: flex;
    justify-content: center;
    align-items: center;



    &:hover {
        background-color: #F0F0F0;
    }
`

export const Icon = styled.img`
    width: 25px;
`

export const Avatar = styled.img`
    border-radius: 50%;
    width: 38px;
`