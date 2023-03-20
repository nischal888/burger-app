import Modal from "../component/UI/Modal/Modal";
import { connect } from "react-redux";
import { resetError } from "../store/actions";
const ErrorHandler = (props) => {
  const closeModal = () => {
    props.resetError();
  };
  return (
    <>
      <Modal show={props.modelOpen} close={closeModal}>
        {props.error}
      </Modal>
    </>
  );
};

const mapStateToProps = ({ errorHandlerReducer }) => {
  return {
    modelOpen: errorHandlerReducer.modelOpen,
    error: errorHandlerReducer.error,
  };
};
const mapDispatchToProps = {
  resetError,
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler);
