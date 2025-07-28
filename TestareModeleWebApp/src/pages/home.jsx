import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Home() {
  return (
    <div className="home-background">
      <Container className="home-content">
        <div className="text-box text-center">
          <h1>Rezolvarea problemelor de admitere cu cel mai bun model</h1>
          <h3>Haideți să rezolvăm niste exerciții!</h3>
        </div>

        <Row className="button-row mt-4">
          <Col xs={12} md={6} className="d-flex justify-content-md-start justify-content-center mb-2 mb-md-0">
            <Link to="/testare">
              <Button variant="info" className="custom-btn" size="lg">
                Testare
              </Button>
            </Link>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-md-end justify-content-center">
            <Link to="/documentare">
              <Button variant="info" className="custom-btn" size="lg">
                Documentare
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}