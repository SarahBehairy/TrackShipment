import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { ShipmentDetails } from "../../../shared/models/shipment-details";
import './ProgressBar.scss';
import { useTranslation } from "react-i18next";

interface ProgressBarPRops{
  shipmentDetails: ShipmentDetails;
  color: string;
}

const StepProgressBarComponent = (props: ProgressBarPRops) => {
  const {t} = useTranslation();

  const {shipmentDetails, color} = props;
  const steps = shipmentDetails.TransitEvents;

  const transfer = {
    state: shipmentDetails.CurrentStatus.state
  };

  const getStepPosition = (transferStatus: string) => {
    return steps.findIndex(({ state }) => state === transferStatus) + 1;
  };

     return (
        <ProgressBar
          percent={100 * (getStepPosition(transfer.state) / steps.length)}
          filledBackground={color}
        >
        {
          steps.map((_, index, arr) => {
            return (
              <Step
                key={index}
                position={4}
                transition="scale"
                children={() => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      width: 20,
                      height: 20,
                      color: "white",
                      backgroundColor: color
                    }}
                  >
                     <span>&#10004;</span>
                     <p className={"state-desc " + (arr.length > 5? 'wrap': '')}>{t(`${arr[index].state}`)}</p>
                  </div>
                )}
              />
            );
          })}
        </ProgressBar>
      );
}

export default StepProgressBarComponent;