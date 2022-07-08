import { git } from "../../images/git.png"
import { github } from "../../images/github.png"
import { html } from "../../images/html.png"
import { css } from "../../images/css-logo.png"
import { js } from "../../images/javascript.png"
import { react } from "../../images/react-logo.png"
import { Card } from "../Card"
import * as S from "./styles"
import { myProjects } from "./data-projects/data-projects"

export const Projects = () => {
    return (
        <S.Container>
            <h4>Alguns projetos...</h4>
            <S.InfoBox>
                <h4>Algumas tecnologias que sei / estudo :</h4>
                <S.ImgBox>
                    <img src={git} alt=""/>
                    <img src={github} alt=""/>
                    <img src={html} alt=""/>
                    <img src={css} alt=""/>
                    <img src={js} alt=""/>
                    <img src={react} alt=""/>
                </S.ImgBox>
            </S.InfoBox>
            <S.CardBox>
                {myProjects.map((project) => <Card key={project.name} image={project.image} title={project.name} url={project.url} textAlternative={project.name}/>)}
            </S.CardBox>
        </S.Container>
    )
}