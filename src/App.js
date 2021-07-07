import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import KitIndex from './pages/Kit/KitIndex'
import KitTest from './pages/Kit/KitTest1'
import KitSetList from './pages/kit/kitSetList'
import KitShoppingList from './pages/kit/kitShoppingList'
import './index.scss'

function App() {
  return (
    <Router>
      <>
        <Link to="/kitIndex">KIT</Link>
        <Switch>
          <route path="/kitIndex">
            <KitIndex />
          </route>
        </Switch>
      </>
    </Router>
  )
}

export default App
