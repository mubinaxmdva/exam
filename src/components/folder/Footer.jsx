import foter from "../../assets/Footer.svg";
import logo from "../../assets/logo.svg";
import Button from "../button";
function Footer() {
  return (
    <footer>
      <div className="container">
        <img src={logo} />
        <p>Lorem ipsum dolor sit amet consectetur adipiscing sed do eiusmod.</p>
      </div>
      <div className="container">
        <h6>Special Categories</h6>
        <p>Water Resistant</p>
        <p>Charging System</p>
        <p>Artificial Leather</p>
      </div>
      <div className="container">
        <h6>Contact Us</h6>
        <p>(808) 555-0111</p>
        <p>michelle.rivera@example.com</p>
        <p>http://www.codehow.com</p>
      </div>
      <div className="container4">
        <h6>News Latter</h6>
<input className="foot-in" type="email" placeholder="Enter your email" />
<Button>Subscribe</Button> </div>
    </footer>
  );
}
export default Footer;
