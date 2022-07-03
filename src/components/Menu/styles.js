import styled from "styled-components";

export const NavBox = styled.nav`
    background-color: yellow;
`
export const Menu = styled.ul`
    background-color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 8px 0;

    li {
       font-weight: 700;

       :hover {
        color: red;
       }
    }
`