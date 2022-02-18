import React from "react";
import { useTranslation } from "react-i18next";
import './TrackShipmentInput.scss';

interface TrackShipmentInputProps{
    shipmentNumber: string;
    mobileClassName?: string;
    onInputChange: (e: any) => void
    submitForm: () => void;
}

const TrackShipmentInput = (props: TrackShipmentInputProps) => {
    const {t} = useTranslation();
    const {shipmentNumber, mobileClassName, onInputChange, submitForm} = props;

    return  <div className={"track-popup " + (mobileClassName)}>
    <div>
      <h2 className="track-title">{t('trackTitle')}</h2>
      <p className="track-text">{t('trackText')}</p>
      <form className="track-form">
          <input type="text" 
          className="track-input" 
          placeholder={t('trackNum')} 
          name="track-input"
          value={shipmentNumber}
          onChange={onInputChange}/>
          <button 
            className="search-btn" 
            type="button"><i className="fa fa-search"
            onClick={submitForm}
            ></i></button> 
      </form>
  </div>
</div>
}

export default TrackShipmentInput;