import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid ${props => props.theme.colors.tertiary};
    background-color: ${props => props.theme.colors.secondary};
    width: 100%;
    max-width: 584px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    padding: 8px 12px;
    margin: 0 auto;

    box-shadow: ${props => props.theme.colors.shadowPrimary};

    &:hover, &:focus-within {
        transition-duration: 0.2s;
        box-shadow: ${props => props.theme.colors.shadowSecondary};
    }

`

export const Input = styled.input`
    color: ${props => props.theme.colors.font};
    border: none;
    outline: none;
    box-shadow: none!important;
    height: 34px;
    width: 100%;
    font-size: 16px;
    background-color: transparent;

    &:focus {
        border: none;
        outline: none;
        box-shadow: none!important;
    }

`

export const MicIcon = styled.img`
    cursor: pointer;
`
