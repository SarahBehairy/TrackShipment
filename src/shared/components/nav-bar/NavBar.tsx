import React, { useState } from "react";
import {Container, Navbar, Nav} from 'react-bootstrap';
import './NavBar.scss';
import { useTranslation } from 'react-i18next';
import MobileNavMenu from "../mobile-nav-menu/MobileNavMenu";
import TrackShipmentInput from "../track-shipment-input/TackShipmentInput";


interface MyProps {
  language: string;
  changeLanguage: (lang: string) => void;
  onTrackShipment: (shipmentNumber: number) => void;
}

const NavigationBar = (props: MyProps) => {
  const { t } = useTranslation();

  const {language, changeLanguage, onTrackShipment} = props;

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isTrackShipmentOpen, setIsTrackShipmentOpen] = useState(false);
  const [shipmentNumber, setShipmentNumber] = useState('');

  const logoPath = language === 'en'? 
    'https://bosta.co/wp-content/uploads/2019/08/bosta_logo_en_red.svg' : 
    'https://bosta.co/wp-content/uploads/2019/08/Component.svg'


  const toggleMobileMenu = () =>{
    setMenuOpen(!isMenuOpen);
  }

  const onToggleTrackShipment = () =>{
    setIsTrackShipmentOpen(!isTrackShipmentOpen);
  }

  
  const submitForm = () => {
    setIsTrackShipmentOpen(false);
    setMenuOpen(false);
    onTrackShipment(+shipmentNumber)
  }

  const onInputChange = (event:any) => {
    setShipmentNumber(event.target.value);
  }

    return <div>  <Navbar>
    <Container>
      <Navbar.Brand><img className="logoImg" alt="logo" src={logoPath} /></Navbar.Brand>
      <div id="webView">
        <Nav className="m-inline">
          <Nav.Link className="nav-link">
            <div className="nav-item">{t('home')}</div>
            </Nav.Link>
          <Nav.Link>
            <div className="nav-item">{t('pricing')}</div>
          </Nav.Link>
          <Nav.Link>
            <div className="nav-item">{t('contactSales')}</div>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            <div 
              className={'nav-item shipment ' 
                          +(language === 'en'? 'en ' : 'ar ')
                          +(isTrackShipmentOpen? 'open' : 'close')}
                          
              onClick={onToggleTrackShipment}>{t('trackShipment')}</div>
              {
                isTrackShipmentOpen &&
                <TrackShipmentInput 
                  onInputChange={onInputChange} 
                  submitForm={submitForm} 
                  shipmentNumber={shipmentNumber}/>
              }
          </Nav.Link>
          <Nav.Link>  
            <div className="nav-item">{t('signIn')}</div>
          </Nav.Link>
          {
            language === 'en'?
            <Nav.Link onClick={()=> changeLanguage('ar')}>
              <div className="nav-item lang">عربي</div>
            </Nav.Link>
            : 
            <Nav.Link onClick={()=> changeLanguage('en')}>
              <div className="nav-item lang">ENG</div>
            </Nav.Link>
          }

        </Nav>
      </div>
      <div id="mobileView">
          <span onClick={toggleMobileMenu}><i className="fa fa-bars"></i></span>
          {
            isMenuOpen && 
            <MobileNavMenu 
              language={language} 
              shipmentNumber= {shipmentNumber}
              changeLanguage={changeLanguage} 
              isMenuOpen={isMenuOpen} 
              onInputChange={onInputChange}
              submitForm={submitForm}/>
          }

      </div>

    </Container>
  </Navbar></div>
}

export default NavigationBar;