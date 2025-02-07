import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import LoveLetter from "./pages/LoveLetter";
import PoemGen from "./pages/PoemGen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/love-letter" element={<LoveLetter />} />
          <Route path="/poem-generator" element={<PoemGen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
