import React, { Component, useContext } from 'react'
import { Button, Card, Container, Icon, Section, TextInput } from 'react-materialize'



export default class Contact extends Component {

    render() {

        const handleSubmit = (e) => {
            e.preventDefault()
        }
        return (
            <Section style={{ paddingTop: '100px' }}>
                <Container style={{ padding: '50px' }} >
                    <Card className="card1 "
                        actions={[
                            <h5 style={{ color: '#d98704' }}>Contact Us</h5>
                        ]}
                        header={<h5 style={{ color: '#d98704', paddingTop: '20px', paddingLeft: '20px' }}>Send Us A Message</h5>}
                    >
                        <form onSubmit={handleSubmit}>
                            <TextInput
                                id="TextInput-45"
                                label="Full Name"
                            />
                            <TextInput
                                id="TextInput-35"
                                label="Password"
                                password
                            />
                            <TextInput
                                email
                                id="TextInput-62"
                                label="Email"
                                validate
                            />
                            <TextInput
                                id="TextInput-45"
                                label="Phone number"
                            />
                            <TextInput
                                id="TextInput-45"
                                label="Message"
                            />
                            <Button
                                node="button"
                                type="submit"
                                waves="light"
                            >
                                Submit
                                <Icon right>
                                    send
                                </Icon>
                            </Button>
                        </form>
                    </Card>
                </Container >
            </Section >

        )
    }
}


