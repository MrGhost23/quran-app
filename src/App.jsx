import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Reciter from "./pages/Reciter";
import Layout from "./components/Layout";
import Hadith from "./pages/Hadith";
import Pray from "./pages/Pray";
import Hisn from "./pages/Hisn";
import Favorites from "./pages/Favorites";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/:id" element={<Reciter />} />
            <Route path="/hadith" element={<Hadith />} />
            <Route path="/pray" element={<Pray />} />
            <Route path="/hisn" element={<Hisn />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
