import "react-toastify/dist/ReactToastify.css";
import {ToastContainer } from "react-toastify";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testimonails from "./components/Testimonails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";





const App = () => {


  return (
    <div className="w-full overflow-hidden">
      <ToastContainer position="bottom-right" />
      <Header />
      <About />
      <Projects />
      <Testimonails />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
