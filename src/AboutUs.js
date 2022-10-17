import React, { useContext } from 'react'
import { Card, CardTitle, Col, Icon, Row, Section } from 'react-materialize'
import { ThemeContext } from './ThemeContext'

export default function AboutUs() {
    const { theme } = useContext(ThemeContext)
    return (
        <Section style={{ padding: '100px' }}>
            <Row>
                <Col
                    m={12}
                    s={12}
                >
                    <Card style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
                        actions={[
                            <h6>We do things a bit differently, and that's the way we like it!</h6>
                        ]}
                        closeIcon={<Icon>close</Icon>}
                        header={<CardTitle image="https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" />}
                        horizontal
                        revealIcon={<Icon>more_vert</Icon>}
                    >
                        <h4>Our team</h4>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        <h4>Our story</h4>
                        <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.</p>
                    </Card>
                </Col>
            </Row>
        </Section >
    )
}

