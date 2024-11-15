import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import App from './App';
import GlobalStyle from './theme/globalStyles';

const DOM_ROOT = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(DOM_ROOT).render(
	<Provider store={store}>
		<GlobalStyle />
		<Router>
			<App />
		</Router>
	</Provider>
)