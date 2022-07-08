import styled from "styled-components"

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    height: 100%;
    padding-bottom: 5px;

    a {
        text-decoration: none;
    }

    p {
        text-align: center;
        color: #474747;
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