import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import ListView from './Components/ListView';
import GridView from './Components/GridView';
import Footer from './Components/Footer';

function App() {

  return (
    <div>
      <Navbar />
      <Banner />
      <ListView />
      <GridView />
      <Footer />
    </div>
  );
}

export default App;
