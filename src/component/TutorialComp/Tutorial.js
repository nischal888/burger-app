import TutorialTodos from "./InnerTutorial/TutorialTodos";
import TutorialUsers from "./InnerTutorial/TutorialUsers";

const Tuts = () => {
  return (
    <div style={{ display: "flex", flex: 1, gap: "25px", marginLeft: "25px" }}>
      <TutorialTodos />
      <TutorialUsers />
    </div>
  );
};

export default Tuts;
