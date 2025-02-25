import './App.css';
import './index.css';

import Navbar from './components/NavBar';
import { Routes, Route } from 'react-router-dom'; // Ensure you're using Routes instead of Route directly
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import StartPage from './pages/StartPage';
import Razboi from './pages/Razboi';
import Romanizarea from './pages/Romanizarea';
import Mostenirea from './pages/Mostenirea';
import Rebus from './pages/Rebus';


import TestRomanziarea from './pages/TestRomanizarea';
import TestRazboi from './pages/TestRazboi';
import TestMostenirea from './pages/TestMostenirea';
import Elemente from './pages/Elemente';



function RedirectToHash() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.hash) {
      navigate(`#${location.pathname}`, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

function App() {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/razboaiele_daco-romane" element={<Razboi />} />
        <Route path="/romanizarea" element={<Romanizarea />} />
        <Route path="/mostenirea" element={<Mostenirea />} />
        <Route path="/elemente_etnogeneza" element={<Elemente />} />
        
        <Route path="/test-romanizarea" element={<TestRomanziarea />} />
        <Route path="/test-razboi" element={<TestRazboi />} />
        <Route path="/test-mostenirea" element={<TestMostenirea />} />
        <Route path="/rebus" element={<Rebus />} />

        <Route path="*" element={<RedirectToHash />} />
      </Routes>
    </div>
  );
}

export default App;
