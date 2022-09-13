import styled from "styled-components";

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