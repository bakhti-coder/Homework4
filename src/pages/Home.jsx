import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import axios from "axios";
import URL, { URLCATEGORY } from "../constant";
import Loading from "../components/share/Loading";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/layout/header";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getCategory, setGetCategory] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const data = await axios.get(URL).then((res) => {
          setProducts(res.data);
        });
        console.log(data);
      } catch (error) {
        alert("Tarmoqda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCategorys = async () => {
      try {
        setLoading(true);
        const data = await axios.get(URLCATEGORY).then((res) => {
          setGetCategory(res.data);
        });
        console.log(data);
      } catch (error) {
        alert("Tarmoqda xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };
    getCategorys();
  }, []);

  return (
    <Fragment>
      <Header category={getCategory} loading={loading} />
      <section className="my-5">
        <Container>
          <Row>
            {loading ? (
              <Loading />
            ) : (
              products.map((product, i) => (
                <Col key={i}>
                  <Link to={`/products/${product.id}`}>
                    <ProductCard products={product} />
                  </Link>
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Home;
