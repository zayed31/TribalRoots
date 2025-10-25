import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ShopsList from './pages/ShopsList';
import ShopDetail from './pages/ShopDetail';
import GujaratTextiles from './pages/GujaratTextiles';
import RajasthanPottery from './pages/RajasthanPottery';
import KeralaSpices from './pages/KeralaSpices';
import WarliArtStudio from './pages/WarliArtStudio';
import NortheastBambooCrafts from './pages/NortheastBambooCrafts';
import ShopSubmission from './pages/ShopSubmission';
import TravelRoute from './pages/TravelRoute';
import UserProfile from './pages/UserProfile';
import AdminDashboard from './pages/AdminDashboard';
import AmbassadorsList from './pages/AmbassadorsList';
import AmbassadorDetail from './pages/AmbassadorDetail';
import AboutUs from './pages/AboutUs';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const pageTransition = {
    duration: 0.3,
    ease: "easeInOut"
  };

  const pageStyle = {
    width: '100%',
    minHeight: '100vh'
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              style={pageStyle}
              className="page-transition"
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/shops"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              style={pageStyle}
              className="page-transition"
            >
              <ShopsList />
            </motion.div>
          }
        />
        <Route
          path="/shops/1"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              style={pageStyle}
              className="page-transition"
            >
              <GujaratTextiles />
            </motion.div>
          }
        />
        <Route
          path="/shops/2"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              style={pageStyle}
              className="page-transition"
            >
              <RajasthanPottery />
            </motion.div>
          }
        />
        <Route
          path="/shops/3"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              style={pageStyle}
              className="page-transition"
            >
              <KeralaSpices />
            </motion.div>
          }
        />
        <Route
          path="/shops/4"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              style={pageStyle}
              className="page-transition"
            >
              <WarliArtStudio />
            </motion.div>
          }
        />
        <Route
          path="/shops/5"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              style={pageStyle}
              className="page-transition"
            >
              <NortheastBambooCrafts />
            </motion.div>
          }
        />
        <Route
          path="/shops/:id"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              style={pageStyle}
              className="page-transition"
            >
              <ShopDetail />
            </motion.div>
          }
        />
        <Route
          path="/submit-shop"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              style={pageStyle}
              className="page-transition"
            >
              <ShopSubmission />
            </motion.div>
          }
        />
        <Route
          path="/travel-routes"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              style={pageStyle}
              className="page-transition"
            >
              <TravelRoute />
            </motion.div>
          }
        />
        <Route
          path="/profile"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              style={pageStyle}
              className="page-transition"
            >
              <UserProfile />
            </motion.div>
          }
        />
        <Route
          path="/admin"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              style={pageStyle}
              className="page-transition"
            >
              <AdminDashboard />
            </motion.div>
          }
        />
        <Route
          path="/ambassadors"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              style={pageStyle}
              className="page-transition"
            >
              <AmbassadorsList />
            </motion.div>
          }
        />
        <Route
          path="/ambassadors/:id"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              style={pageStyle}
              className="page-transition"
            >
              <AmbassadorDetail />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
              style={pageStyle}
              className="page-transition"
            >
              <AboutUs />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
