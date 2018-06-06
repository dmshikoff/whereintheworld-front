import React from "react";
import { Card, CardTitle } from 'react-materialize'
import '../styling/CityCard.css'

const CityCard = ({city}) => {
  return (
    <Card
      header={<CardTitle image={city.img} font-family="'Proza Libre', sans-serif">{city.name}</CardTitle>}
    >
      I am a very simple card. I am good at containing small bits of
      information. I am convenient because I require little markup to use
      effectively.
    </Card>
  );
};

export default CityCard;
