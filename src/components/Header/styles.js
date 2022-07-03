import styled from "styled-components"

export const Header = styled.header`
    border: 1px solid black;
    display: flex;
    align-items: center;

    gap: 30px;

    padding: 20px 0;
`
export const ImageBox = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    overflow: hidden;

    img {
        width: 100%;
    }
`
export const InfoBox = styled.section`
    width: 80%;
    display: flex;
    justify-content: space-between;
`

export const SocialMediaBox = styled.div`
    img {
        width: 40px;
    }
`