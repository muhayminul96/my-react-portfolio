import Navbar from "./Components/Navbar/Navbar";
import Intro from './Components/Intro/Intro'
import './App.css'
import Contract from "./Components/Contract/Contract";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Contract></Contract>
      <Footer></Footer>
    </div>
  );
}

export default App;
