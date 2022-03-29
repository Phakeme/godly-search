import { HomeContainer } from "./Containers/HomeContainer";
import { ResultsContainer } from "./Containers/ResultsContainer";
import { Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route axact path="/" element={<HomeContainer />}></Route>
        <Route axact path="/search" element={<ResultsContainer />}></Route>
      </Routes>

      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
