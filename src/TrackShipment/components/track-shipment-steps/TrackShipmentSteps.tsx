import React from "react"
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useTranslation } from "react-i18next";
import { ShipmentDetails } from "../../../shared/models/shipment-details";
import StepProgressBarComponent from "../step-progress-bar/ProgressBar";
import './TrackShipmentSteps.scss';
import Moment from 'react-moment';


interface TrackShipmentStepsProps {
    shipmentDetails: ShipmentDetails;
    color: string;
  } 
const TrackShipmentSteps = (props: TrackShipmentStepsProps) => {
    const {t} = useTranslation();
    const {shipmentDetails, color} = props;

    const stateStyle = {
        color: color,
      };

    return <div className="center">
                <Container className="wrapper">
                    <Row >
                    <Row className="bottom-border">
                        <Col>
                            <Row>
                            <Col xs={6} md={3}>
                                <Row className="param">{t('trackNum')} {shipmentDetails.TrackingNumber}</Row>
                                <Row className={'data '} style={stateStyle}>{t(`${shipmentDetails.CurrentStatus.state}`)}</Row>
                            </Col>
                            <Col xs={6} md={3}>
                                <Row className="param">{t('lastUpdate')}</Row>
                                <Row className="data inline">
                                    <Moment format="YYYY/MM/DD">{shipmentDetails.CurrentStatus.timestamp}</Moment> at <Moment format="hh:mm A">{shipmentDetails.CurrentStatus.timestamp}</Moment></Row>
                            </Col>
                            <Col xs={6} md={3}>
                                <Row className="param">{t('merchantName')}</Row>
                                <Row className="data">SOUQ.COM</Row>
                            </Col>
                            <Col xs={6} md={3}>
                                <Row className="param">{t('deliverIn')}</Row>
                                <Row className="data">
                                    <Moment format="YYYY/MM/DD">
                                        {shipmentDetails.PromisedDate? shipmentDetails.PromisedDate : shipmentDetails.CurrentStatus.timestamp}
                                    </Moment>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    </Row>

                    <Row className="progress-row">
                        <Col >
                            <Row>
                                <StepProgressBarComponent shipmentDetails={shipmentDetails} color={color}/>
                            </Row>
                            {/* <Row className="Ltr">
                                {
                                    shipmentDetails.TransitEvents.map((transitEvent, index)=> {
                                        return <Col key={index} className="state">{t(`${transitEvent.state}`)}</Col>
                                    })
                                }
                            </Row> */}
                         </Col>
                    </Row>
                </Row>

                
               

                    
                </Container>
            </div>
}

export default TrackShipmentSteps;