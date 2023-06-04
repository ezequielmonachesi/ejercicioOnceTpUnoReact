import {  Row } from "react-bootstrap";
import Cards from "./Cards";
const RowCards = ({noticiasFiltradas}) => {
  return (
      <Row className="gy-3">
        {noticiasFiltradas.map(objetoNoticia => <Cards objetoNoticia={objetoNoticia}></Cards> )}
      </Row>
  );
};

export default RowCards;
