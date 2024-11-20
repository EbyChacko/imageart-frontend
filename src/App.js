import './App.css';
import Home from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';
import { NotFound } from "./components/NotFound";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;