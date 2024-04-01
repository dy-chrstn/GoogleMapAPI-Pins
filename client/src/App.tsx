import { Route, Routes } from 'react-router-dom';
import Stations from './pages/administrator/stations';
import Login from './pages/login';
import Dashboard from './pages/dashboard'
import TransportCooperation from './pages/clientSubmenu/TransportCooperation';



function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<Dashboard />} /> */}
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/TransportCooperation' element={<TransportCooperation />} />
      <Route path='/stations' element={<Stations />} />

    </Routes>
  );
}

export default App;
