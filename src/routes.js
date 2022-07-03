import { Routes, Route } from "react-router-dom"

// Pages
import { HomePage } from './pages/HomePage'
import { OnuPage } from './pages/OnuPage'

export const MainRouter = () => {
  return (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="onu" element={<OnuPage />} />
          </Routes>
    )
}