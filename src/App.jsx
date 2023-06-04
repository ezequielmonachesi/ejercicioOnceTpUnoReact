import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AdministradorNoticias from "./components/AdministradorNoticias";

function App() {
  return (
    <>
      <Container className="py-3 px-md-5 main">
        <h1 className="mt-4 text-center">Breaking news</h1>
        <AdministradorNoticias></AdministradorNoticias>
      </Container>
      <footer className="py-4 bg-black text-light text-center">
        &copy; Todos los derechos reservados 2023.
      </footer>
    </>
  );
}

export default App;
