import React from 'react'
import { useRoutes } from 'react-router-dom'
import Navigation from './components/Navigation'
import ViewPizzas from './pages/ViewPizzas'
import EditPizza from './pages/EditPizza'
import CreatePizza from './pages/CreatePizza'
import PizzaDetails from './pages/PizzaDetails'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <CreatePizza title="Pizza Perfect | Build Pizza" />
    },
    {
      path: '/pizzas',
      element: <ViewPizzas title="Pizza Perfect | Saved Pizzas" />
    },
    {
      path: '/pizzas/:id',
      element: <PizzaDetails title="Pizza Perfect | View Pizza" />
    },
    {
      path: '/edit/:id',
      element: <EditPizza title="Pizza Perfect | Edit Pizza" />
    }
  ])

  return (
    <div className="app">

      <Navigation />

      {element}

    </div>
  )
}

export default App