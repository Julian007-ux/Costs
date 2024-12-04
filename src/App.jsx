import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* Importando as páginas da aplicação */
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Project from "./components/pages/Project";

/* Conteiner que encapsula as url */
import Conteiner from "./components/layout/Conteiner";

/* Importando componentes e menu e rodapé */
import NavBar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Conteiner custumClass="min_heigth">
                <Home />
              </Conteiner>
            }
          ></Route>

          <Route
            path="/company"
            element={
              <Conteiner custumClass="min_heigth">
                <Company />
              </Conteiner>
            }
          ></Route>

          <Route
            path="/contact"
            element={
              <Conteiner custumClass="min_heigth">
                <Contact />
              </Conteiner>
            }
          ></Route>

          <Route
            path="/newproject"
            element={
              <Conteiner custumClass="min_heigth">
                <NewProject />
              </Conteiner>
            }
          ></Route>

          <Route
            path="/project"
            element={
              <Conteiner custumClass="min_heigth">
                <Project />
              </Conteiner>
            }
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
