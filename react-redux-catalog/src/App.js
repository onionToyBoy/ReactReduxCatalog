import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import { store } from './store/store';
import { Content } from './modules/ContentModule/components/Content';
import { Header } from './modules/HeaderModule/components/Header';

function App() {
	return (
		<Provider store={store}>
			<Router className='App'>
				<Header />
				<Content />
			</Router>
		</Provider>
	);
}

export default App;
