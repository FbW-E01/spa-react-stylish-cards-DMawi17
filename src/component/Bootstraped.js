import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/card";

const Bootstraped = ({ style }) => {
    const [, last] = style;
    return (
        <Card style={{ ...last }} border="info" bg="info" mb-2>
            <Card.Body>
                <Card.Img
                    variant="top"
                    src="http://placekitten.com/g/230/145"
                />
                <Card.Text>I'm from a bootstrap card</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Bootstraped;
