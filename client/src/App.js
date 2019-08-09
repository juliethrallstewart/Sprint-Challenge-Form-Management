import React from 'react';
import './App.css';
import Form from './Form.js';

class App extends React.Component {
	render () {
		return (
			<div className="App">
				<h1>User Form</h1>
				<Form />
			</div>
		);
	}
}

export default App;
