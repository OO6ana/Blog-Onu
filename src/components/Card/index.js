import * as S from "./styles"

export const Card = ({
    image,
    textAlternative,
    title,
    url
}) => {
    return (
        <S.Card>
            <a href={url}  target="_blank" rel="noreferrer">
                <S.ImageBox>
                    <img src={image} alt={textAlternative}/>
                </S.ImageBox>

                <p>{title}</p>
            </a>
        </S.Card>
    )
}