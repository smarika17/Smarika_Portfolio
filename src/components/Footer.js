import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon6 from '../assets/img/nav-icon5TwiF.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/smarika-malviya-288677227/"><img src={navIcon1} alt="" /></a>
                <a href="https://twitter.com/smarika_17"><img src={navIcon4} alt="" /></a>
                <a href="https://github.com/smarika17"><img src={navIcon6} alt="" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}