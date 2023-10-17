import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginScreen from './pages/Login';
import Layout from './layout';

import './App.css';
import './assets/styles/main.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path={'*'} element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
