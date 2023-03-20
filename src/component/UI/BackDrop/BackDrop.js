import "./BackDrop.css";
const backDrop = (props) => {
  return <div className="Backdrop" onClick={props.close}></div>;
};
export default backDrop;
