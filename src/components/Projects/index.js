import { Card } from "../Card"

import * as S from "./styles"

import { myProjects } from "./data-projects/data-projects"

export const Projects = () => {
    return (
        <S.Container>
            <h4>Alguns projetos...</h4>
            <S.CardBox>
                {myProjects.map((project) => <Card key={project.name} image={project.image} title={project.name} url={project.url} textAlternative={project.name}/>)}
            </S.CardBox>
        </S.Container>
    )
}