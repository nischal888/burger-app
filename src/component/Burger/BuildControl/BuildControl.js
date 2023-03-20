import "./BuildControl.css";
const buildControl = (props) => {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Cheese", type: "cheese" },
    { label: "Bacon", type: "bacon" },
    { label: "Meat", type: "meat" },
  ];

  return (
    <div className="BuildControlWrapper">
      <p>
        <b>Price:</b> {props.price.toFixed(2)}
      </p>
      {controls.map((ctrl, i) => {
        return (
          <div className="BuildControl" key={i}>
            <div className="Label">{ctrl.label}</div>
            <button
              onClick={() => {
                props.delete(ctrl.type);
              }}
              disabled={props.disabled[ctrl.type]}
              className="Less"
              type={ctrl.type}
            >
              Less
            </button>

            <button
              onClick={() => {
                props.add(ctrl.type);
              }}
              type={ctrl.type}
              className="More"
            >
              More
            </button>
          </div>
        );
      })}
      <button
        onClick={props.open}
        disabled={!props.orderpurchasable}
        className="OrderButton"
      >
        {props.authenticate ? "Order Now" : "Signup to Order"}
      </button>
    </div>
  );
};
export default buildControl;
