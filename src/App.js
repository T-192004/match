import {BrowserRouter, Route, Switch} from 'react-router-dom'
import FirstPage from './components/FirstPage'
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={FirstPage} />
      <Route exact path="/intro" component={SecondPage} />
      <Route exact path="/intro-2" component={ThirdPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
export default App
