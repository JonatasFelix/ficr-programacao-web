import styled from "styled-components";

export const Footer = styled.footer`
    padding: 20px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
`;

export const RightBox = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const LeftBox = styled.p`
    display: flex;
    align-items: center;
    gap: 20px;
    color: ${({ theme }) => theme.colors.font};
`;

export const MenuList = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const MenuItem = styled.li`
    cursor: pointer;
    color: ${props => props.theme.colors.font};

    &:hover {
        text-decoration: underline;
    }
`

export const ThemeButton = styled.button`
    background: transparent;
    border: 1px solid ${props => props.theme.colors.font};
    border-radius: 10px;
    padding: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${props => props.theme.colors.font};
    font-size: 18px;
    `