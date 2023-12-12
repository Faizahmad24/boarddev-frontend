import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import DashboardPage from './pages/dashboard'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/dashboard" element={<DashboardPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
