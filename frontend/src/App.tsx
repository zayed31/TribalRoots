import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShopsList from './pages/ShopsList';
import ShopDetail from './pages/ShopDetail';
import ShopSubmission from './pages/ShopSubmission';
import TravelRoute from './pages/TravelRoute';
import UserProfile from './pages/UserProfile';
import AdminDashboard from './pages/AdminDashboard';
import AmbassadorsList from './pages/AmbassadorsList';
import AmbassadorDetail from './pages/AmbassadorDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<ShopsList />} />
        <Route path="/shops/:id" element={<ShopDetail />} />
        <Route path="/submit-shop" element={<ShopSubmission />} />
        <Route path="/travel-routes" element={<TravelRoute />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/ambassadors" element={<AmbassadorsList />} />
        <Route path="/ambassadors/:id" element={<AmbassadorDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
