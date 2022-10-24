// import { useNavigate } from "react-router-dom";
import { Container, Col, Button } from "react-bootstrap";

export const Category = ({ id, label }) => {
  // const navigate = useNavigate();
  return (
    <>
      <div className="category">
        <Container className="mb-5">
          <Col className="category__col">
            <p>{label}</p>
          </Col>
          {/* will require navigation */}
          <Button variant="dark" className="category_edit">Edit</Button>
          <Button variant="dark" className="back__button">Delete</Button>
        </Container>
      </div>
     
    </>
  );
};
