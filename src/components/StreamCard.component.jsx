const StreamCard = ({ image, title }) => {
  return (
    <div className="w-96 mb-6 relative cursor-pointer">
      <img
        src={image}
        alt=""
        className="w-full h-36 mr-4 rounded-md shadow-lg object-cover"
      />
      <h5 className="absolute bottom-3 left-3 text-white text-2xl">{title}</h5>
    </div>
  );
};

export default StreamCard;
