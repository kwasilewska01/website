import React from 'react'
import '../components/AboutUsContainer.scss'
import { Row, Col, Image, Button  } from 'react-bootstrap'
import setupwizard from '../images/setupwizard.svg'


export default function AboutUsContainer() {
    return(
      <section id="aboutUs">
        <Row>
          <Col className="align-self-center">
            <h1 className="super_text">Zbuduj z nami swoją<br />przyszłość</h1><br />
            <p>Aliquam vitae dapibus risus. Phasellus blandit nisl diam, at rutrum libero efficitur eget. Nunc lacus dui, blandit id laoreet sollicitudin, auctor ut lorem. Duis vehicula suscipit magna in hendrerit. Sed laoreet bibendum aliquam. </p>
            <Button href="#ourOffer" className="mt-4">Zaczynam</Button>
          </Col>
          <Col>
            <Image className="img_left_side" src={setupwizard} alt="Logo" />
          </Col>
        </Row>
      </section>
)}
