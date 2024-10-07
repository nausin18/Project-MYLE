import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import './App.css';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;