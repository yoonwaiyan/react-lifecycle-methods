import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Container } from 'bloomer';

import App from './components/App';
import Example from './components/ExampleParent';

import 'bulma/css/bulma.css';
import './styles.css';

const MainApp = () => (
  <BrowserRouter>
    <Container style={{ marginTop: '15px' }}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/example" component={Example} />
      </Switch>
    </Container>
  </BrowserRouter>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<MainApp />, rootElement);
