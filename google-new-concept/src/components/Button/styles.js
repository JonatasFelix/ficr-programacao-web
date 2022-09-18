import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    color: ${props => props.theme.colors.font};
    height: 36px;
    margin: 11px 4px;
    padding: 0 46px;
    background-color: ${props => props.theme.colors.secondary};
    border: 1px solid ${props => props.theme.colors.tertiary};
    border-radius: 4px;

    font-weight: 500;
    text-transform: uppercase;

    &:hover {
        box-shadow: ${props => props.theme.colors.shadowPrimary};
        transition-duration: 0.2s;
        background-color: ${props => props.theme.colors.secondary};
        border: 1px solid ${props => props.theme.colors.tertiary};
        color: ${props => props.theme.colors.fontHover};
    }

`