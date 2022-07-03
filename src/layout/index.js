import { Menu } from "../components/Menu"

export const Layout = ({children}) => {
    return (
        <div>
            <Menu />
            {children}
        </div>
    )
}