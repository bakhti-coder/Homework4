import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/share/Loading";
import { Card, Container } from "react-bootstrap";

const Products = () => {
  const { id } = useParams();

  const [getSingleProducts, setGetSingleProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const data = await axios
          .get(`https://fakestoreapi.com/products/${id}`)
          .then((res) => {
            setGetSingleProducts(res.data);
          });
        console.log(data);
      } catch (error) {
        console.log(error);
        alert("Tarmoqda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [id]);

  return (
    <Fragment>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <div className="d-flex  align-items-center">
              <img src={getSingleProducts.image} alt="dsa" />
              <div>
                <Card.Body>
                  <Card.Title>{getSingleProducts?.title}</Card.Title>
                  <Card.Title>{getSingleProducts?.price} $</Card.Title>
                  <Card.Text>{getSingleProducts?.description}</Card.Text>
                  <p className="text-success ">{getSingleProducts.category}</p>
                </Card.Body>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Fragment>
  );
};

export default Products;
