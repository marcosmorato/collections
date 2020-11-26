const RickAndMorty = ({ name, image, species }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <span>{name}</span>
    </div>
  );
};

export default RickAndMorty;
