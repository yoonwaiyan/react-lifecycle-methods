import React from 'react';
import Content from './Content';
import Footer from './Footer';

const App = () => {
	return (
		<div className="App">
			<div className="PageTitle">
				<h1 className="title">React Lifecycle Methods</h1>
			</div>

			<Content />

			<Footer />
		</div>
	);
};

export default App;
