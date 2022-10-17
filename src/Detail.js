import React, { useContext, useState } from 'react';
import { Card, CardTitle, Col, Icon, Row, Section } from 'react-materialize';
import { useParams } from 'react-router-dom';
import { Films } from './shared/ListOfFilms';
import { ThemeContext } from './ThemeContext';
import ModelCase from './ModelCase';

export default function Detail() {
    const { theme } = useContext(ThemeContext)
    const name = useParams();
    const film = Films.find(obj => {
        return obj.id == name.id;
    });
    const [isOpen, setIsOpen] = useState(false);
    return (

        <Section style={{ padding: '150px', paddingTop: '30px', paddingBottom: '0px' }}>
            <Row>
                <Col
                    m={12}
                    s={12}
                >
                    <Card style={{ color: theme.color, backgroundColor: '#252525' }}
                        actions={[
                            <h6 style={{ color: '#d98704' }}>The content of "{film.name}" : </h6>, <p style={{ color: '#5a7082' }}>{film.info}</p>
                        ]}
                        header={<CardTitle image={film.imgDetail} ><a onClick={() => setIsOpen(true)} className="btn-floating btn-large waves-effect waves-light orange">
                            <Icon>play_arrow</Icon>
                        </a></CardTitle>}
                    >
                        <h4 style={{ color: 'white' }}>{film.name} <h5>({film.year})</h5></h4>
                    </Card>
                </Col>
            </Row>
            {isOpen && <ModelCase setIsOpen={setIsOpen} film={film} />}
        </Section>
    )
}

