import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthProvider from './contexts/authContext'

function App() {

  return (
    <AuthProvider>
      <Routes> 
          <Route path='/' ></Route>
      </Routes>
    </AuthProvider> )
}

export default App
