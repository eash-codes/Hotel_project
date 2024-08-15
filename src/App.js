import './App.css';



// Components
import Header from './components/Header';
import Footer from './components/Footer';

//Pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
     <div className="content">
      <Home />
     </div>
     <Footer />
    </div>
  );
}

export default App;
