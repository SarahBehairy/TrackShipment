import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Moment from 'react-moment';
import ReportIssue from '../../../shared/components/report-issue/ReportIssue';
import { ShipmentDetails } from '../../../shared/models/shipment-details';
import './ShipmentDetails.scss';

interface TrackShipmentStepsProps {
    shipmentDetails: ShipmentDetails;
    color: string;
  } 

const TransitHubs = (props: TrackShipmentStepsProps) => {
    const {t} = useTranslation();
    const {shipmentDetails, color} = props;
    
    const stateStyle = {
        color: color,
      };

    const transitWithHubs = shipmentDetails.TransitEvents;
    
    return <Container className='details'>
                <Col className='detailsTable'>
                        <Row>
                            <h5>{t('shipmentDetails')}</h5>
                        </Row>
                    <Row>
                    <Col className="detailsCol">
                                <Row className="tableHead tableRow">
                                    <Col>{t('hub')}</Col>
                                    <Col>{t('date')}</Col>
                                    <Col>{t('time')}</Col>
                                    <Col>{t('details')}</Col>
                                </Row>
                                {
                                    transitWithHubs.map((transit, index) => 
                                        <Row key={index} className="tableRow" >   
                                            <Col>{transit.hub? transit.hub: "Test hub" }</Col>
                                            <Col><Moment format="YYYY/MM/DD">{transit.timestamp}</Moment></Col>
                                            <Col><Moment format="HH:mm a">{transit.timestamp}</Moment></Col>
                                            <Col>
                                            <Row>
                                            {t(`${transit.state}`)}
                                                </Row>
                                                {
                                                    transit.reason &&
                                                    <Row style={stateStyle}>
                                                {transit.reason}
                                                </Row>
                                                }
                                                
                                            </Col>
                                </Row>)
                                }


                    </Col>
                </Row>
                </Col>
        
                <Col>
                    <Row>
                        <h5>{t('deliveryAddress')}</h5>
                    </Row>
                    <Row className="delivery-location">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellendus odio assumenda dicta voluptatum. Fugit esse ut laudantium. Aut ipsum illo, quo a perspiciatis deleniti unde cupiditate libero sunt ducimus.</p>
                    </Row>

                    <Row className="report-issue">
                        <ReportIssue />
                    </Row>
                </Col>
                
    </Container>
}

export default TransitHubs;