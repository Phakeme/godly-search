import { HomeContainer } from "./Containers/HomeContainer";
import { Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route axact path="/" element={<HomeContainer />}></Route>
        {/* <Route axact path="/images" element={<Images />}></Route> */}
      </Routes>

      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
