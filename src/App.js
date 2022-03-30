import { HomeContainer } from "./Containers/HomeContainer";
import { ResultsContainer } from "./Containers/ResultsContainer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route axact path="/" element={<HomeContainer />}></Route>
        <Route axact path="/search" element={<ResultsContainer />}></Route>
        <Route axact path="/images" element={<ResultsContainer />}></Route>
        <Route axact path="/videos" element={<ResultsContainer />}></Route>
        <Route axact path="/news" element={<ResultsContainer />}></Route>
        <Route path="*" element={<HomeContainer />}></Route>
      </Routes>
    </>
  );
}

export default App;
