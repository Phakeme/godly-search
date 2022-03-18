import Navbar from "./components/Navbar";
import Routes from "./components/Routes.js";
// import Footer from "./components/Navbar";
import Container from "@mui/material/Container";

function App() {
  return (
    <Container maxWidth="md">
      <Navbar></Navbar>
      <Routes></Routes>
      {/* <Footer></Footer> */}
    </Container>
  );
}

export default App;
