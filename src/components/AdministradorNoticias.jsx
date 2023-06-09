import { Card, Form, Row, Col } from "react-bootstrap";
import RowCards from "./RowCards";
import { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";

const AdministradorNoticias = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [noticias, setNoticias] = useState([]);
  const [showSnipper, setShowSnipper] = useState();

  useEffect(() => {
    if (categoriaSeleccionada) {
      consultarAPI(categoriaSeleccionada);
    }
  }, [categoriaSeleccionada]);

  const consultarAPI = async (categoriaSeleccionada) => {
    try {
      setShowSnipper(true);
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_240135ddcbf2e44d1a628028e9bb6a82d03a4&category=${categoriaSeleccionada}&language=es&country=ar`
      );
      const informacion = await respuesta.json();
      setNoticias(await informacion.results);
      setShowSnipper(false);
    } catch (error) {
      console.log(error);
    }
  };

  const showComponent = showSnipper ? (
    <div className="d-flex justify-content-center">
      <PuffLoader color="#36d7b7" />
    </div>
  ) : (
    <RowCards noticiasFiltradas={noticias}></RowCards>
  );

  return (
    <>
      <Card className="mt-4 shadow">
        <Card.Header className="pt-3">
          <Form>
            <Form.Group
              as={Row}
              className="mb-3 justify-content-start"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2" md="4">
                Buscar una categoría:
              </Form.Label>
              <Col sm="10" md="6" className="px-2 px-md-4">
                <Form.Select
                  aria-label="categorías"
                  onChange={(e) => {
                    setCategoriaSeleccionada(e.target.value);
                  }}
                >
                  <option value="top">Selecciona una categoría</option>
                  <option value="science">Ciencia</option>
                  <option value="sports">Deportes</option>
                  <option value="business">Negocios</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>
        </Card.Header>
        <Card.Body>{showComponent}</Card.Body>
      </Card>
    </>
  );
};

export default AdministradorNoticias;
