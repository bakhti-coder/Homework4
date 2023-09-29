import React, { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
