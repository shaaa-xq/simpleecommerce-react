import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import SignInForm from './components/Login.jsx'
import Card from './components/Card.jsx'
import AddItem from './components/buttons/AddItem.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <SignInForm /> */}
    <Card />
    {/* <AddItem /> */}
    {/* <App /> */}
  </StrictMode>,
)
