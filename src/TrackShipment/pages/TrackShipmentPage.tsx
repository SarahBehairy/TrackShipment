import React from "react"
import { ShipmentDetails } from "../../shared/models/shipment-details";
import TrackShipmentSteps from "../components/track-shipment-steps/TrackShipmentSteps";
import TransitHubs from "../components/shipment-details/ShipmentDetails";

interface MyProps {
    language: string;
    shipmentDetails: null | ShipmentDetails;
  }

const TrackShipmentPage = (props: MyProps) => {
    const {shipmentDetails} = props;

    const color = shipmentDetails?.CurrentStatus.state === 'DELIVERED'? 'green' : 
        shipmentDetails?.CurrentStatus.state === 'DELIVERED_TO_SENDER'? 'red': 'yellow';

    return <div>
        {
            shipmentDetails? 
        <React.Fragment>
            <TrackShipmentSteps shipmentDetails={shipmentDetails} color={color}/>
            <TransitHubs shipmentDetails={shipmentDetails} color={color}/>
        </React.Fragment>
        : 

        <p>sad</p>
        }
    </div>
}

export default TrackShipmentPage;