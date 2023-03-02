import React from "react";

import { arrivalTime } from "../model/convertTime";

const FlightTime = ({ startFlight, durationFlight }) => {
  const hoursOfFirstFlightStart = ("0" + new Date(startFlight).getUTCHours()).slice(-2);
  const minutesOfFirstFlightStart = ("0" + new Date(startFlight).getUTCMinutes()).slice(-2);

  const aaa = arrivalTime(startFlight, durationFlight);

  return (
    <div>
      {hoursOfFirstFlightStart}:{minutesOfFirstFlightStart} - {aaa[0]}:{aaa[1]}
    </div>
  );
};

export default FlightTime;
