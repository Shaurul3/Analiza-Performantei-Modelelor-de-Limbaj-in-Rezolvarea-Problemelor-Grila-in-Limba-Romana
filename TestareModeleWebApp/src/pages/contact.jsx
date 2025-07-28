import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function About() {
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={12}>
                        <div className="text-center">
                        <h1>Nume: Raduta Alexandru</h1>
		                <br></br>
                        <h2>Email: alexandru.raduta02@stud.acs.upb.ro</h2>
		                <h2>Grupa: 341A2</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}