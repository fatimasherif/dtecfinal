import logo from "./logo.svg";
import "./App.css";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
