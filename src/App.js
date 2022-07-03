import { BrowserRouter } from "react-router-dom"

import { GlobalStyle } from "./styles/global"
import { MainRouter } from "./routes"
import { Layout } from "./layout"

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <MainRouter /> 
      </Layout> 
    </BrowserRouter>
  )
}

