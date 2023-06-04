import { Button, Card, Col } from "react-bootstrap";

const Cards = () => {
  return (
    <Col md="5" lg="4">
      <Card className="shadow h-100">
        <Card.Img variant="top" src="https://images.thewest.com.au/publication/C-5558138/5d5c53294e2f00f2b4c5621539c47275e56ccd32-16x9-x0y75w800h450.jpg">

        </Card.Img>
        <Card.Body>
          <Card.Title>
            Crypto theft is on the rise. Here's how the crimes are committed,
            and how you can protect yourself
          </Card.Title>
        </Card.Body>
        <Card.Footer className="text-end">
            <Button variant="danger">Ver noticia completa</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Cards;
