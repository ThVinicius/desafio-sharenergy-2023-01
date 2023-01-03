import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import ResetCSS from './assets/css/Reset'
import GlobalCSS from './assets/css/Global'
import { TokenProvider } from './context/useToken'
import Header from './components/header/Header'
import Login from './pages/login/Index'
import Users from './pages/users/Index'
import Cats from './pages/cats/Index'
import Dogs from './pages/dogs/Index'

const App: FC = () => {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalCSS />
      <ToastContainer />
      <TokenProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/dogs" element={<Dogs />} />
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  )
}

export default App
