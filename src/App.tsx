import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './auth/Login';
import Layout from './layout';
import './App.scss';
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
