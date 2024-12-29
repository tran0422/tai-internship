import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
// import Author from "./pages/Author";
// import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./css/override.css"
import APIauthorbios from "./components/home/APIauthorbios";
import APIitemDetails from "./components/home/APIitemDetails";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        {/* <Route path="/author/" element={<Author />} /> */}
        <Route path="/author/:id" element={<APIauthorbios />} />
        {/* <Route path="/item-details" element={<ItemDetails />} /> */}
        <Route path="/item-details/:id" element={<APIitemDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
