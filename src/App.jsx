import Navbar from "./components/navigation/Navbar";
import AppRoutes from "./routes";
import "./index.css"
import Footer from "./components/navigation/Footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
