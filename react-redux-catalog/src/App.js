import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import { Header } from './modules/HeaderModule/components/Header';

function App() {
	return (
		<Router className='App'>
			<Header />
		</Router>
	);
}

export default App;
