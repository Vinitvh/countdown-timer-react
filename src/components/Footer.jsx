import background from "../assets/pattern-hills.svg";
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import pinterest from "../assets/icon-pinterest.svg";

function Footer() {
  return (
    <footer className="footer">
      <img src={background} alt="Stars" />
      <div className="icons">
        <img src={facebook} alt="Facebook Icon" />
        <img src={pinterest} alt="Pinterest Icon" />
        <img src={instagram} alt="Instagram Icon" />
      </div>
    </footer>
  );
}
export default Footer;
