import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import KitIndex from './pages/Kit/KitIndex'
import KitTest1 from './pages/Kit/KitTest1'
import KitTest2 from './pages/Kit/KitTest2'
import KitTest3 from './pages/Kit/KitTest3'
import KitTest4 from './pages/Kit/KitTest4'
import KitSetList from './pages/Kit/KitSetList'
import KitShoppingList from './pages/Kit/KitShoppingList'
import Home from './pages/Home'
import './index.scss'

function App() {
  return (
    <Router>
      <>
        <Link to="/kitIndex">KIT</Link>
        <Switch>
          <Route path="/kitIndex">
            <KitIndex />
          </Route>
          <Route path="/kitTest1">
            <KitTest1 />
          </Route>
          <Route path="/kitTest2">
            <KitTest2 />
          </Route>
          <Route path="/kitTest3">
            <KitTest3 />
          </Route>
          <Route path="/kitTest4">
            <KitTest4 />
          </Route>
          <Route path="/kitSetList">
            <KitSetList />
          </Route>
          <Route path="/kitShoppingList">
            <KitShoppingList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
