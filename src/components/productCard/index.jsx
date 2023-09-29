import React from "react";
import { Button, Card } from "react-bootstrap";

const ProductCard = ({ products }) => {
  return (
    <Card style={{ width: "18rem", padding: "10px" }}>
      <Card.Img
        className=""
        style={{ height: "300px", objectFit: "cover" }}
        variant="top"
        src={products?.image}
      />
      <Card.Body>
        <Card.Title>{products?.title}</Card.Title>
        <Card.Text className="text-truncate">{products?.description}</Card.Text>
        <Button>{products.category}</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
