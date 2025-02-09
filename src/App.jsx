import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import LoveLetter from "./pages/LoveLetter";
import PoemGen from "./pages/PoemGen";
import Header from "./components/Header";
import Copyright from "./components/Copyright";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/love-letter" element={<LoveLetter />} />
          <Route path="/poem-generator" element={<PoemGen />} />
        </Routes>
        <Copyright />
      </BrowserRouter>
    </>
  );
};

export default App;
