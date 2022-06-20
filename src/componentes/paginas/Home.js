import React from "react";
import { Container, Col, Row } from "reactstrap";
function Home() {
    return (
        <div style={{ paddingTop: '3rem' }}>
            <img src="/assets/bannerIdeia.png" style={{ width: '100%' }} alt="imgFromIberia" />
            <Row
                md="3"
                sm="2"
                xs="1"
            >
                <Col>
                    
                </Col>
                <Col>
                    <h1>Um titulo legal para uma ideia legal</h1>
                </Col>
                <Col>
        
                </Col>
            </Row>
        </div>
    )
}
export default Home;