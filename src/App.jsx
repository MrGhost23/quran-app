import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Reciter from "./pages/Reciter";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Reciter />} />
          <Route path="/quran" element={<div>quran</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
