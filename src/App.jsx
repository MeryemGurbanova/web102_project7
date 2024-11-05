import { useState } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import CreateMate from './pages/CreateMate'

import Crewmates from './pages/Crewmates'
import EditMate from './pages/EditMate'
import Home from './pages/Home'
import Info from './pages/Info'
import NoMatch from './pages/NoMatch'
import './App.css'
function App() {

 
  //routes
  let element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/gallery',
      element: <Crewmates />,
    },
    {
      path: '/edit/:id',
      element: <EditMate />,
    },
    {
      path: '/create',
      element: <CreateMate />,
    },
    {
      path: '/info/:id',
      element: <Info />,
    },
    {
      path: '*',
      element: <NoMatch />,
    }
  ]);

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create a new crewmate</Link>
        <Link to="/gallery">Crewmate Gallery</Link>
      </nav>
      <div>{element}</div>
    </>
  )
}

export default App
