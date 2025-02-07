import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import LoveLetter from "./pages/LoveLetter";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/love-letter" element={<LoveLetter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
