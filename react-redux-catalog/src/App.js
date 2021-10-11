import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import { store } from './store/store';
import { Content } from './modules/content/components/Content';
import { Header } from './modules/header/components/Header';
import { CartList } from './modules/cartPage/components/CartList';


function App() {
	return (
		<Provider store={store}>
			<Router className='App'>
				<Header />
				<Route path='/' exact component={Content} />
				<Route path='/cart' component={CartList} />
			</Router>
		</Provider>
	);
}

export default App;
