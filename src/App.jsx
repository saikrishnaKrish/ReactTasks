import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TasksComponent from './components/CRUD TASKS'
import UserDetails from './components/UserDetails'
import AppRoutes from './Routes/AppRoutes'

function App() {

  return (
    <>
        <AppRoutes/>
    </>
  )
}

export default App
