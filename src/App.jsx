import "./styles/variables.css";
import "./index.css";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./sections/Banner/Banner";
import TrainingTypes from "./sections/TrainingTypes/TrainingTypes";
import Calculate from "./sections/Calculate/Calculate";
import Motivation from './sections/Motivation/Motivation';
import JoinUs from './sections/JoinUs/JoinUs';
import Location from './sections/Location/Location';
import Family from './sections/Family/Family';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Banner />
        <Motivation />
        <TrainingTypes />
        <JoinUs />
        <Location />
        <Family />
        <Calculate />
      </main>
      <Footer />
    </div>
  );
}

export default App;