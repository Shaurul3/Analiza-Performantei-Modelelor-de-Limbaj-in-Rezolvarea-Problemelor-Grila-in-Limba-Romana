import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DragZone from '../components/DragZone';

export function Testare() {

    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6}>
                        <div className="text-center">
                            <h1 className="text-white">Upload File</h1>
                        </div>
                        {/* Zona de testare a modelului */}
                        <DragZone />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
