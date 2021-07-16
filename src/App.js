import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import KitIndex from './pages/Kit/KitIndex'
import KitTest from './pages/Kit/KitTest'
import KitSetList from './pages/Kit/KitSetList'
import KitShoppingList from './pages/Kit/KitShoppingList'
import Home from './pages/Home'
import './index.scss'

function App() {
  return (
    <Router>
      <>
        <Link to="/kitIndex">訂閱首頁/</Link>
        <Link to="/kitTest1">測驗1/</Link>
        <Link to="/kitSetList">訂閱組合/</Link>
        <Link to="/kitShoppingList">組合訂單</Link>
        <Switch>
          <Route path="/kitIndex" component={KitIndex}>
            {/* <KitIndex /> */}
          </Route>
          <Route path="/kitTest1">
            <KitTest />
          </Route>
          <Route path="/kitSetList">
            <KitSetList />
          </Route>
          <Route path="/kitShoppingList" component={KitShoppingList}>
            {/* <KitShoppingList /> */}
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
