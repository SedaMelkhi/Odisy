import { Route, Routes } from "react-router-dom";
import {
  CommercialsPage,
  HomePage,
  SoonPage,
  ContactsPage,
  HiddenGardenPage,
} from "./pages";

import { Nav } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { HomePageService } from "./services";
import { setBg } from "./redux/bgSlice/bgSlice";
import { HiddenGarden } from "./pages/commercialsPage/hiddenGarden";

const App = () => {
  const dispatch = useDispatch();
  const pinCode = useSelector((state) => state.pinCode.pinCode);
  console.log(pinCode);

  useEffect(() => {
    const data = HomePageService.getMainVideo();
    data.then((res) => {
      res && res.video_background && dispatch(setBg(res.video_background));
    });
  }, []);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/soon" element={<SoonPage />} />
        <Route path="/*" element={<SoonPage />} />
        <Route path="/commercials" element={<CommercialsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        {pinCode ? (
          <Route path="/hidden_garden" element={<HiddenGardenPage />} />
        ) : (
          <Route
            path="/hidden_garden"
            element={<HiddenGarden isOpen={true} close={"none"} />}
          />
        )}
      </Routes>
    </div>
  );
};

export default App;
