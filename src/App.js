import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CampaignForm from './components/CampaignDetails/CampaignForm'
import Budget from './components/Targets/Budget';
import Timeline from './components/Timeline';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <Switch>
                <Route path="/" component={Timeline} exact />
                <Route path="/campaign" component={CampaignForm} />
                <Route path="/budget" component={Budget} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch> 
    </div>
  );
}

export default App;
