import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthProvider from './contexts/authContext'
import { NavbarLayout } from './pages/layouts/NavbarLayout'
import Home from './pages/Home'
import { AuthPage } from './pages/Auth/Auth'

function App() {

  return (
    <div className="bg-base-100 text-zinc-950 h-screen">
      <AuthProvider>
        <Routes> 
          <Route path='/' element={<NavbarLayout />} >
            <Route index element={<Home />} />
          </Route>
          <Route path='/auth' element={<AuthPage/>} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </AuthProvider> 
    </div>)
}

export default App
