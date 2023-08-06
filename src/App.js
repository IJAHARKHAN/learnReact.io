// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";

// let myName = "Md Ijaharuddin Khan"

function AppMoonFunction() {
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About" homeText="Home"/> */}
      <Navbar title="TextUtilsApp"/>
      <TextForm  title="Utilities"/>
      <About/>
    </>
  );
}

export default AppMoonFunction;
