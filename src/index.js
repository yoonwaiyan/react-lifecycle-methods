import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { Container } from 'bloomer';

import App from './components/App';
import Example from './components/ExampleParent';

import 'bulma/css/bulma.css';
import './styles.css';

const MainApp = () => (
	<HashRouter>
		<Container style={{ marginTop: '15px' }}>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/example" component={Example} />
			</Switch>
		</Container>
	</HashRouter>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<MainApp />, rootElement);
