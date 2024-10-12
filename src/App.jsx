import { Route, Routes } from "react-router-dom";
import { CommercialsPage, HiddenGardenPage, HomePage, SoonPage } from "./pages";
import { Nav } from "./components";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/soon" element={<SoonPage />} />
        <Route path="/*" element={<SoonPage />} />
        <Route path="/commercials" element={<CommercialsPage />} />
        <Route path="/hidden_garden" element={<HiddenGardenPage />} />
      </Routes>
    </div>
  );
};

export default App;
