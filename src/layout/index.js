import { Menu } from "../components/Menu"

import * as S from "./styles"

export const Layout = ({children}) => {
    return (
        <div>
            <Menu />
            <S.Wrapper>
                {children}
            </S.Wrapper>
        </div>
    )
}