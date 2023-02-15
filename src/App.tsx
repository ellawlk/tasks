import React from "react";
import "./App.css";
import chinchy from "/Users/ellawilkins/S23CISC275/tasks/src/assets/IMG-4514.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App" style={{ background: "pink" }}>
            <header className="App-header">/CISC275/i</header>
            <h1>Ella&apos;s Site Cus She Loves Chinchy</h1>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <img
                                src={chinchy}
                                alt="A cute Chinchy"
                                width="200px"
                                height="300px"
                            />
                            <div
                                style={{
                                    width: "50px",
                                    height: "75px",
                                    background: "red"
                                }}
                            ></div>
                        </Col>
                        <Col>
                            Chinch List:
                            <ul>
                                <li>Chinch is awesome</li>
                                <li>Chinch is soft</li>
                                <li>Chinch is adventurous</li>
                            </ul>
                            <div
                                style={{
                                    width: "50px",
                                    height: "25px",
                                    background: "red"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            ;
        </div>
    );
}

export default App;
