import './styles/App.css';
import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom'

import Login from './views/Login/Login'
import Main from './layout'

class App extends React.Component{
  render(){
    return (
      <div className='App'>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Main} />
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}
export default App;
