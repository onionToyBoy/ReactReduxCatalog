import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import { store } from './store/store';
import { AppWrapper } from './componenets/AppWrapper';

function App() {
	return (
		<Provider store={store}>
			<AppWrapper />
		</Provider>
	);
}

export default App;
