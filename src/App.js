import './App.css';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { NavigationBar } from './components/NavigationBar';


function App() {
  return (
    <div className="App">
        <NavigationBar />
        <Banner />
        <Footer />
    </div>
  );
}

export default App;
