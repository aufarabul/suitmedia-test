import { Row, Col, Container, Image } from "react-bootstrap";
import * as image from "../assets/img";
import IdeasList from "./list";
import "./style.css"; // Pastikan Anda memiliki file CSS untuk styling

function Home() {
  return (
    <>
      <Row className="position-relative mb-5">
        <div className="image-container">
          <Image
            src={image.formula}
            className="diagonal-cut"
            style={{ height: "400px" }}
          />
          <div className="centered-text">
            <h2>Ideas</h2>
          </div>
          <div className="centered-text2">
            <p>Where all our great things begin</p>
          </div>
        </div>
      </Row>
      <IdeasList />
    </>
  );
}

export default Home;
