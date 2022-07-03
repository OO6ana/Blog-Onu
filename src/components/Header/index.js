import Ana from "../../images/ana.jpg"
import * as S from './styles'
export const Header = () => {
    return (
        <S.Header>
            <S.ImageBox>
                <img src={Ana} alt="foto minha" />
            </S.ImageBox>
            <S.InfoBox>
                <div>
                    <h2>Ana Luiza Coelho</h2>
                    <p>Carioca, 16 anos</p>
                    <p>Estudante de Desenvolvimento Front-end</p>
                </div>

                <S.SocialMediaBox>
                <img src="https://cdn-icons.flaticon.com/png/512/3291/premium/3291695.png?token=exp=1656876955~hmac=fa0ad10e3b083ffc5a0c095b02f70605" alt="Github" />
            </S.SocialMediaBox>
                
            </S.InfoBox>
            
        </S.Header>
    )
}