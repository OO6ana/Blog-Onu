import * as S from './styles'

import { Link } from "react-router-dom"

export const Menu = () => {
    return (
        <S.NavBox>
            <S.Menu>
                <Link to="/">Blog</Link>
                <Link to="onu">ONU</Link>
            </S.Menu>
        </S.NavBox>
    )
}