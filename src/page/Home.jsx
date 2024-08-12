import Home from "../components/home";
import { Row, Col, Container, Button } from "react-bootstrap";

function home() {
  return (
    <>
      <Row>
        <Container>
          <Home />
        </Container>
      </Row>
    </>
  );
}

export default home;
