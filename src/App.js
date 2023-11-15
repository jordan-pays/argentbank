import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Router from './routes/Router';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import { store } from './stores'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>

    </Provider>
  );
}

export default App;
