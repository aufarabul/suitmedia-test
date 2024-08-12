import { Col, Card, Image, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import * as image from "../assets/img";

const card = ({ article }) => {
  const formatDate = (dateString) => {
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };
  return (
    <Col className="">
      <Card
        className="shadow p-3 mb-5 rounded "
        fluid
        style={{
          width: "18rem",
          backgroundColor: "white",
          color: "black",
          height: "300px",
          textDecoration: "none",
        }}
      >
        <Card.Img
          className="m-0"
          variant="top"
          src={image.formula}
          fluid
          //   style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Text style={{ color: "grey" }}>
            {formatDate(article.date)}
          </Card.Text>
          <Card.Title>{article.articleTitle}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

card.propTypes = {
  film: PropTypes.object,
};

export default card;
