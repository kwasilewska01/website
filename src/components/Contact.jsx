import React from 'react';
import '../components/Contact.scss';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import mailbox from '../images/mailbox.svg';

export default function Contact() {
    return(
      <section id="contact" className="pt-5">

        <h1 className="text-content-center pb-5">Zostańmy w kontakcie</h1>
        <Row className="pt-3">
          <Col lg="4">
            <Image className="img_left_side" src={mailbox} alt="Logo" />
          </Col>

          <Col lg={{ span: 6, offset: 2 }} className="align-self-center">

          <Form>
            
            <Form.Group>
              <Form.Control type="text" placeholder="Wpisz swoje imię" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Wpisz swój e-mail" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="6" placeholder="Tu wpisz wiadomość do nas"/>
            </Form.Group>

            <Button href="#" className="mt-4 btn-send-message">Wyślij</Button>

          </Form>

          </Col>
        </Row>

      </section>



)}