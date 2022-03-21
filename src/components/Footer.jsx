import background from "../assets/pattern-hills.svg";
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import pinterest from "../assets/icon-pinterest.svg";

function Footer() {
  return (
    <footer className="footer">
      <img src={background} alt="" />
      <div className="icons">
        <img src={facebook} alt="" />
        <img src={pinterest} alt="" />
        <img src={instagram} alt="" />
      </div>
    </footer>
  );
}
export default Footer;
