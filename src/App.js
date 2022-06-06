import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home";
import {Routes,Route} from "react-router-dom";
import Product from "../src/components/Products/Product/Product";
import Products from "../src/components/Products/Products"
import Login from "./pages/Login"

function App() {
  return (
    <div className="App">
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        </div>
  );
}

export default App;
