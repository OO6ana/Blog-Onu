import styled from "styled-components"

export const Card = styled.div`
    //border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 200px;

    padding-bottom: 5px;

    background-color: pink;
    border-radius: 10px;

    a {
        text-decoration: none;
    }

    p {
        font-weight: 700;
    }
`

export const ImageBox = styled.div`
    width: 100%;
    height: 80%;

    object-fit: cover;

    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }
`