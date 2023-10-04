import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/create' element={<Create />} />
        <Route exact path='/' element={<Read />} />
        <Route path='/update' element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
