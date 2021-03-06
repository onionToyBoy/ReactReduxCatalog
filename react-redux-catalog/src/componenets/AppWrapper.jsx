import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Content } from '../modules/content/components/Content';
import { Header } from '../modules/header/components/Header';
import { CartList } from '../modules/cartPage/components/CartList';
import { Spinner } from './Spinner';
import {
	selectCurrentPage,
	selectIsLoading,
} from '../store/beers/selectors';
import { selectFormStatus } from '../store/header/selectors';
import { RegistrationForm } from '../modules/header/components/RegistrationForm';
import { PATH_TO_CART } from '../constants/constants';

export const AppWrapper = () => {
	const isLoading = useSelector(selectIsLoading);
	const formStatus = useSelector(selectFormStatus);
	const currentPage = useSelector(selectCurrentPage);

	return (
		<Router className='App'>
			<Redirect from='/' to={`/page${currentPage}`} />
			<Header />
			<Route path={`/page${currentPage}`} component={Content} />
			<Route path={PATH_TO_CART} component={CartList} />
			{formStatus && <RegistrationForm />}
			{isLoading && <Spinner />}
		</Router>
	);
};
