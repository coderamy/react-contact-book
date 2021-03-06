import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/elements/Navbar';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import store from './store';

import logo from './logo.svg';
import './styles/App.scss';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <Router store={store}>
       <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route
                  exact
                  path="/contacts/edit/:id"
                  component={EditContact}
                />
              </Switch>
            </div>
          </div>
        </div>
    </Router>
    </Provider>
    
  );
}

export default App;
