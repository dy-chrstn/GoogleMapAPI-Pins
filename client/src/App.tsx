import { Route, Routes } from 'react-router-dom';
import Stations from './pages/administrator/stations';
import Login from './pages/login';
import Dashboard from './pages/dashboard'
import Profile from './pages/profile';

//ClientSubPages
import TransportCooperative from './pages/Menu/SubPages/ClientSubPages/TransportCooperative';
import VehicleService from './pages/Menu/SubPages/ClientSubPages/VehicleService';
import Vehicle from './pages/Menu/SubPages/ClientSubPages/Vehicle';
import Device from './pages/Menu/SubPages/ClientSubPages/Device'; 
import Distributor from './pages/Menu/SubPages/ClientSubPages/Distributor';
import Retailer  from './pages/Menu/SubPages/ClientSubPages/Retailer';


//DriverSubPages
import DriverList from './pages/Menu/SubPages/DriverSubPages/driverList';
import TimeTracker from './pages/Menu/SubPages/DriverSubPages/timeTracker';
import Dispatch from './pages/Menu/SubPages/DriverSubPages/dispatch';
import Sales from './pages/Menu/SubPages/DriverSubPages/sales';
import DriverTransactionHistory from './pages/Menu/SubPages/DriverSubPages/transactionHistory';
import DriverMessages from './pages/Menu/SubPages/DriverSubPages/messages';

//RiderList
import RiderList from './pages/Menu/SubPages/RiderSubPages/riderList';
import Wallet from './pages/Menu/SubPages/RiderSubPages/wallet';
import RideHistory from './pages/Menu/SubPages/RiderSubPages/rideHistory';
import RiderMessages from './pages/Menu/SubPages/RiderSubPages/messages';
import SummaryReport from './pages/Menu/SubPages/RiderSubPages/SummaryReport';

//Distributor Retailer
import DistributorCashIn from './pages/Menu/SubPages/DistributorSubPages/cashIn';
import DistributorTransactionHistory from './pages/Menu/SubPages/DistributorSubPages/transactionHistory';
import DistributorMessages from './pages/Menu/SubPages/DistributorSubPages/messages';

// Accounting System
import AccountManagement from './pages/Menu/SubPages/AccountingSubPages/accountManagement';
import FareIncome from './pages/Menu/SubPages/AccountingSubPages/fareIncome';
import AccountingCashIncome from './pages/Menu/SubPages/AccountingSubPages/cashIncome';
import LoadSales from './pages/Menu/SubPages/AccountingSubPages/loadSales';
import CardSales from './pages/Menu/SubPages/AccountingSubPages/cardSales';


import AdminController from './pages/Menu/adminController';
import AdminActivity from './pages/Menu/adminActivity';
import PrivacyPolicy from './pages/Menu/privacyPolicy';
import EmailTemplate from './pages/Menu/emailTemplate';
import Support from './pages/Menu/support';


function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<Dashboard />} /> */}
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/station/stations' element={<Stations />} />
      <Route path='/profile' element={<Profile />} />


      {/* ClientSubPages */}
      <Route path='/Client/TransportCooperative' element={<TransportCooperative />} />
      <Route path='/Client/VehicleService' element={<VehicleService />} />
      <Route path='/Client/Vehicle' element={<Vehicle />} />
      <Route path='/Client/Device' element={<Device />} />
      <Route path='/Client/Distributor' element={<Distributor />} />
      <Route path='/Client/Retailer' element={<Retailer />} />
     

      {/* DriverSubPages */}
      <Route path='/Driver/DriverList' element={<DriverList />} />
      <Route path='/Driver/TimeTracker' element={<TimeTracker/>} />
      <Route path='/Driver/Dispatch' element={<Dispatch />} />
      <Route path='/Driver/Sales' element={<Sales />} />
      <Route path='/Driver/DriverTransactionHistory' element={<DriverTransactionHistory />} />
      <Route path='/Driver/DriverMessages' element={<DriverMessages />} />
      
      {/* RiderSubPages */}
      <Route path='/Rider/RiderList' element={<RiderList />} />
      <Route path='/Rider/Wallet' element={<Wallet />} />
      <Route path='/Rider/RideHistory' element={<RideHistory />} />
      <Route path='/Rider/RiderMessages' element={<RiderMessages />} />
      <Route path='/Menu/SubPages/RiderSubPages/SummaryReport' element={<SummaryReport />} />


      {/* DistributorSubPages */}
      <Route path='/DistributorRetailer/CashIn' element={<DistributorCashIn />} />
      <Route path='/DistributorRetailer/DistributorTransactionHistory' element={<DistributorTransactionHistory />} />
      <Route path='/DistributorRetailer/DistributorMessages' element={<DistributorMessages />} />
      
      {/* AccountingSystemSubPages */}
      <Route path='/AccountingSystem/AccountManagement' element={<AccountManagement />} />
      <Route path='/AccountingSystem/FareIncome' element={<FareIncome />} />
      <Route path='/AccountingSystem/CashIncome' element={<AccountingCashIncome/>} />
      <Route path='/AccountingSystem/LoadSales' element={<LoadSales/>} />
      <Route path='/AccountingSystem/CardSales' element={<CardSales/>} />  


      <Route path='/EmailTemplate' element={<EmailTemplate/>} />  
      <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>} /> 
      <Route path='/AdminController' element={<AdminController/>} /> 
      <Route path='/AdminActivity' element={<AdminActivity/>} /> 
      <Route path='/Support' element={<Support/>} /> 

      
    </Routes>
  );
}

export default App;
