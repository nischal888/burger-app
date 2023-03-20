import BackDrop from "../BackDrop/BackDrop";
import "./Modal.css";

const modal = (props) => {
  return (
    <>
      {props.show ? <BackDrop close={props.close} /> : null}
      <div
        className="Modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default modal;
