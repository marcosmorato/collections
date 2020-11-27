import { Card } from "../styled-components/Card/index";

const RickAndMorty = ({ name, image, species }) => {
  return (
    <Card>
      <div>{name}</div>
      <img src={image} alt={name} />
    </Card>
  );
};

export default RickAndMorty;
