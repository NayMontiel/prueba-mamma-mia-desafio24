import NavBar from "./components/NavBar";
import 'animate.css';
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";


function App() {
  
  return (
    <>
        <NavBar />
        
        <main className="container-fluid text-center mt-5">
          <Outlet />
        </main>
        
        <Footer />
    </>
  );
}

export default App;
