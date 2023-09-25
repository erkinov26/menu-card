import "./../App.css";
const Header = (props) => {
  return (
    <div>
      <img
        className="imgLogo"
        src="https://www.svgrepo.com/show/303214/nike-4-logo.svg"
        alt="img"
      />
      <h2 className="mainTitle">{props.title}</h2>
      <p className="mainText">{props.text}</p>
    </div>
  );
};
export default Header;
