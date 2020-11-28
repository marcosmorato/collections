import { Card } from "../styled-components/Card/index";
import axios from "axios";
import { useState, useEffect } from "react";

const FavoriteRickAndMorty = ({ name, image }) => {
  return (
    <Card>
      <div>{name}</div>
      <img src={image} />
    </Card>
  );
};

export default FavoriteRickAndMorty;
