import Ana from "../../images/ana.jpg"
import email from "../../images/email.png"
import github from "../../images/github.png"
import linkdin from "../../images/linkedin.png"
import * as S from './styles'
export const Header = () => {
    return (
        <S.Header>
           <S.ImageBox>
            <img src={Ana} alt=""/>
           </S.ImageBox>
           <S.InfoBox>
            <h1>Ana Luiza Coelho</h1>
            <p>Carioca, 16 anos</p>
            <p>Estudante dev fron-end</p>
            <S.SocialMediaBox>
                <img src={email} alt=""/>
                <img src={github} alt=""/>
                <img src={linkdin} alt=""/>
            </S.SocialMediaBox>
           </S.InfoBox>
        </S.Header>
    )
}