import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Content } from '../modules/content/components/Content';
import { Header } from '../modules/header/components/Header';
import { CartList } from '../modules/cartPage/components/CartList';
import { Spinner } from './Spinner';
import { selectIsLoading } from '../modules/content/selectors';

export const AppWrapper = () => {
	const isLoading = useSelector(selectIsLoading);

	return (
		<Router className='App'>
			<Header />
			<Route path='/' exact component={Content} />
			<Route path='/cart' component={CartList} />
			{isLoading && <Spinner />}
		</Router>
	);
};
