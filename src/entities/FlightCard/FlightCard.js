/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from "react";


import FlightTime from "./ui/FlightTime";
import classes from "./FlightCard.module.scss";
import { convertMinToHours } from "./model/convertTime";

// eslint-disable-next-line no-unused-vars
const FlightCard = ({ price, carrier, segments }) => {
  const priceStr = String(price);

  const firstTransitionTime = convertMinToHours(segments[0].duration);
  const secondTransitionTime = convertMinToHours(segments[1].duration);

  return (
    <li>
      <article className={classes.flightCard}>
        <div className={classes.flightCard__header}>
          <span className={classes.flightCard__price}>
            {priceStr.slice(0, priceStr.length - 3)} {priceStr.slice(priceStr.length - 3)} Р
          </span>
          <img
            src={`https://pics.avs.io/99/36/${carrier}.png`}
            className={classes.flightCard__logo}
          />
        </div>
        <div className={classes.flightCard__main}>
          <div className={classes.flightCard__origin}>
            <div className={classes.flightCard__heading}>
              <div>
                {segments[0].origin} - {segments[0].destination}
              </div>
              <div>В пути</div>
              <div>
                {segments[0].stops.length === 0
                  ? "Без пересадок"
                  : segments[0].stops.length > 1
                    ? `${segments[0].stops.length} пересадки`
                    : `${segments[0].stops.length} пересадка`}
              </div>
            </div>
            <div className={classes.flightCard__value}>
              <div>< FlightTime startFlight={segments[0].date} durationFlight={segments[0].duration} /></div>
              <div>{`${firstTransitionTime[0]} ч ${firstTransitionTime[1]} мин`}</div>
              <div>{segments[0].stops.length > 0 ? segments[0].stops.join(", ") : null}</div>
            </div>
          </div>
          <div className={classes.flightCard__destination}>
            <div className={classes.flightCard__heading}>
              <div>
                {segments[1].origin} - {segments[1].destination}
              </div>
              <div>В пути</div>
              <div>
                {segments[1].stops.length === 0
                  ? "Без пересадок"
                  : segments[1].stops.length > 1
                    ? `${segments[1].stops.length} пересадки`
                    : `${segments[1].stops.length} пересадка`}
              </div>
            </div>
            <div className={classes.flightCard__value}>
              <div>< FlightTime startFlight={segments[1].date} durationFlight={segments[1].duration} /></div>
              <div>{`${secondTransitionTime[0]} ч ${secondTransitionTime[1]} мин`}</div>
              <div>{segments[1].stops.length > 0 ? segments[1].stops.join(", ") : null}</div>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
};


export default FlightCard;
