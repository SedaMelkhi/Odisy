import { Route, Routes } from "react-router-dom";
import { FeaturesPage, HomePage, SoonPage } from "./pages";
import { Nav } from "./components";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/soon" element={<SoonPage />} />
        <Route path="/features" element={<FeaturesPage />} />
      </Routes>
    </div>
  );
};

export default App;
