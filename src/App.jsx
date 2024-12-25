import { Route, Routes } from "react-router";
import "./App.css";
import GenerateBarCode from "./page/generateBarcode";
import BarcodeScanner from "./page/scanner";

function App() {
  return (
      <Routes>
        <Route index element={<BarcodeScanner />} />
        <Route path="about" element={<GenerateBarCode />} />
{/* 
        <Route element={<AuthLayout  />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="concerts">
          <Route index element={<ConcertsHome />} />
          <Route path=":city" element={<City />} />
          <Route path="trending" element={<Trending />} />
        </Route> */}
      </Routes>
  );
}

export default App;
