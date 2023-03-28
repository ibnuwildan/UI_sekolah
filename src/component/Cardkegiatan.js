import Card from "react-bootstrap/Card";

const cardkegiatan = (props) => {
  return (
    <Card className="cardkegiatan">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.judul}</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default cardkegiatan;
