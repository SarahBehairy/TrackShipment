import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import './InvalidShipmentPage.scss';


interface MyProps {

    onTrackShipment: (shipmentNumber: number) => void;
  }

const InvalidShipmentPage = (props: MyProps) => {
    const [shipmentNumber, setShipmentNumber] = useState('');
    const { t } = useTranslation();

  const submitForm = () => {
    props.onTrackShipment(+shipmentNumber)
  }

  const onInputChange = (event:any) => {
    setShipmentNumber(event.target.value);
  }

    return <Container className="invalid-container">
    <div className="invalid_ship">
        <h1> This shipment number is invalid.</h1>
        <div className="delivey_form">
            <h2 className="head_pop">Track another shipment</h2>
            <form className="track-form">
                    	<input type="text" 
                        className="track-input" 
                        placeholder={t('trackNum')} 
                        name="track-input"
                        value={shipmentNumber}
                        onChange={onInputChange}/>
                        <button 
                          type="button"
                          className="search-btn" 
                          ><i className="fa fa-search"
                          onClick={()=>submitForm()}
                          ></i></button> 
                    </form>
      </div></div>
    </Container>

}

export default InvalidShipmentPage;