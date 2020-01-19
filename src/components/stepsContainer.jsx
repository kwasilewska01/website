import React from 'react';
import interview from '../images/interview.svg';
import hiring from '../images/hiring.svg';
import percentages from '../images/percentages.svg';
import coworking from '../images/coworking.svg';
import '../components/stepsContainer.scss';
import { Row, Col, Image  } from 'react-bootstrap';
import '../images/remove.svg';
import {ReactComponent as Arrow} from '../images/arrow.svg';

export default function StepsContainer() {
  return(
    <section id="ourOffer" className="pt-4 pb-4">
    <Row>
      <Col>
        <Image className="img_left_side" src={interview} alt="Logo" />
      </Col>
      <Col className="align-self-center">
        <h4>Lorem ipsum dolor sit amet</h4><br />
        <p>Consectetur adipiscing elit. Nulla vel erat leo. Nam leo dui, convallis ut malesuada et, volutpat et quam. Nullam pellentesque neque laoreet. <br /><br />
        Nibh congue tempor. Nunc dictum volutpat placerat. Aenean gravida enim velit, eu varius nibh ultricies eget. Aenean varius, magna ac suscipit. </p>
      </Col>
    </Row>

    <Row className="justify-content-md-center">
      <Col lg="8">
        <Arrow 
          className='stepsContainer-arrow_position'
          begin="0s"
          repeatCount="indefinite"
        />
      </Col>
    </Row>

    <Row>
      <Col className="align-self-center">
        <h4>Nibh turpis aliquam ligula</h4><br />
        <p>Eu commodo sapien dui eget quam. Nulla bibendum posuere ligula ut auctor. Etiam ut arcu augue. Vestibulum ac elit arcu. <br /><br />
        Aliquam vehicula nibh non nisi vulputate mattis. Aenean sodales, est vel ullamcorper eleifend, turpis lorem vulputate sapien, non suscipit lectus libero ut felis. </p>
      </Col>
      <Col>
        <Image className="img_left_side" src={hiring} alt="Logo" />
      </Col>
    </Row>

    <Row className="justify-content-md-center">
      <Col lg="8">
        <Arrow 
          className='stepsContainer-arrow_position arrow_rotate'
          begin="0s"
          repeatCount="indefinite"
        />
      </Col>
    </Row>

    <Row>
      <Col>
        <Image className="img_left_side" src={percentages} alt="Logo" />
      </Col>
      <Col className="align-self-center">
        <h4>Praesent ornare massa</h4><br />
        <p>Ultrices tellus scelerisque, venenatis semper massa blandit. Suspendisse interdum dui a purus mollis dapibus. Suspendisse velit augue, commodo eget neque vel.<br /><br />
        Facilisis laoreet erat. Morbi dapibus sem eget tristique porta. Nullam quis metus dictum, ultrices sapien id, condimentum nisl. Vestibulum in magna nisl.</p>
      </Col>
    </Row>

    <Row className="justify-content-md-center">
      <Col lg="8">
        <Arrow 
          className='stepsContainer-arrow_position'
          begin="0s"
          repeatCount="indefinite"
        />  
      </Col>
    </Row>

    <Row>
      <Col className="align-self-center">
        <h4>Ipsum dolor sit amet</h4><br />
        <p>Consectetur adipiscing elit. Nulla vel erat leo. Nam leo dui, convallis ut malesuada et, volutpat et quam. Nullam pellentesque neque laoreet. <br /><br />
        Nibh congue tempor. Nunc dictum volutpat placerat. Aenean gravida enim velit, eu varius nibh ultricies eget. Aenean varius, magna ac suscipit. </p>
      </Col>
      <Col>
        <Image className="img_left_side" src={coworking} alt="Logo" />
      </Col>
    </Row>
    </section>
  )}
