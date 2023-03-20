import "./Toolbar.css";
import burgerLogo from "../../../assets/images/burger-logo.png";
import NavigationItem from "../NavigationItem/NavigationItem";
const toolBar = () => {
  return (
    <header className="Toolbar">
      <div>Menu</div>
      <div className="Logo">
        <img alt="Burger Logo" src={burgerLogo} />
      </div>
      <nav>
        <NavigationItem />
      </nav>
    </header>
  );
};
export default toolBar;
