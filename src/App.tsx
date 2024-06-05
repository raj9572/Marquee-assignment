import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bookshelf from "./pages/BookshelfList";

function App() {
  return (
    <>
      <Navbar/>

      <div className="max-w-6xl mx-auto my-5">
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/bookshelf" element={<Bookshelf/>} ></Route>
        
        </Routes>

      </div>
      
    </>
  );
}

export default App;
