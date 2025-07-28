import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Documentare() {
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={10}>
                        <div className="text">
                            <h2 className="mb-3 text-white">Documentare – <span className="text-info">Machine Learning pe scurt</span></h2>

                            <p className="lead">
                                Aplicația folosește inteligență artificială pentru a analiza și rezolva probleme de matematică din imagini sau text. Combină:
                            </p>

                            <ul className="mb-4">
                                <li><strong className="text-warning">ML:</strong> Algoritmi care învață din exemple</li>
                                <li><strong className="text-warning">OCR:</strong> Recunoaștere a textului din imagini</li>
                                <li><strong className="text-warning">NLP:</strong> Înțelegerea limbajului natural</li>
                            </ul>

                            <h4 className="text-info">Cum funcționează?</h4>
                            <p>Încarci o imagine, sistemul extrage textul și îl trimite la cel mai bun model pentru o explicație.</p>

                            <h4 className="text-info mt-4">Ce înveți?</h4>
                            <ul>
                                <li>Răspunsuri corecte</li>
                                <li>Explicații pas cu pas</li>
                                <li>Exercițiu eficient</li>
                            </ul>

                            <h4 className="text-info mt-4">O analiză pesonală a modelelor de limbaj</h4>
                            <table border="1" cellspacing="0" cellpadding="5">
                                <thead>
                                    <tr>
                                        <th>Nume model</th>
                                        <th>Tip testare</th>
                                        <th>Acuratețe – set testare</th>
                                        <th>Acuratețe – set validare</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>GPT-3.5 Turbo</td><td>Fine tuning</td><td>28.43%</td><td>30.39%</td></tr>
                                    <tr><td>GPT-3.5 Turbo</td><td>Zero-shots</td><td>20.59%</td><td>26.47%</td></tr>

                                    <tr><td>GPT-4o</td><td>Fine tuning</td><td>28.43%</td><td>29.41%</td></tr>
                                    <tr><td>GPT-4o</td><td>Zero-shots</td><td>47.06%</td><td>48.08%</td></tr>
                                    <tr><td>GPT-4o</td><td>Few-shots</td><td>34.31%</td><td>38.24%</td></tr>

                                    <tr><td>GPT-4.1-mini</td><td>Fine tuning</td><td>36.27%</td><td>38.24%</td></tr>
                                    <tr><td>GPT-4.1-mini</td><td>Zero-shots</td><td>61.76%</td><td>60.78%</td></tr>
                                    <tr><td>GPT-4.1-mini</td><td>Few-shots</td><td>60.78%</td><td>57.84%</td></tr>

                                    <tr><td>GPT-4.1</td><td>Fine tuning</td><td>33.33%</td><td>35.29%</td></tr>
                                    <tr><td>GPT-4.1</td><td>Zero-shots</td><td>47.06%</td><td>48.08%</td></tr>
                                    <tr><td>GPT-4.1</td><td>Few-shots</td><td>41.18%</td><td>41.18%</td></tr>

                                    <tr><td>Command R+</td><td>Fine tuning</td><td>33.33%</td><td>36.27%</td></tr>
                                    <tr><td>Command R+</td><td>Zero-shots</td><td>26.47%</td><td>26.47%</td></tr>
                                    <tr><td>Command R+</td><td>Few-shots</td><td>20.59%</td><td>25.49%</td></tr>

                                    <tr><td>Claude Opus 4</td><td>Zero-shots</td><td>35.29%</td><td>39.22%</td></tr>
                                    <tr><td>Claude Opus 4</td><td>Few-shots</td><td>32.25%</td><td>36.27%</td></tr>

                                    <tr><td>Llama 3 70B Instruct</td><td>Zero-shots</td><td>35.29%</td><td>41.18%</td></tr>
                                    <tr><td>Llama 3 70B Instruct</td><td>Few-shots</td><td>39.41%</td><td>38.24%</td></tr>

                                    <tr><td>Qwen2.5 72B Instruct</td><td>Zero-shots</td><td>49.02%</td><td>48.04%</td></tr>

                                    <tr><td>Deepseek V3 03-24</td><td>Few-shots</td><td>43.14%</td><td>41.18%</td></tr>
                                    <tr><td>Deepseek V3 03-24</td><td>Zero-shots</td><td>57.84%</td><td>51.96%</td></tr>
                                    <tr><td>Deepseek V3 03-24</td><td>Few-shots</td><td>47.06%</td><td>46.08%</td></tr>
                                </tbody>
                            </table>
                            <h4 className="mt-4">Cel mai bun model, din câte se observă, este gpt-4.1-mini neantrenat.</h4>
                            <p className="text-info">
                                Tehnologia sprijină învățarea activă. Nu doar îți dă răspunsul – te ajută să-l înțelegi.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}