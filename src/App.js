import { BrowserRouter, Route , Routes} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";



function App() {

  
  return (
       
    <BrowserRouter>
    
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
    
    </Routes>
    <Sidebar/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
