import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Col, Form } from "react-bootstrap";
import { CategoryList } from "./CategoryList";
import "./Categories.css";

export const CategoryForm = () => {

    const [category, update] = useState({
        id: 0,
        label: "",
    })

    const navigate = useNavigate();

    const handleSaveButtonClick = (e) => {
        e.preventDefault();
        //create API object
        const categoryToSendToAPI = {
            id: category.id,
            label: category.label,
        };

        return fetch(`http://localhost:8088/categories`, {
            method: "POST",
            headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryToSendToAPI),
    })
        .then((response) => response.json())
        .then(() => {
            navigate("/create-category");
      });
    };

    return (
        <>
        <Container>
                <Col className="CategoryListLeft">
                    {CategoryList()}
                </Col>
            <Form className="categoryForm">
                <Col className="CategoryFormRight">
                    <Form.Group controlId="formCategory">
                        <Form.Label>
                            Create Your Own Category!
                        </Form.Label>
                        <Form.Control type="text" placeholder="Create Category Label" value={category.label} onChange={(evt) => {
                            const copy = {...category};
                            copy.category = evt.target.value;
                            update(copy)
                        }}/>
                        <Button variant="dark" type="submit" className="submit" onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}>Submit</Button>
                    </Form.Group>
                </Col>
            </Form>
        </Container>
        </>

    )

    }


