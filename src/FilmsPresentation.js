
import "materialize-css/dist/css/materialize.min.css";
import React, { useContext, useState } from "react";
import {
    Card,
    CardTitle, Col, Container, Row, Section
} from "react-materialize";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import { ThemeContext } from "./ThemeContext";

export default function FilmsPresentation({ films }) {
    console.log("films");
    const [film, setFilm] = useState([]);
    const { theme } = useContext(ThemeContext)
    return (
        <div>
            <Slider style={{ width: "80%" }} />
            <Section style={{ width: "100%" }}>
                <Container style={{ width: "100%" }}>
                    <Row>
                        {films.map((film) => (
                            <Col m={4} s={12}>
                                <Link to={`/detail/${film.id}`}>
                                    <Card className="card1" style={{ color: 'white', backgroundColor: '#252525', textAlign: 'center' }}
                                        header={<CardTitle image={film.img} reveal waves="light" />}
                                        title={film.name}
                                    >
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Section>
        </div>

    );
}
