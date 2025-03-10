import Navbar from "./components/navigation/Navbar";
import AppRoutes from "./Routes";
import "./index.css"
import Footer from "./components/navigation/Footer";
import WhatsAppFloat from "./components/home/FloatingWA";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppRoutes/>
      <WhatsAppFloat/>
      <Footer/>
    </div>
  );
}

export default App;
