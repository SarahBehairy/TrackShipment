import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import './ReportIssue.scss';
import { ReactComponent as Logo } from './../../../assets/help1.svg';

const ReportIssue = () => {
    const {t} = useTranslation(); 
    return <Container>
        <Row>
            <Col lg={2} md={2} sm={6}>
                <Logo className="helpImg"/>
            </Col>
            <Col>
                <Row>
                    <p>{t('reportTitle')}</p>
                </Row>
                <Row>
                    <button type="button" className="reportBtn" >{t('reportBtn')}</button>
                </Row>
            </Col>
        </Row>
    </Container>
}

export default ReportIssue;