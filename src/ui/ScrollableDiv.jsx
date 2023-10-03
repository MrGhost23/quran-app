const ScrollableDiv = (props) => {
  const classes = "pl-5 overflow-y-auto";

  return (
    <div
      id={props.id}
      className={props.className ? classes + " " + props.className : classes}
    >
      {props.children}
    </div>
  );
};

export default ScrollableDiv;
