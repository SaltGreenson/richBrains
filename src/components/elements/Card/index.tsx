import React, { HTMLAttributes, ReactNode } from "react";
import { formatNumberToPound } from "../../../helpers/formatNumber.helpers";

import Button from "../../common/Button";
import IconLabel from "../../common/IconLabel";
import Battery from "../../common/Signs/Battery";
import Hat from "../../common/Signs/Hat";
import Plus from "../../common/Signs/Plus";
import "./styles.less";

export type CardDataType = {
  descriptionTitle: string;
  degree: string;
  minDuration: string;
  maxDuration: string;
  price: number;
  startDates: string;
  title: string;
};

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  logo: ReactNode;
  description: CardDataType;
}

const Card = ({ logo, description }: ICardProps): JSX.Element => (
  <div className="card-container">
    <div className="card-container__logo">{logo}</div>
    <div className="card-container__top-side">
      <div className="card-container__title-wrapper">
        <p className="card-container__title-small">business & management</p>
        <p className="card-container__title-large">{description.title}</p>
      </div>
      <div className="card-container__options-wrapper">
        <IconLabel icon={<Hat isGrey />}>{description.degree}</IconLabel>
        <div className="no-mobile-display">
          <IconLabel icon={<Battery />}>Every 12 weeks</IconLabel>
        </div>
      </div>
      <div className="card-container__top-side-price">
        £{formatNumberToPound(description.price)}
      </div>
    </div>
    <div className="card-container__top-side-plus">
      <Plus isGreen />
    </div>
    <Button variant="primary">More Info</Button>
    <div className="card-container__back-side">
      <div className="card-container__plus-btn">
        <Plus />
      </div>
      <div className="card-container__back-side-description">
        <p className="card-container__back-side-title">
          {description.descriptionTitle}
        </p>
        <div>
          <p className="card-container__back-side-subtitle">Duration:</p>
          <p className="card-container__back-side-text">
            Minimum: {description.minDuration}
          </p>
          <p className="card-container__back-side-text">
            Minimum: {description.maxDuration}
          </p>
        </div>
        <div>
          <p className="card-container__back-side-subtitle">Start Dates:</p>
          <p className="card-container__back-side-text">
            {description.startDates}
          </p>
        </div>
      </div>
      <p className="card-container__price">
        £{formatNumberToPound(description.price)}
      </p>
      <Button variant="primary">More Info</Button>
    </div>
  </div>
);

export default Card;
