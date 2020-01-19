import React, { Component } from 'react';
import '../components/Footer.scss'
import { Container, Row, Col } from 'react-bootstrap';
import ListItem from './ListItem.jsx';
import {ReactComponent as Spade} from '../images/spade.svg';


export default class FooterContainer extends Component {
    render () {  
    return (
        
    <footer className="navbar-fixed-bottom mt-5 footer-padding-body">
        <Container>
            <Row>
                <Col xs={3} md={3}>
                    <ListItem />
                </Col>
                <Col xs={7} md={7}>
                    <Row className="d-flex justify-content-center">
                        <Spade className="footer--spadeIcon__color"/>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        
                    </Row>
                </Col>
            </Row>
        </Container>
    </footer>
)}};
