import Homepage from './pages/Home'
import Rootlayout from './layouts/Rootlayout';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Rootlayout/>}>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/home" element={<Homepage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
