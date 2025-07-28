import './App.css';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/home';
import { Testare } from './pages/Testare';
import { Documentare } from './pages/documentare';
import { Help } from './pages/help';
import { About } from './pages/contact';
import { Layout } from './components/Layout';
import { AnimatePresence, motion } from 'framer-motion';

// Componenta cu animatii de intrare/iesire
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}      // Starea initiala: invizibil si putin mai jos
      animate={{ opacity: 1, y: 0 }}       // Animatia la intrare: vizibil si in pozitia normala
      exit={{ opacity: 0, y: -30 }}        // Animatia la iesire: invizibil si se misca in sus
      transition={{ duration: 0.4 }}       // Durata animatiei: 0.4 secunde
    >
      {children}
    </motion.div>
  );
}


// Componentă care gestionează rutele și le face animate
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait"> {/* Asigura animatia cand ruta se schimba */}
      <Routes location={location} key={location.pathname}> {/* Seteaza ruta activa */}
        <Route element={<Layout />}> {/* Layout comun pentru toate rutele */}
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/testare"
            element={
              <PageWrapper>
                <Testare />
              </PageWrapper>
            }
          />
          <Route
            path="/documentare"
            element={
              <PageWrapper>
                <Documentare />
              </PageWrapper>
            }
          />
          <Route
            path="/help"
            element={
              <PageWrapper>
                <Help />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}


// Componenta principală a aplicației
function App() {
  return (
    <Router>
      <AnimatedRoutes /> {/* Încarcă rutele animate */}
    </Router>
  );
}

export default App;