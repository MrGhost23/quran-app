const Card = ({ children, className }) => {
  return (
    <div className={`px-3 py-5 bg-[#ECF0F4] rounded-lg ${className || ""}`}>
      {children}
    </div>
  );
};

export default Card;
