import styled from "styled-components";

export const NavBox = styled.nav`
    width: 100%;
    background-color: aliceblue;
`
export const Menu = styled.ul`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    padding: 8px 0;

    li {
       font-weight: 700;

       :hover {
        color: red;
       }
    }
`