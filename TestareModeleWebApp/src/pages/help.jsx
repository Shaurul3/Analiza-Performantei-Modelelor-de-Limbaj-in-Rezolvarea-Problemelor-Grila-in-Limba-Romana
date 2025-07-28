import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Help() {
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6}>
                        <div className="text">
                            <h2 className="text-info">Cum folosești secțiunea de testare</h2>
                            <p>Acestă secțiune a aplicației îți permite să încarci probleme de matematică sub formă de imagine, iar modelul AI va analiza automat conținutul și îți va oferi o soluție explicată pas cu pas.</p>
                            
                            <h4 className="text-info">1. Încarcă imaginea cu problema</h4>
                            <p>Apasă butonul <strong>„Upload File”</strong> și selectează o imagine care conține o problemă matematică (de exemplu, dintr-un test grilă sau o poză făcută cu telefonul). Poți trage imaginea și direct în zona desemnată.</p>
                            <p><em className="text-warning">Suportă fișiere .jpg, .png și .jpeg.</em></p>
                            
                            <h4 className="text-info">2. Recunoașterea textului (OCR)</h4>
                            <p>După încărcare, imaginea este procesată automat pentru a extrage textul folosind tehnologie OCR (recunoaștere optică a caracterelor). Vei vedea textul interpretat sub imagine, iar dacă acesta este corect, poți trece mai departe.</p>
                            
                            <h4 className="text-info">3. Trimite problema la GPT</h4>
                            <p>Apasă butonul <strong>„Trimite la GPT”</strong> pentru ca problema să fie analizată. Modelul AI va interpreta cerința și variantele de răspuns, apoi va oferi o explicație detaliată a soluției.</p>
                            
                            <h4 className="text-info">4. Vezi răspunsul complet</h4>
                            <p>Răspunsul generat este afișat într-un bloc de text structurat, cu explicații logice, calcule intermediare și concluzia finală. Astfel, nu doar afli răspunsul corect, ci înțelegi <strong>cum</strong> a fost rezolvat.</p>
                            
                            <h4 className="text-info">Poți repeta pentru oricâte probleme dorești!</h4>
                            <p>Această funcționalitate este ideală pentru:</p>
                            <ul>
                                <li>pregătire pentru examene de admitere;</li>
                                <li>verificarea răspunsurilor proprii;</li>
                                <li>învățare activă prin înțelegerea rezolvărilor pas cu pas.</li>
                            </ul>
                            
                            <p><strong className="text-danger">Notă:</strong> Dacă întâmpini probleme la recunoașterea textului sau rezultatul nu pare corect, asigură-te că imaginea este clară și scrisul lizibil. În caz contrar, poți oricând reformula manual cerința.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}