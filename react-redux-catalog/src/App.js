import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import { Content } from './modules/ContentModule/components/Content';
import { Header } from './modules/HeaderModule/components/Header';

function App() {
	return (
		<Router className='App'>
			<Header />
			<Content />
		</Router>
	);
}

export default App;
