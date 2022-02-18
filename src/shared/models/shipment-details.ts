import { ShipmentState } from "./shipment-state";

export interface ShipmentDetails {
    CurrentStatus: ShipmentState;
    TrackingNumber: string;
    TrackingURL: string;
    SupportPhoneNumbers: string[];
    TransitEvents: ShipmentState[];
    CreateDate: Date;
    PromisedDate?: Date;
}