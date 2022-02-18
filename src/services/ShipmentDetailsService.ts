import http from "../http-common";
import { ShipmentDetails } from "../shared/models/shipment-details";

    export const getShipmentDetails = (shipmentNum: number) => {
        return http.get<ShipmentDetails>(`/shipments/track/${shipmentNum}`);
      }

