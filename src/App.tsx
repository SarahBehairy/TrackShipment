import React, { useState } from 'react';
import './App.css';
import NavBar from './shared/components/nav-bar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import TrackShipmentPage from './TrackShipment/pages/TrackShipmentPage';
import { getShipmentDetails } from './services/ShipmentDetailsService';
import { ShipmentDetails } from './shared/models/shipment-details';
import InvalidShipmentPage from './TrackShipment/pages/InvalidShipmentPage';


function App() {
  const {i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [shipmentDetails, setShipmentDetails] = useState<null | ShipmentDetails>(null);
  const [isShipmentNumInvalid, setIsShipmentNumInvalid]  = useState(false);

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
    setLanguage(value);
  }

  const onTrackShipment = (shipmentNumber: number) => {
    getShipmentDetails(shipmentNumber).then(result=>{
      if(result.data){
        setShipmentDetails(result.data);
      }
    }).catch(_=> {
      setIsShipmentNumInvalid(true);
      setShipmentDetails(null);

    })
  }


  return (
    <div className={"App "  + (language === 'en' ? 'ltr' : 'rtl')}>
      <NavBar language={language} changeLanguage={changeLanguage}  onTrackShipment={onTrackShipment}/>
      {
        shipmentDetails && 
        <TrackShipmentPage language={language} shipmentDetails={shipmentDetails} />

      }

      {
        !shipmentDetails && isShipmentNumInvalid && 
        <InvalidShipmentPage onTrackShipment={onTrackShipment}/>

      }

    </div>
  );
}

export default App;
