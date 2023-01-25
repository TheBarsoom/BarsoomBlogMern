import { useDispatch } from "react-redux";
import "./App.css";
import MainRoute from "./routes/MainRoute";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

function App() {


  return (
    <>
     
    <MainRoute />
    <div className="container mx-auto">
    <ToastContainer position='bottom-right' />
    </div>
  </>
  )
}

export default App
