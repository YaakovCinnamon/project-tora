import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import RegistrationForm from './components/RegistrationForm';
import HomePage from './components/HomePage';
import RouteSelection from './components/RouteSelection';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/select-route" element={<RouteSelection />} />
      </Routes>
    </Router>
  );
}


export default App;
