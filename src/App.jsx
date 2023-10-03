import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Reciters from "./pages/Reciters";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/:id" element={<Reciters />} />
            <Route path="/quran" element={<div>quran</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
