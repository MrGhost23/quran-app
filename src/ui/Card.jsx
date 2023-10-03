const Card = ({ children, className }) => {
  return (
    <div className={`px-3 py-6 bg-[#ECF0F4] rounded-lg ${className || ""}`}>
      {children}
    </div>
  );
};

export default Card;
