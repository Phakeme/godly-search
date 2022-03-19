import Container from "@material-ui/core/Container";
import { HomeContainer } from "./Containers/HomeContainer";
import { Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <Routes>
          <Route axact path="/" element={<HomeContainer />}></Route>
          {/* <Route axact path="/images" element={<Images />}></Route> */}
        </Routes>
      </Container>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
