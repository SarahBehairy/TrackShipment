import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import TrackShipmentInput from "../track-shipment-input/TackShipmentInput";
import './MobileNavMenu.scss';

interface MobileNavMenuProps{
    isMenuOpen: boolean;
    language: string;
    shipmentNumber: string;
    changeLanguage: (lang: string) => void;
    onInputChange: (e: any) => void;
    submitForm: () => void;
}

const MobileNavMenu = (props: MobileNavMenuProps) => {
    const {t} = useTranslation();
    const {isMenuOpen, language, shipmentNumber, changeLanguage, submitForm, onInputChange} = props;
    const [ isTrackShipmentOpen, setIsTrackShipmentOpen ] = useState(false);

    const toggleTrackShipment = () => {
      setIsTrackShipmentOpen(!isTrackShipmentOpen);
    }

    const onSubmit = () =>{
      setIsTrackShipmentOpen(false);
      submitForm();
    }

    return  <ul 
    id="mobile_menu" 
    className={'menu ' + (isMenuOpen? 'open' : 'close')}
    >
    <li>{t('home')}</li>
    <li>{t('pricing')}</li>
    <li>{t('contactSales')}</li>
    <li className="trackShipmentMobile" onClick={toggleTrackShipment}>{t('trackShipment')}</li>
    <li>{t('signIn')}</li>
    {
      language === 'en'?
    <li><span 
          className="lang" 
          onClick={()=> changeLanguage('ar')}
          >عربي</span></li> : 
    <li><span 
          className="lang" 
          onClick={()=>changeLanguage('en')}
          >ENG</span></li>
    }

    {
      isTrackShipmentOpen && 
      <TrackShipmentInput 
        mobileClassName="mobileTrackShip"
        shipmentNumber={shipmentNumber} 
        submitForm={onSubmit}
        onInputChange={onInputChange}
        />
    }
</ul>
}

export default MobileNavMenu