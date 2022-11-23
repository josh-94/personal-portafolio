import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                        <a href="https://www.linkedin.com/in/jeshuacabanillas/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Linkedin" /></a>
                        <a href="https://www.facebook.com/jeshua.cabanillas" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Facebook" /></a>
                        <a href="https://www.instagram.com/code.withjosh/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}