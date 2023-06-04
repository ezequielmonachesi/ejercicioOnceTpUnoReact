import { Card, Form, Row, Col } from "react-bootstrap";
import RowCards from "./RowCards";

const AdministradorNoticias = () => {
  return (
    <>
      <Card className="mt-4 shadow">
        <Card.Header className="pt-3">
          <Form>
            <Form.Group
              as={Row}
              className="mb-3 justify-content-center"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2" md="4">
                Search by category:
              </Form.Label>
              <Col sm="10" md="6" className="px-2 px-md-4">
                <Form.Select aria-label="Default select example">
                  <option>select by category</option>
                  <option value="technology">Technology</option>
                  <option value="business">Business</option>
                  <option value="science">Science</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>
        </Card.Header>
        <Card.Body>
          <RowCards></RowCards>
        </Card.Body>
      </Card>
    </>
  );
};

export default AdministradorNoticias;
