import 'bootstrap/dist/css/bootstrap.min.css';
import CreditQueryPage from './pages/CreditQueryPage';
import SignupPage from './pages/SignupPage';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={SignupPage}/>
          <Route path="/query" component={CreditQueryPage} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
