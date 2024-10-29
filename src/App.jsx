import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Main from "./components/Main";
import Footer from "./layout/Footer";
import CitiesListPage from "./pages/CitiesListPage";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <main>
          <Main />
          <Router>
            <Routes>
              <Route path="/" element={<CitiesListPage />} />
            </Routes>
          </Router>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
